const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    itemsInCart: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },

        quantity: {
          type: Number,
          required: "Can't add to cart without quantity!",
        },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("CartItem", CartSchema);

module.exports = { Cart };
