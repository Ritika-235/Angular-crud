const express = require('express');
const router = express.Router();
const db = require("../config/db");


// Get all categories
router.get('/all', async (req, res) => {
    const [categories] = await db.query("SELECT * FROM Category");
    res.json(categories);
});



// Create category
router.post('/:name', async (req, res) => {
    const { name } = req.body;
    await db.query("INSERT INTO Category (name) VALUES (?)", [name]);
    res.json({ message: "Category added" });
});

// Update category
router.put('/up/:id', async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    await db.query("UPDATE Category SET name = ? WHERE id = ?", [name, id]);
    res.json({ message: "Category updated" });
});

// Delete category
router.delete('/dlt/:id', async (req, res) => {
    const { id } = req.params;
    await db.query("DELETE FROM Category WHERE id = ?", [id]);
    res.json({ message: "Category deleted" });
});

module.exports = router;
