
  module.exports = {
    getComments(req, res) {
        let postID = req.params.postID
        let post = req.store.posts[postID]
        console.log(post.comments)
        res.status(200).send(post.comments)
    }, 
    addComment(req, res) {
        let newComment = req.body
        let id = req.store.posts[req.params.postID].comments.length
        req.store.posts[req.params.postID].comments.push(newComment)
        res.status(201).send({commentID: id})
    },
    updateComment(req, res) {
        req.store.posts[req.params.postID].comments[req.params.commentID] = req.body
        res.status(200).send(req.store.posts[req.params.postID].comments[req.params.commentID])
    },
    removeComment(req, res) {
        req.store.posts[req.params.postID].comments.splice(req.params.commentID, 1)
        res.status(200).send(`Deleted... ${req.params.commentID}`)
    }  
}