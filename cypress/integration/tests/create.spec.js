/*
	Filename: 		create.spec.js
	Description: 	A cypress E2E test used to confirm content creation functionality is working
	Author: 		Ross Bishop
*/

describe("Authentication:", function () {
	// Setup the application state
	beforeEach(function () {
		cy.visit("/")
	})

	describe("Create Project:", () => {
		it("Allows a user to create a project", () => {
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
			// Take an action (Create project)
            cy.get(selectors.createLink).click()
            // Add content
            cy.get(selectors.fileSelector).attachFile('monke.png')
            // Upload content
            cy.get(selectors.fileUpload).click()
            // Wait for image to upload
            cy.wait(2000)
            // Check image has uploaded
            cy.get(selectors.uploadedImage)
            // Type project name
            cy.get(selectors.projectNameInput).type("Test Project")
            // Type project description
            cy.get(selectors.projectDescriptionInput).type("Test Description")
            // Type revision name
            cy.get(selectors.revisionNameInput).type("Test Revision")
            // Type revision description
            cy.get(selectors.revisionDescriptionInput).type("Test Revision Description")
            // Submit project details
            cy.get(selectors.createButton).click()
            // Wait for redirect to freshly created project
            cy.wait(5000)
            // See if project description, revision name and revision description are present
            cy.get(selectors.projectDescription).contains("Test Description")
            cy.get(selectors.revisionDescription).contains("Test Revision Description")
            cy.get(selectors.revisionName).contains("Test Revision")
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
    createLink: '[data-cy="create"]',
    projectNameInput: '[data-cy="projectName"]',
    projectDescriptionInput: '[data-cy="projectDescription"]',
    revisionNameInput: '[data-cy="revisionName"]',
    revisionDescriptionInput: '[data-cy="revisionDescription"]',
    createButton: '[data-cy="createButton"]',
    fileSelector: '[data-cy="fileSelector"]',
    fileUpload: '[data-cy="uploadButton"]',
    uploadedImage: '[data-cy="uploadedImage"]',
    uploadButton: '[data-cy="uploadButton"]',
    projectDescription: '[data-cy="projectDescription"]',
    revisionName: '[data-cy="revisionName"]',
    revisionDescription: '[data-cy="revisionDescription"]'
}
