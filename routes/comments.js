const express = require('express');  
const { Comment } = require('../models');     

const router = express.Router();

//댓글 생성 
router.post('/:postId', async(req,res,next) => {  
    try {
      const { postId}=req.params;
      const {user, password, content} = req.body;      
      // console.log(typeof postId);
      const finder = await Post.find({_id: postId})
      if (finder.length===0){
        return res.status(400).send({ err: "해당 게시글이 존재하지 않습니다."})
      } else{
        await Comment.create({user, password, content, postId})
          res.json({message:'댓글 생성이 완료되었습니다.'})
        }   
      }catch(error){
      next(error)
    }})  
  
//댓글 목록 조회
router.get('/:postId', async(req,res,next) => {
  try {
    const {postId} = req.params
    const comments = await Comment.find({postId : postId})
    if (comments.length === 0 ){
      return res.status(400).send({err:"데이터 형식이 올바르지 않습니다."})
    } else {
      res.json({Commentlist:comments})
    }
    }catch(error){
    next(error)
  }})            
                                               
//댓글 수정
router.put('/:commentId', async(req,res,next) => {
  const {commentId} = req.params
  const {password, content} = req.body;
  try{
    const finder = await Comment.find({commentId : commentId})
    if (finder.length === 0){
      return res.status(400).send({err:"데이터 형식이 올바르지 않습니다."})
    } else {
      await Comment.updateOne({commentId:commentId, password:password},{content:content}) 
      res.json({message:'댓글이 수정되었습니다.'})
   }
  } catch(error){
   next(error) 
}})

//댓글 삭제
router.delete('/:commentId', async(req,res,next) => {
  const {commentId} = req.params
  const {password} = req.body
  try{
  const thatComment = await Comment.find({_id:commentId})
        if (thatComment.length === 0) {           
            return  res.status(400).send({ err: "삭제할 댓글이 존재하지 않습니다."});
        } else {
        await Post.deleteOne({commentId:commentId, password:password});
        }
    }catch(error){
    next(error)
    }})

module.exports = router;
