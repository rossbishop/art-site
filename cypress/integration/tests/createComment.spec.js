/*
	Filename: 		createComment.spec.js
	Description: 	A cypress E2E test used to confirm comment creation functionality is working
	Author: 		Ross Bishop
*/

describe("Authentication:", function () {
	// Setup the application state
	beforeEach(function () {
		cy.visit("/")
	})

	describe("Create Comment:", () => {
		it("Allows a user to create a comment", () => {
			// Visit login page
			cy.visit("/login")
			// Take an action (Sign in)
			cy.get(selectors.usernameInput).type("testing")
			cy.get(selectors.passwordInput).type("testing1")
			cy.get(selectors.loginButton).click()
			// Wait for login redirect before looking for logout link
			cy.wait(3000)
			// Make an assertion (Check for Logout text)
            cy.get(selectors.logoutLink).contains("Logout") 
            // Check for Test Project and navigate to the project page
            cy.get(selectors.projectName).contains("Test Project").click()
            // Wait for page to load
            cy.wait(2000)
            // Select correct revision
            cy.get(selectors.listItem).contains("1").click()
            // Wait briefly
            cy.wait(500)
            // Enter comment
            cy.get(selectors.commentBox).type("Test Comment")
            // Submit comment
            cy.get(selectors.commentButton).click()
            // Wait for page to reload
            cy.wait(5000)
            // Select correct revision
            cy.get(selectors.listItem).contains("1").click()
            // Wait briefly
            cy.wait(500)            
            // Check comment has been added
            cy.get(selectors.comment).contains("Test Comment")
		})
	})
})

export const selectors = {
	// Auth component classes
	usernameInput: '[data-cy="inputUsername"]',
	passwordInput: '[data-cy="inputPassword"]',
	loginButton: '[data-cy="submit"]',
	logoutLink: '[data-cy="logout"]',
    loginLink: '[data-cy="login"]',
    commentBox: '[data-cy="commentInput"]',
    commentButton: '[data-cy="commentButton"]',
    comment: '[data-cy="commentContent"]',
    projectName: '[data-cy="projectName"]',
    listItem: '[data-cy="carouselLi"]'

}
