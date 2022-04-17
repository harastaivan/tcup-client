import { getAccessTokenCypressPromise } from '../support/token'

const requiredFields = [
    'phone',
    'aeroclub',
    'region',
    'competitionClass',
    'gliderType',
    'registrationNumber',
    'startNumber',
    'logger',
    'accomodationType',
    'quantity',
    'meals',
]

const allFields = [...requiredFields, 'birthDate', 'note']

describe('Registration', () => {
    it('visits registration page', () => {
        cy.visit('/', { onBeforeLoad: (win) => win.sessionStorage.clear() })

        cy.log('Visit login page')
        cy.get('nav.navbar').findByTestId('navlink-registration').click()

        cy.url().should('contain', '/registration')
    })

    it('should successfully login', () => {
        cy.log('Fill in correct e-mail')
        cy.findByTestId('input-email').clear().type(Cypress.env('USER_EMAIL'))

        cy.log('Fill in password')
        cy.findByTestId('input-password').type(Cypress.env('USER_PASSWORD'))

        cy.log('Login')
        cy.findByTestId('button-submit').click()

        cy.log('Should get success toast')
        cy.get('.toast-success').should('have.text', 'Byl jste přihlášen.')
    })

    it('should maybe delete the registration', () => {
        // eslint-disable-next-line jest/valid-expect-in-promise
        getAccessTokenCypressPromise().then((token) => {
            cy.request({
                method: 'DELETE',
                url: `${Cypress.env('API_ENDPOINT')}/api/registration`,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    authorization: `Bearer ${token}`,
                },
                body: {},
                failOnStatusCode: false,
            })
        })
    })

    it('should fail form required validation', () => {
        cy.findByTestId('registration-as-user-title').should('be.visible')

        cy.log('Submit the form')
        cy.findByTestId('button-submit').click()

        requiredFields.forEach((field) => {
            cy.findByTestId(`form-group-${field}`).contains('Pole je povinné')
        })
    })

    it('should fill and submit the form', () => {
        cy.findByTestId('registration-as-user-title').should('be.visible')

        cy.findByTestId(`input-birthDate`).type('2000-01-01')
        cy.findByTestId(`input-phone`).type('+420 777 666 555')
        cy.findByTestId(`input-aeroclub`).type('Aeroklub')
        cy.findByTestId(`input-region`).select('Morava')

        cy.findByTestId(`input-gliderType`).should('be.disabled')
        cy.findByTestId(`input-competitionClass`).select('Klub')
        cy.findByTestId(`input-gliderType`).should('not.be.disabled')

        cy.findByTestId(`input-gliderType`).select(5)

        cy.findByTestId(`input-registrationNumber`).type('OK-1111')
        cy.findByTestId(`input-startNumber`).type('HI')
        cy.findByTestId(`input-logger`).type('cypress')
        cy.findByTestId(`input-accomodationType`).select(1)
        cy.findByTestId(`input-quantity`).type('1')
        cy.findByTestId(`input-meals`).type('3')
        cy.findByTestId(`input-note`).type('Cypress is cool')

        cy.log('Submit the form')
        cy.findByTestId('button-submit').click()

        cy.log('Should get success toast')
        cy.get('.toast-success').should('have.text', 'Přihláška byla úspěšně vyplněna.')
    })

    it('should see the submitted form', () => {
        cy.visit('/registration')

        allFields.forEach((field) => {
            cy.findByTestId(`input-${field}`).invoke('val').should('not.be.empty')
        })
    })

    it('should update the registration', () => {
        cy.findByTestId(`input-birthDate`).clear()
        cy.findByTestId(`input-note`).clear()

        cy.findByTestId(`input-competitionClass`).select('Kombi')
        cy.findByTestId(`input-gliderType`).select(10)

        cy.log('Submit the form')
        cy.findByTestId('button-submit').click()

        cy.log('Should get success toast')
        cy.get('.toast-success').should('have.text', 'Přihláška byla úspěšně upravena.')
    })

    it('should see the updated form', () => {
        cy.visit('/registration')

        requiredFields.forEach((field) => {
            cy.findByTestId(`input-${field}`).invoke('val').should('not.be.empty')
        })
    })

    it('should delete the registration', () => {
        // eslint-disable-next-line jest/valid-expect-in-promise
        getAccessTokenCypressPromise().then((token) => {
            cy.request({
                method: 'DELETE',
                url: `${Cypress.env('API_ENDPOINT')}/api/registration`,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    authorization: `Bearer ${token}`,
                },
                body: {},
            }).its('isOkStatusCode')
        })
    })
})
