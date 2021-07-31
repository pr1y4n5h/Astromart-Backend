const express = require('express');
const bodyParser = require('body-parser') // for POST
const mongoose = require("mongoose")
const cors = require('cors');
const app = express();
const authenticateUser = require("./middleware/authenticate")
const {addToProducts} = require("./utils/utils");
require('dotenv').config()
const port = process.env.PORT || 5000;

//Middlewares
const {apiServerErrors} = require("./middleware/api-server-errors.js")
const {routeNotFound} = require("./middleware/404-page.js")

//DB Connection
const { initializeDBConnection } = require("./db/db.connect.js")

initializeDBConnection();

app.use(bodyParser.json());  // for POST
app.use(cors());

// addToProducts(); // To add multiple products in DB at once.

app.get('/', (req, res) => {
  res.send( "Welcome to the API of AstroMart!" )
});

// Routers
const productsRouter = require("./routes/product.router");
const cartRouter = require("./routes/cart.router");
const wishlistRouter = require("./routes/wishlist.router");
const userRouter = require("./routes/user.router")
const loginRouter = require("./routes/login.router")

// mounting Routers on URL
app.use("/products", productsRouter);

app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);
app.use("/sign-up", userRouter);
app.use("/login", loginRouter)

// Don't Move
app.use(apiServerErrors)
app.use(routeNotFound)

app.listen(port, () => {
  console.log(`Astromart API listening on port ${port}!`)
});