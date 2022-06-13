import 'jest-axe/extend-expect'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { axe } from 'jest-axe'

import { API_ENDPOINT } from 'config/constants'
import { LoginPage } from 'modules/auth'
import { Core } from 'modules/core'
import { toast } from 'modules/toast'
import { Redux } from 'modules/core/modules/redux'

jest.mock('modules/toast')
const mockToastSuccess = toast.success as jest.Mock

const server = setupServer(
    rest.post(`${API_ENDPOINT}/api/auth`, (req, res, ctx) =>
        res(
            ctx.json({
                token: 'token',
                user: {
                    id: 'id',
                    name: 'name',
                    surname: 'surname',
                    email: (req as any).body.email,
                    admin: false,
                },
            })
        )
    )
)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

it('form is accessible', async () => {
    const { container, debug } = render(<LoginPage />, { wrapper: Core })
    const results = await axe(container)
    expect(results).toHaveNoViolations()
})

it('should render email input', () => {
    render(<LoginPage />, { wrapper: Core })
    const input = screen.getByLabelText(/email/i)
    expect(input).toHaveProperty('type', 'email')
    expect(input).toHaveProperty('name', 'email')
    expect(input).toHaveProperty('placeholder', 'Email')
})

it('should render password input', () => {
    render(<LoginPage />, { wrapper: Core })
    const input = screen.getByLabelText(/heslo/i)
    expect(input).toHaveProperty('type', 'password')
    expect(input).toHaveProperty('name', 'password')
    expect(input).toHaveProperty('placeholder', 'Heslo')
})

it('should submit the form with credentials', async () => {
    const history = createMemoryHistory({ initialEntries: ['/login'] })
    const credentials = {
        email: 'test@email.com',
        password: 'heslo',
    }
    render(
        <Router history={history}>
            <LoginPage />
        </Router>,
        { wrapper: Redux }
    )
    const email = screen.getByLabelText(/email/i)
    const password = screen.getByLabelText(/heslo/i)
    const login = screen.getByText(/přihlásit se/i, { selector: 'button' })
    expect(login).toBeDisabled()
    userEvent.type(email, credentials.email)
    userEvent.type(password, credentials.password)
    expect(login).not.toBeDisabled()
    userEvent.click(login)
    expect(login).toBeDisabled()

    await waitFor(() => {
        expect(mockToastSuccess).toBeCalledTimes(1)
    })
    expect(mockToastSuccess).toBeCalledWith('login.success')

    expect(history.location.pathname).toBe('/')
})
