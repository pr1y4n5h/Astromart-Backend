const mongoose = require("mongoose");
const { Schema } = mongoose;

const WishlistSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    }
  },

  { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", WishlistSchema);

module.exports = { Wishlist };
