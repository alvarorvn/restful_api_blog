const express = require('express')
const post = require('./posts')
const comment = require('./comments')
const bodyParser = require('body-parser')
const errorhandler = require('errorhandler')

let app = express()

app.use(bodyParser.json())
app.use(errorhandler())

const store = {
    posts: [
        {
            name: 'Top 10 ES6 Features every Web Developer must know',
            url: 'https://webapplog.com/es6',
            text: 'This essay will give you a quick introduction to ES6.',
            comments : [
                {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
                {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
                {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}
            ]
        }
    ]
}

app.use((req, res, next)=>{
    req.store = store
    next()
})

//posts
app.get('/posts', post.getPosts)
app.post('/posts', post.addPost)
app.put('/posts/:postID',post.updatePost)
app.delete('/posts/:postID', post.removePost)

//comments
app.get('/posts/:postID/comments', comment.getComments)
app.post('/posts/:postID/comments', comment.addComment)
app.put('/posts/:postID/comments/:commentID',comment.updateComment)
app.delete('/posts/:postID/comments/:commentID', comment.removeComment)

module.exports = {
    app, comment, post
}