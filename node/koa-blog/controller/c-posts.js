const checkLogin = require('../middlewares/check').checkLogin
const userModel = require('../lib/mysql')
const moment = require('moment')

exports.getRedirectPosts = async ctx => {
    ctx.redirect('/posts')
}

exports.getPosts = async ctx => {
    ctx.body = 'getPosts'
}

exports.getCreate = async ctx => {
    await checkLogin(ctx)
    await ctx.render('create', {
        session: ctx.session
    })
}

exports.postCreate = async ctx => {
    let { title, content } = ctx.request.body,
        id = ctx.session.id,
        name = ctx.session.user,
        time = moment().format('YYYY-MM-DD HH:mm:ss'),
        avatar;
    
    await userModel.findUserData(ctx.session.user)
        .then(res => {
            avatar = res[0]['avatar']
        })
    await userModel.insertPost([name, title, content, content, id, time, avatar])
        .then(() => {
            ctx.body = {
                code: 200,
                message: '发表文章成功'
            }
        }).catch(() => {
            ctx.body = {
                code: 500,
                message: '发表文章失败'
            }
        })
}
