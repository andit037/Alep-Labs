import homePage from "../../support/pages/home.page";
import cartPage from "../../support/pages/cart.page";

describe('Cart page scenario', ()=>{
    it('Success add to cart', ()=>{
        homePage.launchUrl()
        cartPage.successAdd2Cart()
    })

    it('Failed to using invalid coupon', ()=>{
        homePage.launchUrl()
        cartPage.successAdd2Cart()
        cartPage.insertInvalidCoupon((Math.random() + 1).toString(36).substring(7))
    })
})