const router = require('koa-router')()

router.get('/signout', async (ctx, next) => {
    ctx.session = null
    console.log('ιεΊζε')
    ctx.body = true
})

module.exports = router
