const express = require('express');
const router = express.Router();
const db = require("../config/db");


// Get paginated products
router.get('/all', async (req, res) => {
    let { page, size } = req.query;
    page = parseInt(page) || 1;
    size = parseInt(size) || 10;
    const [products] = await db.query(`
        SELECT Product.id, Product.name AS ProductName, Category.name AS CategoryName, Product.categoryId 
        FROM Product 
        JOIN Category ON Product.categoryId = Category.id 
        LIMIT ?, ?`, [offset, size]);

    res.json(products);
});


// Create product
router.post('/:id', async (req, res) => {
    const { name, categoryId } = req.body;
    await db.query("INSERT INTO Product (id, name, categoryId) VALUES (?,?, ?)", [id, name, categoryId]);
    res.json({ message: "Product added" });
});

// Update product
router.put('/up/:id', async (req, res) => {
    const { name, categoryId } = req.body;
    const { id } = req.params;
    await db.query("UPDATE Product SET name = ?, categoryId = ? WHERE id = ?", [name, categoryId, id]);
    res.json({ message: "Product updated" });
});

// Delete product
router.delete('/dt/:id', async (req, res) => {
    const { id } = req.params;
    await db.query("DELETE FROM Product WHERE id = ?", [id]);
    res.json({ message: "Product deleted" });
});

module.exports = router;
