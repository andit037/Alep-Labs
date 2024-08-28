class HomePage {
    
    launchUrl(){
        cy.visit('https://tutorialsninja.com/demo/')
    }
}

export default new HomePage()