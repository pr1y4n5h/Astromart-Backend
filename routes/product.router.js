const express = require("express");
const router = express.Router();
const { extend } = require("lodash");
const { Product } = require("../models/product.model");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const products = await Product.find({});
      res.json({ success: true, products });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Unable to fetch products",
        errorMessage: err.mesage,
      });
    }
  })
  .post(async (req, res) => {
    try {
      const product = req.body;
      const NewProduct = new Product(product);
      const savedProduct = await NewProduct.save();
      res.json({ success: true, product: savedProduct });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "unable to add products",
        errorMessage: err.message,
      });
    }
  });

router.param("productId", async (req, res, next, productId) => {
  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res
        .status(400)
        .json({ success: false, message: "Error in getting product" });
    }
    req.product = product;
    next();
  } catch {
    res.status(400).json({
      success: false,
      message: "Error while retrieving the products...",
    });
  }
});

router
  .route("/:productId")
  .get((req, res) => {
    const { product } = req; // To read by id
    product.__v = undefined;
    res.json({ success: true, product });
  })
  .post(async (req, res) => {
    const productUpdates = req.body;
    let { product } = req;
    product = extend(product, productUpdates);
    product = await product.save();
    product.__v = undefined;
    res.json({ success: true, product });
  });

module.exports = router;
