import Posts from '../models/Posts'

export function getAllPosts(req, res, next) {
    Posts.find((err, posts) => {
        if (err) {
            res.status(500).json({err})
        }
        res.status(200).json({posts})
    })
}

export function getPostById(req, res, next) {
    const id = req.params.id
    Posts.findById(id, (err, post) => {
        if (err) {
            res.status(500).json({err})
        }
        res.status(200).json({post})
    })
}

export function createPost(req, res, next) {
    const title = req.body.title
    const content = req.body.content

    if(!title){
        res.status(422).json({err: 'Title is required.'})
        return
    }
    
    if(!content){
        res.status(422).json({err: 'Content is required.'})
        return
    }

    if(!title && !content){
        res.status(422).json({err: 'Title and Content is required.'})
        return
    }

    const post = new Posts({
        title,
        content
    })

    post.save((err, post) => {
        if(err){
            res.status(500).json({err})
        }
        res.status(200).json({post})
    })
}

export function updatePost(req, res, next) {
    const id = req.params.id
    
    Posts.findByIdAndUpdate(id, req.body, (err, post) => {
        if(err){
            res.status(500).json({err})
        }
        res.status(200).json()
    })
}

export function deletePost(req, res, next) {
    const id = req.body.id
    
    Posts.findByIdAndRemove(id, req.body, (err, post) => {
        if(err){
            res.status(500).json({err})
        }
        res.status(200).json({post})
    })
}

