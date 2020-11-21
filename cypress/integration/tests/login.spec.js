/*
	Filename: 		login.spec.js
	Description: 	A cypress E2E test used to confirm login functionality is working
	Author: 		Ross Bishop
*/

describe("Authentication:", function () {
	// Step 1: setup the application state
	beforeEach(function () {
		cy.visit("/login")
	})

	describe("Login:", () => {
		it("Allows a user to login", () => {
			// Step 2: Take an action (Sign in)
			cy.get(selectors.usernameInput).type("testing")
			cy.get(selectors.passwordInput).type("testing1")
			cy.get(selectors.loginButton).click()

			// Wait for login redirect before looking for logout link
			cy.wait(3000)

			// Step 3: Make an assertion (Check for logout text)
			cy.get(selectors.logoutLink).contains("Logout")
		})
	})
})

export const selectors = {
	// Auth component classes
	usernameInput: '[data-cy="inputUsername"]',
	passwordInput: '[data-cy="inputPassword"]',
	loginButton: '[data-cy="submit"]',
	logoutLink: '[data-cy="logout"]'
}
