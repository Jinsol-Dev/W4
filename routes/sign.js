const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const { User, Comments, Posts } = require("./models");
const authMiddleware = require("./middlewares/auth_middleware")




//회원가입 API
router.post("/users", async (req, res) => {
    const { nickname, email, password, confirmPassword } = req.body;
  
    if (password !== confirmPassword) {
      res.status(400).send({
        errorMessage: "패스워드가 패스워드 확인란과 동일하지 않습니다.",
      });
      return;
    }
  
    const exitUsers = await User.findAll({
      where: {
        [Op.or]: [{ nickname }, { email }], 
      },
    });
    if (exitUsers.length) {
      res.status(400).send({
        errorMessage: "이미 가입된 이메일 또는 닉네임이 있습니다.",
      });
      return;
    }
  
    await User.create({ email, nickname, password });
  
    res.status(200).send({ message: "회원 가입에 성공하였습니다." });
  });


  //로그인 인증
router.post("/auth", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
  
    
    if (!user || password !== user.password) {
      res.status(400).send({
        errorMessage: "이메일 또는 패스워드가 잘못됐습니다.",
      });
      return;
    }
  
    const token = jwt.sign({ userId: user.userId }, "sparta-secret-key");
    res.send({
      token,
    });
  });