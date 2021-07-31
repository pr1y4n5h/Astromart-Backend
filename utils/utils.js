const products = require("../data");
const { Product } = require("../models/product.model");

async function addToProducts() {
  try {
    products.forEach(async (product) => {
    const newProduct = new Product(product);
    const savedProduct = await newProduct.save();
    console.log(savedProduct);
    });
  } catch (e) {
    console.log(e);
  }
}


module.exports = { addToProducts }