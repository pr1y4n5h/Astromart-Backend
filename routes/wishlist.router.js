const express = require("express");
const router = express.Router();
const { Wishlist } = require("../models/wishlist.model");
const {authenticateUser} = require("../middleware/authenticate")


router.use(authenticateUser);

router.route("/:userId")
.get( async (req, res) => {
  const { userId } = req.params;
  try {
    const wishlist = await Wishlist.find({ userId: { _id: userId } })
      .populate("product")
      .exec();
    res.json({ success: true, wishlist: wishlist });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.route("/:userId/:productId")
.post( async (req, res) => {
  const { type } = req.body;
  const { userId, productId } = req.params;
  try {
    const wishlistItem = type === "REMOVE" ? await Wishlist.findOneAndRemove({
            userId: { _id: userId },
            product: { _id: productId },
          }) : await new Wishlist({
            userId: { _id: userId },
            product: { _id: productId },
          }).save();
    res.json({
      success: true,
      wishlistItem: wishlistItem,
      message: "Wishlist updated",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
)

module.exports = router