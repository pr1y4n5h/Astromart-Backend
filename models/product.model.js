const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Product name can't be void",
    unique: true,
    trim: true,
    uppercase: true,
  },

  image: {
    type: String,
    required: "Image can't be void",
  },

  category: {
    type: String,
    required: "Category can't be void",
    lowercase: true,
    enum: ["books", "clothing", "gadgets", "jewellery", "others"],
  },

  price: {
    type: Number,
    required: "Price can't be void",
    min: 100,
    max: 10000,
  },

  off: {
    type: Number,
  },

  deluxe: {
    type: Boolean,
    required: "Delivery details can't be void",
  },

  rating: {
    type: Number,
    min: 1,
    max: 5,
  },

  stock: {
    type: Boolean,
    required: "Stock details can't be void",
  },

  details: {
    type: String,
    minlength: [100, "Description too short"],
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
