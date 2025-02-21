const express = require("express");
const ProductController = require("../controllers/product.controller");

const router = express.Router();

router.get("/all", ProductController.getPaginatedProducts);
router.get("/:id", ProductController.getProductById);
router.post("/", ProductController.createProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
