const express = require("express");
const ejs = require("ejs");
 
const app = express();

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


app.use("/", function(request, response){
    response.sendFile(__dirname + "/main.html");
});

app.listen(3000);