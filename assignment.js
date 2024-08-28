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
app.post("/file-write", function createFile(req, res) {
    fs.writeFile('demo.txt', 'hello world', (err) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error writing file');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File written successfully');
        }
    });
});


app.listen(5500,function (){
    console.log('Server started on port 5500');
})