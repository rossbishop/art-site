/*
	Filename: 		auth.spec.js
	Description: 	A cypress E2E test used to confirm login and logout functionality is working
	Author: 		Ross Bishop
*/

describe("Authentication:", function () {
	// Setup the application state
	beforeEach(function () {
		cy.visit("/login")
	})

	describe("Login/Logout:", () => {
		it("Allows a user to login and logout", () => {
			// Take an action (Sign in)
			cy.get(selectors.usernameInput).type("testing")
			cy.get(selectors.passwordInput).type("testing1")
			cy.get(selectors.loginButton).click()
			// Wait for login redirect before looking for logout link
			cy.wait(3000)
			// Make an assertion (Check for Logout text)
			cy.get(selectors.logoutLink).contains("Logout")
			// Take an action (Logout)
			cy.get(selectors.logoutLink).click()
			// Wait for login redirect before looking for logout link
			cy.wait(8000)
			// Make an assertion (Check for Login text)
			cy.get(selectors.loginLink).contains("Login")
		})
	})
})

export const selectors = {
	// Auth component classes
	usernameInput: '[data-cy="inputUsername"]',
	passwordInput: '[data-cy="inputPassword"]',
	loginButton: '[data-cy="submit"]',
	logoutLink: '[data-cy="logout"]',
	loginLink: '[data-cy="login"]'
}
