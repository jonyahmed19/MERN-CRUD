const express = require("express");
const router = express.Router();
const { healthCheck } = require("../controllers/generalController");
const productController = require("../controllers/ProductController");

/**
 * Health Check
 */
router.get("/health", healthCheck);

/***
 * CRUD APIs
 */

router.post("/create", productController.createProduct);
router.get("/products", productController.readAllProduct);
router.put("/products/:id", productController.updateProductByID);
router.get("/products/:id", productController.readProductByID);
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
