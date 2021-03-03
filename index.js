const express = require("express");

// Init app - an instance for express
const app = express();

const path = require("path");

// get method route
// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  //res.send('<script>console.log("Hello World!")</script>')
  res.sendFile(path.join(__dirname, "/index.html"));
});

// other route types - post, put, delete
app.listen(3000, function () {
  console.log("Server started on port 3000...");
});

// dom - document object model the html that the browser is rendering (the tree of elements)
// code you send to the client is being run on the client - not the server


// homework:
// get some form of data to the front end




