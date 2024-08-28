let http=require('http');
let url=require('url');
let fs=require('fs');
let express=require('express');
const app=express();

app.get("/",function (req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("This is the Home Page")

});
app.get("/about",function (req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("This is the About Page")

});
app.get("/contact",function (req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});

    res.end("This is the Contact Page")
});


app.listen(5500,function (){
    console.log('Server started on port 5500');
})