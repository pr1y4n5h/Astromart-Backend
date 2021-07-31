const express = require("express");
const router = express.Router();
const { extend, concat, map } = require("lodash");
const { Cart } = require("../models/cart.model");
const { authenticateUser } = require("../middleware/authenticate");

// router.route("/:userId")
// .get( async (req, res) => {
//   try {
//     const {userId} = req.params;
//     const cartItems = await Cart.findById(userId).populate("itemsInCart.product");
//     res.json({success: true, cartItems })
//   }
//   catch(err) {
//      res.status(500).json({success: false, message: "Unable to fetch cart", errorMessage: err.message});
//   }
// })

// .post( async (req, res) => {
//   try {
//     const {userId} = req.params;
//     const { product } = req.body;

//     let cartItems = await Cart.findById(userId);

//     if(!cartItems) {
//       const newCart = new Cart({ _id: userId, itemsInCart: [{ product: product._id, quantity: 1 }] });

//       newCart = await newCart.save();
//       res.status(201).json({success: true, newCart })
//     }

//     cartItems = extend(cartItems, {itemsInCart: concat(cartItems.itemsInCart, { product: product._id, quantity: 1 })} );

//     cartItems = await cartItems.save();
//     res.status(201).json({ success: true, cartItems})
//   }
//   catch (err) {
//     res.status(500).json({success: false, message: "Unable to update quantity", errorMessage: err.mesage});
//   }
// });

// router.route("/:userId/:productId")
// .post( async (req, res) => {
//   const {userId, productId} = req.params;
//   const {quantity} = req.body;

//   let cartItems = await Cart.findById(userId);

//   cartItems = extend(cartItems, {itemsInCart: map() } )

// } )

// router.use(authenticateUser);

router.route("/").get(async (req, res) => {
  res.send("This is cart");
});

module.exports = router;
