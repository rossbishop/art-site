/*
	Filename: 		updateProfile.spec.js
	Description: 	A cypress E2E test used to verify profile update functionality is working
	Author: 		Ross Bishop
*/

describe("Authentication:", function () {
	// Setup the application state
	beforeEach(function () {
		cy.visit("/")
	})

	describe("Create Project:", () => {
		it("Allows a user to update their profile", () => {
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
			// Click user dropdown toggle in header
			cy.get(selectors.userDropdown).click()
			// Navigate to profile update page
			cy.get(selectors.profileUpdateButton).click()
			// Wait for page to load
			cy.wait(2000)
			// Clear position input
			cy.get(selectors.positionInput).clear()
			// Type profile details
			cy.get(selectors.positionInput).type("Test Position")
			// Clear location input
			cy.get(selectors.locationInput).clear()
			// Type location detials
			cy.get(selectors.locationInput).type("Test Location")
			// Clear bio input
			cy.get(selectors.bioInput).clear()			
			// Type bio
			cy.get(selectors.bioInput).type("Test Biography")
			// Submit profile details
			cy.get(selectors.updateProfileButton).click()
			// Wait for submission
			cy.wait(3000)
			// Check profile details were submitted
			cy.get(selectors.profileSuccess).contains("Updated profile details successfully")

			// Clear instagram input
			cy.get(selectors.instagramInput).clear()
			// Type instagram details
			cy.get(selectors.instagramInput).type("testinstagramhandle")
			// Clear twitter input
			cy.get(selectors.twitterInput).clear()
			// Type twitter detials
			cy.get(selectors.twitterInput).type("@testtwitterhandle")
			// Clear facebook input
			cy.get(selectors.facebookInput).clear()			
			// Type facebook details
			cy.get(selectors.facebookInput).type("testfacebookhandle")
			// Submit social details
			cy.get(selectors.updateSocialButton).click()
			// Wait for submission
			cy.wait(3000)
			// Check social details were submitted
			cy.get(selectors.socialSuccess).contains("Updated social details successfully")

			// Click user dropdown toggle in header
			cy.get(selectors.userDropdown).click()
			// Navigate to profile page
			cy.get(selectors.profilePageButton).click()
			// Wait for page to load
			cy.wait(3000)
			// Check whether profile details are present
			cy.get(selectors.positionDetail).contains("Test Position")
			cy.get(selectors.locationDetail).contains("Test Location")
			cy.get(selectors.bioDetail).contains("Test Bio")

			// Check whether social details are present
			cy.get(selectors.socialDetails).contains("testinstagramhandle")
			cy.get(selectors.socialDetails).contains("@testtwitterhandle")
			cy.get(selectors.socialDetails).contains("testfacebookhandle")
			

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
	userDropdown: '[data-cy="userToggle"]',
	profileUpdateButton: '[data-cy="profileUpdateButton"]',

	positionInput: '[data-cy="positionInput"]',
	locationInput: '[data-cy="locationInput"]',
	bioInput: '[data-cy="bioInput"]',
	updateProfileButton: '[data-cy="updateProfileButton"]',
	profileSuccess: '[data-cy="profileSuccess"]',

	instagramInput: '[data-cy="instagramInput"]',
	twitterInput: '[data-cy="twitterInput"]',
	facebookInput: '[data-cy="facebookInput"]',
	updateSocialButton: '[data-cy="updateSocialButton"]',
	socialSuccess: '[data-cy="socialSuccess"]',

	profilePageButton: '[data-cy="profilePageButton"]',
	positionDetail: '[data-cy="positionDetail"]',
	locationDetail: '[data-cy="locationDetail"]',
	bioDetail: '[data-cy="bioDetail"]',
	socialDetails: '[data-cy="socialDetails"]'
	
}
