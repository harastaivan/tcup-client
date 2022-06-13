import { render } from '@testing-library/react'
import { Core } from 'modules/core'
import { Application } from './Application'

test('renders learn react link', () => {
    render(<Application />, { wrapper: Core })
})
