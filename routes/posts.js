module.exports = {
    getPosts(req, res) {
        console.log(req.store)
        res.status(200).send(req.store)
    },
    addPost(req, res) {
        let newPost = req.body
        let id = req.store.posts.length
        req.store.posts.push(newPost)
        res.status(201).send({postID: id})
    },
    updatePost(req, res) {
        req.store.posts[req.params.postID] = req.body
        res.status(200).send(req.store.posts[req.params.postID])
    },
    removePost(req, res) {
        req.store.posts.splice(req.params.postID, 1)
        res.status(200).send(`Deleted... ${req.params.postID}`)
    }
}