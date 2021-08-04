const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },

    quantity: {
      type: Number,
      default: 1,
    },    
  },
  
  { timestamps: true }
);

// const CartSchema = new Schema(
//   {
//     product: {
//       type: Schema.Types.ObjectId,
//       ref: "Product",
//     },

//     quantity: {
//       type: Number,
//       default: 1,
//     },    
//   },
  
//   { timestamps: true }
// );

const Cart = mongoose.model("Cart", CartSchema);

module.exports = { Cart };
