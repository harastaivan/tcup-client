export function getAccessTokenCypressPromise() {
    return new Cypress.Promise((resolve) => {
        cy.window().then(({ sessionStorage }) => {
            const token = sessionStorage.getItem('token')
            resolve(token)
        })
    })
}
