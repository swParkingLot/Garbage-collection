const express = require('express');
const app = express();
const path = require('path');  
const http = require('http'); //모름
const fs = require('fs'); //모름
const connectDB = require('./DB/Connection');
const bodyParser = require('body-parser');
const { brotliDecompress, brotliDecompressSync } = require('zlib');


//DB SETTING
connectDB();
app.use(express.json({extended:false}));
app.use('/api/userModel', require('./API/User'));

//SERVER START
app.listen(3000,() =>{
    console.log('liten to 3000')
})

//KAKAO API MAP
app.get('/',(req, res)=>{
    

    res.render('index',{
        javascriptkey:process.env.javascriptkey
        
    });
});


app.post('/sendData',async(req,res)=> {

    console.log(req.body);
    res.json({ok:true});
    
})


//OTHER SETTING
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


