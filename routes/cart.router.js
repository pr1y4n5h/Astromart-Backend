const express = require("express");
const router = express.Router();
const { Cart } = require("../models/cart.model");
const { authenticateUser } = require("../middleware/authenticate");

router.use(authenticateUser);

router.route("/").post(async (req, res) => {
  try {
    const cartItem = new Cart(req.body);
    const addedItem = await cartItem.save();
    res.json({
      success: true,
      cart: addedItem,
      message: "Item is in cart now.",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error in adding item" });
  }
})

router.route("/:userId").get(async (req, res) => {
  const { userId } = req.params;
  try {
    const itemsIncart = await Cart.find({ userId: { _id: userId } })
      .populate("product")
      .exec();

    res.json({ success: true, cart: itemsIncart, message: "Your Cart" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.route("/:userId/:productId").post(async (req, res) => {
  const { userId, productId } = req.params;
  const { quantity } = req.body;
  try {
    const cart =
      quantity === 0
        ? await Cart.findOneAndRemove({
            userId: { _id: userId },
            product: { _id: productId },
          })
        : await Cart.findOneAndUpdate(
            {
              userId: { _id: userId },
              product: { _id: productId },
            },
            { quantity }
          );
    res.json({ success: true, cart: cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.route("/checkout").post(async (req,res) => {
  const { userId } = req.body;
  try {
    await Cart.deleteMany({
      userId: { _id: userId },
    });
    res.json({ success: true, message: "Order placed successfully!" });
  }
  catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
})

module.exports = router;
