const express = require('express')
const router = express.Router()

const Post = require('../models/Post')

// POST (Create data)
router.post('/',async(req,res)=>{
    // console.log(req.body)

    const postData = new Post({
        user:req.body.user,
        title:req.body.title,
        text:req.body.text,
        hashtag:req.body.hashtag,
        location:req.body.location,
        url:req.body.url
    })
    // try to insert...
    try{
        const postToSave = await postData.save()
        res.send(postToSave)
    }catch(err){
        res.send({message:err})
    }
})

// GET 1 (Read)
router.get('/', async(req,res)=>{
    try{
        const getPosts = await Post.find()
        res.send(getPosts)
    }catch(err){
        res.send({message:err})
    }
})

// GET 2 (Read)
router.get('/:postId', async(req,res)=>{
    try{
        const getPostById = await Post.findById(req.params.postId)
        res.send(getPostById)
    }catch(err){
        res.send({message:err})
    }
})

// Patch
router.patch('/:postId', async(req,res)=>{
    const postData = new Post({
        user:req.body.user,
        title:req.body.title,
        text:req.body.text,
        hashtag:req.body.hashtag,
        location:req.body.location,
        url:req.body.url
    })
    try{

        const updatePostById = await Post.updateOne(
            {_id:req.params.postId},
                {$set: {
                    user:req.body.user,
                    title:req.body.title,
                    text:req.body.text,
                    hashtag:req.body.hashtag,
                    location:req.body.location,
                    url:req.body.url  
                }
            }
        )
        res.send(updatePostById)
    }catch(err){
        res.send({message:err})
    }   
})

// Delete (Delete data)

// DELETE (Delete)
router.delete('/:postId',async(req,res)=>{
    try{
        const deletePostById = await Post.deleteOne({_id:req.params.postId})
        res.send(deletePostById)
    }catch(err){
        res.send({message:err})
    }
})

module.exports = router