const CategoryService = require("../services/category.service");

class CategoryController {
    static async getAllCategories(req, res) {
        try {
            const [categories] = await CategoryService.getAllCategories();
            res.json(categories);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getCategoryById(req, res) {
        try {
            const { id } = req.params;
            const [category] = await CategoryService.getCategoryById(id);

            if (category.length === 0) {
                return res.status(404).json({ message: "Category not found" });
            }

            res.json(category[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createCategory(req, res) {
        try {
            const { name } = req.body;
            await CategoryService.createCategory(name);
            res.json({ message: "Category added successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateCategory(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            await CategoryService.updateCategory(id, name);
            res.json({ message: "Category updated successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteCategory(req, res) {
        try {
            const { id } = req.params;
            await CategoryService.deleteCategory(id);
            res.json({ message: "Category deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = CategoryController;
