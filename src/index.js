const express = require("express");
const app = express();
const port = 3000;
const path = require("path");



// Hello World
app.get('/', (req,res)=>{

    res.send("Hello World")

    
})





// JSON SEnd
// app.get('/JSON',(req,res)=>{
//     res.json({name:'123'})
//     res.send({name:'123'})

// })






// Static page Routing

// app.use(express.static(path.join(__dirname, '../public')))

// console.log(__dirname);







// Dynamic PAge Routing using hbl

// var hbs = require("hbs");

// app.set("view engine", "hbs");

// app.use(express.static(path.join(__dirname, "../views")));
// console.log(path.join(__dirname, "../views"));

// app.get("/", (req, res) => {
//   //    Simple Render
//   res.render("about")
//   // Props pass
//   // res.render("index",{name:"HASSAN"})
// });







// change app default view directory 

// app.set("views",path.join(__dirname, "../template"));


console.log(app.request
  );

// add 404 page 
app.get('*', (req,res)=>{

  res.send("This is 404 page ")

  
})

app.listen(port, () => {
  console.log("app is listen on >>>>>>>>>>>>>>>", 3000);
});
// console.log(app);
