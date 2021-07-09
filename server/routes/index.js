
const singinRouter = require('./signin')
const signupRouter = require('./signup')
const signoutRouter = require('./signout')
const shopRouter = require('./shop')
const addtocardRouter = require('./add-to-cart')
const shoppingcartRouter = require('./shopping-cart')
const updateCartRouter = require('./updateCart')
const removeCartRouter = require('./removeCart')
const checkoutRouter = require('./checkout')
const thankyouRouter = require('./thankyou')
const historyOrderRouter = require('./history-order')

const { checkUser, requireAuth } = require('../middlewares/auth')

function route(app) {

    app.get('*', checkUser)
    app.use('/signin', singinRouter)
    app.use('/signup', signupRouter)
    app.use('/signout', signoutRouter)
    app.use('/shop', shopRouter)
    app.use('/add-to-cart', requireAuth, addtocardRouter)
    app.use('/shopping-cart', requireAuth, shoppingcartRouter)
    app.use('/updateCart', requireAuth, updateCartRouter)
    app.use('/removeCart', requireAuth, removeCartRouter)
    app.use('/checkout', requireAuth, checkoutRouter)
    app.use('/thank-you', requireAuth, thankyouRouter)
    app.use('/history-order', requireAuth, historyOrderRouter)

    app.get("/", (req, res) => {
        res.render("index")
    })

    app.get("/about", (req, res) => {
        res.render("about")
    })
    app.get("/blog-details", (req, res) => {
        res.render("blog-details")
    })
    app.get("/blog", (req, res) => {
        res.render("blog")
    })
    app.get("/contact", (req, res) => {
        res.render("contact")
    })
    app.get("/shop-details", (req, res) => {
        res.render("shop-details")
    })
}

module.exports = route
