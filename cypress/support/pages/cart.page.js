class CartPage {

    successAdd2Cart(){
        cy.get(':nth-child(2) > .product-thumb > .image > a > .img-responsive').click()
        cy.get('#button-cart').click()
        cy.get('.alert').should('contain','Success: You have added iPhone to your shopping cart!')

    }

    insertInvalidCoupon(coupon){
        cy.get('.list-inline > :nth-child(4)').click()
        cy.get(':nth-child(1) > .panel-heading > .panel-title > .accordion-toggle').click()
        cy.get('#input-coupon').type(coupon)
        cy.get('#button-coupon').click()
        cy.get('.alert').should('contain','Warning: Coupon is either invalid, expired or reached its usage limit!')
    }
}

export default new CartPage()