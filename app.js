const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
 app.set("view engine",'ejs');
 app.use(express.static('public'));
  const items=["buy fruit", "hv assigment"];
   const workItems=[];
app.get("/",function(req,res)
{  
    var today=new Date();
    var option={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day=today.toLocaleDateString("en-us",option);
    res.render("list",{listTitle:day,newItems:items}); // show the currnt date as the tittle 

})
app.post("/", function(req, res)
{  console.log(req.body);
     var item=req.body.NewItem;
     if(req.body.list==="work")
     {
        workItems.push(item);
        res.redirect("/work");
     }
    else{
        items.push(item);
        res.redirect("/");
     }
    
    
})
 app.get("/work" , function(req,res)
 { 
    res.render("list",{ listTitle:"work list", newItems:workItems}) // show the work as the tittle  and post the workItems array
 })
//  app.post("/work", function(req, res)
//  {
//     var item=req.body.NewItem;
//     workItems.push(item);
//     res.redirect("/work");
//  })
app.get("/about", function(req,res)
{
    res.render("about");
})
app.listen(3000, function()
{
    console.log("server is running on port 3000");
});