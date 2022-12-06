const express = require('express');
const { user, posts } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
      const likes = await likes.findAll({
        include: [user, posts],
      });
  
      const LikesExcludeuserId = await Likes.findAll({
        attributes: {
          exclude: ['userId'],
        },
        include: [
          {
            model: users,
            attributes: [
              'postId',
              'userId',
              'nickname',
            ],
          },
        ],
      });
  
      console.log(JSON.stringify(LikesExcludeuserId));
  
      res.json({ result: likes });
    } catch (error) {
      console.error(error);
      res.status(400).json({ errorMessage: error.message });
    }
  });
  
  router.post('/', async (req, res) => {
    try {
      const { userId, postId } = req.body;
      const Like = await likes.create({
        userId,
        postId,
      });
  
      res.json({ result: Like });
    } catch (error) {
      console.error(error);
      res.status(400).json({ errorMessage: error.message });
    }
  });












module.exports = router;