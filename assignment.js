let http=require('http');
let url=require('url');
let fs=require('fs');
let express=require('express');
const app=express();

app.listen(5500,function (){
    console.log('Server started on port 5500');
})