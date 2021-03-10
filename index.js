const express = require("express");
// Init app - an instance for express
const app = express();
const bodyParser = require("body-parser");
//const path = require("path");

app.use(bodyParser.urlencoded({extended: true}));

// tell machine we are using ejs templating engine
app.set("view engine", "ejs");

const cooked = [
  {name: "Satay sweet potato curry", image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/satay-sweet-potato-curry-17cc62d.jpg?quality=90&webp=true&resize=440,400"},
  {name: "Freekeh pilaf", image: "https://olivetreenutrition.com/wp-content/uploads/2017/02/freekeh-1080x675.jpg"},
  {name: "Vegan brownies", image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/brownies-ba587aa.jpg?quality=90&webp=true&resize=440,400"}
]

// get method route
// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  //res.send('<script>console.log("Hello World!")</script>')
  //res.sendFile(path.join(__dirname, "/index.html"));
  //res.render("index", { data: "This is the data" });
  res.render("landing")
});

app.get("/recipes", function(req,res){
  res.render("recipes",  {cooked: cooked})
});

app.post("/recipes", function(req, res){
  var name = req.body.recipeName;
  var image = req.body.recipeImage;
  var newRecipe = {name: name, image: image};
  cooked.push(newRecipe);
  res.redirect("/recipes");
});

// other route types - post, put, delete
app.listen(3000, function () {
  console.log("Server started on port 3000...");
});

// dom - document object model the html that the browser is rendering (the tree of elements)
// code you send to the client is being run on the client - not the server

// homework:
// get some form of data to the front end :)
