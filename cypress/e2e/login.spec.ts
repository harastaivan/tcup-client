describe('Login', () => {
    it('visits login page', () => {
        cy.visit('/', { onBeforeLoad: (win) => win.sessionStorage.clear() })

        cy.log('Visit login page')
        cy.get('nav.navbar').findByTestId('navlink-login').click()

        cy.url().should('contain', '/login')
    })

    it('should fail login', () => {
        cy.visit('/login')

        cy.log('Fill in incorrect e-mail')
        cy.findByTestId('input-email').type('t@test')

        cy.log('Submit should be disabled')
        cy.findByTestId('button-submit').should('be.disabled')

        cy.log('Fill in password')
        cy.findByTestId('input-password').type('123456')

        cy.log('Submit should be enabled')
        cy.findByTestId('button-submit').should('not.be.disabled')

        cy.log('Submit the form')
        cy.findByTestId('button-submit').click()

        cy.log('Should get error toast')
        cy.get('.toast-error').should('have.text', 'Uživatel neexistuje')
    })

    it('should successfully login', () => {
        cy.visit('/login')

        cy.log('Fill in correct e-mail')
        cy.findByTestId('input-email').clear().type(Cypress.env('USER_EMAIL'))

        cy.log('Submit should be disabled')
        cy.findByTestId('button-submit').should('be.disabled')

        cy.log('Fill in password')
        cy.findByTestId('input-password').type(Cypress.env('USER_PASSWORD'))

        cy.log('Submit should be enabled')
        cy.findByTestId('button-submit').should('not.be.disabled')

        cy.log('Submit the form')
        cy.findByTestId('button-submit').click()

        cy.log('Should get success toast')
        cy.get('.toast-success').should('have.text', 'Byl jste přihlášen.')
    })

    it('should successfully logout', () => {
        cy.log('Logout button should be visible')
        cy.get('nav.navbar').findByTestId('navlink-logout').should('be.visible')

        cy.log('Logout')
        cy.get('nav.navbar').findByTestId('navlink-logout').click()

        cy.log('Login button should be visible')
        cy.get('nav.navbar').findByTestId('navlink-login').should('be.visible')

        cy.log('Should get success toast')
        cy.get('.toast-success').should('have.text', 'Byl jste odhlášen.')
    })

    it('should successfully login as admin', () => {
        cy.visit('/login')

        cy.log('Fill in correct e-mail')
        cy.findByTestId('input-email').clear().type(Cypress.env('ADMIN_EMAIL'))

        cy.log('Submit should be disabled')
        cy.findByTestId('button-submit').should('be.disabled')

        cy.log('Fill in password')
        cy.findByTestId('input-password').type(Cypress.env('ADMIN_PASSWORD'))

        cy.log('Submit should be enabled')
        cy.findByTestId('button-submit').should('not.be.disabled')

        cy.log('Submit the form')
        cy.findByTestId('button-submit').click()

        cy.log('Should get success toast')
        cy.get('.toast-success').should('have.text', 'Byl jste přihlášen.')

        cy.get('nav.navbar').findByTestId('admin-badge').should('be.visible')
    })

    it('should successfully logout as admin', () => {
        cy.log('Logout button should be visible')
        cy.get('nav.navbar').findByTestId('navlink-logout').should('be.visible')

        cy.log('Logout')
        cy.get('nav.navbar').findByTestId('navlink-logout').click()

        cy.log('Login button should be visible')
        cy.get('nav.navbar').findByTestId('navlink-login').should('be.visible')

        cy.log('Should get success toast')
        cy.get('.toast-success').should('have.text', 'Byl jste odhlášen.')
    })
})
