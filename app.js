const express = require('express');
const {sequelize} = require('./models/index.js'); 
// 다른 require문은 일단 생략
const ConnectDB = async () => {
    try {
        await sequelize.authenticate().then( 
            () => console.log('데이터베이스 연결 성공!')
        );
        await sequelize.sync().then(
            () => console.log('동기화 완료!')
        );
    } catch (error) {
        console.error('DB 연결 및 동기화 실패', error);
    }
}
// DB와 연결 및 동기화
ConnectDB();