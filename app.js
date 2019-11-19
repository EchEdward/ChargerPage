const express = require("express");
const ejs = require("ejs");
 
const app = express();
const fs = require('fs')

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('view cache', false);

app.use("/public",express.static(__dirname + "/public"));

const products = {
    garage_basic: {
        html:"garage-basic.html",
        title: "INGEREV GARAGE Basic",
    },
    fusion:{
        html:"fusion.html",
        title: 'INGEREV FUSION',
    },
    garage:{
        html:"garage.html",
        title: 'INGEREV GARAGE',
    },
    city_ground:{
        html:"city-ground.html",
        title: 'INGEREV CITY Ground',
    },
    city_duo:{
        html:"city-duo.html",
        title: 'INGEREV CITY Duo',
    },
    rapid_50:{
        html:"rapid.html",
        title: 'INGEREV RAPID 50',
    },
};

function read_error(err, contents) {
    console.log(contents);
}

app.use("/products/*", function(request, response){
    let product_item = request.baseUrl.slice(10);
    if (product_item in products) {
        response.render("header", {
            page_content: fs.readFileSync(__dirname + "/views/"+products[product_item].html, "utf8").toString(),
            page_style: "product-item.css",
            page_title: products[product_item].title,
        });
    } else response.sendStatus(404);   
});

app.use("/about_us", function(request, response){
    response.render("header", {
        page_content: fs.readFileSync(__dirname + "/views/about_us.html", "utf8").toString(),
        page_style: "about_us.css",
        page_title: 'О нас ООО "АУДЕНТ"',
    });
});

app.use("/products", function(request, response){
    response.render("header", {
        page_content: fs.readFileSync(__dirname + "/views/products.html", "utf8").toString(),
        page_style: "products.css",
        page_title: 'Продукты ООО "АУДЕНТ"',
    });
});

app.use("/", function(request, response){
    response.render("header", {
        page_content: fs.readFileSync(__dirname + "/views/main.html", "utf8").toString(),
        page_style: "main.css",
        page_title: 'ООО "АУДЕНТ"',
    });
});

app.listen(3000);