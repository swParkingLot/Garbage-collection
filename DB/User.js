const mongoose = require('mongoose');

//db 스키마 생성
//Map location 지리 공간 데이터
const user = new mongoose.Schema({
    
    type: { // 타입
        type : String,
    },

    name: { // 이름
        type : String,
    },

    img: { // 이미지
        type: String,
    },

    address : { // 주소
        type : String,
        unique: false,
    },

    Star:{ // 별점
        type: Number,
    },

    

    location: { // 위치(경위도값)
        type : {
            type: String,
            default: "Point",
        },
        coordinates:[Number],
    }
    //이미지
    //db 에 저장 -> 카카오Map.js 저장
    
});

module.exports = User = mongoose.model('user', user);