const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
app.use(express.json());


app.post("/add",function(req,res){
let x=parseInt(req.body.x);
let y=parseInt(req.body.y);
let ans=x+y;
res.send(JSON.stringify({ans:ans}));
});

app.post("/subtract",function(req,res){
    let x=parseInt(req.body.x);
    let y=parseInt(req.body.y);
    let ans=x-y;
    res.send(JSON.stringify({ans:ans}));
    });

 app.post("/multiply",function(req,res){
        let x=parseInt(req.body.x);
        let y=parseInt(req.body.y);
        let ans=x*y;
        res.send(JSON.stringify({ans:ans}));
        });

app.post("/divide",function(req,res){
            let x=parseInt(req.body.x);
            let y=parseInt(req.body.y);
            let ans=x/y;
            res.send(JSON.stringify({ans:ans}));
            });

app.listen(3000,function() { 
    console.log("Listening on Port 3000");
});