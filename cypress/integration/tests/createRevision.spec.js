/*
	Filename: 		createRevision.spec.js
	Description: 	A cypress E2E test used to confirm revision functionality is working
	Author: 		Ross Bishop
*/

describe("Authentication:", function () {
	// Setup the application state
	beforeEach(function () {
		cy.visit("/")
	})

	describe("Create Revision:", () => {
		it("Allows a user to create a revision", () => {
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
            // Check for Add Revision button and navigate to the Add Revision page
            cy.get(selectors.addRevisionButton).click()
            // Wait for page to load
            cy.wait(2000)
            // Add content
            cy.get(selectors.fileSelector).attachFile('monke.png')
            // Upload content
            cy.get(selectors.fileUpload).click()
            // Wait for image to upload
            cy.wait(2000)
            // Check image has uploaded
            cy.get(selectors.uploadedImage)            
            // Type revision name
            cy.get(selectors.revisionNameInput).type("Test Another Revision")
            // Type revision description
            cy.get(selectors.revisionDescriptionInput).type("Test Another Revision Description")
            // Submit project details
            cy.get(selectors.createButton).click()
            // Wait for redirect to freshly created project
            cy.wait(5000)            
            // See if revision name and revision description are present
            cy.get(selectors.revisionDescription).contains("Test Another Revision Description")
            cy.get(selectors.revisionName).contains("Test Another Revision")
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
    createButton: '[data-cy="createButton"]',
    addRevisionButton: '[data-cy="addRevisionButton"]',
    revisionNameInput: '[data-cy="revisionName"]',
    revisionDescriptionInput: '[data-cy="revisionDescription"]',
    fileSelector: '[data-cy="fileSelector"]',
    fileUpload: '[data-cy="uploadButton"]',
    uploadedImage: '[data-cy="uploadedImage"]',
    uploadButton: '[data-cy="uploadButton"]',
    listItem: '[data-cy="carouselLi"]',
    revisionName: '[data-cy="revisionName"]',
    revisionDescription: '[data-cy="revisionDescription"]',
    projectName: '[data-cy="projectName"]'

}
