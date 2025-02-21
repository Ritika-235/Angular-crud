const ProductService = require("../services/product.service");

class ProductController {
    static async getPaginatedProducts(req, res) {
        try {
            let { page, size } = req.query;
            page = parseInt(page) || 1;
            size = parseInt(size) || 10;

            const [products] = await ProductService.getPaginatedProducts(page, size);
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createProduct(req, res) {
        try {
            const { name, categoryId } = req.body;
            await ProductService.createProduct(name, categoryId);
            res.json({ message: "Product added successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const { name, categoryId } = req.body;
            await ProductService.updateProduct(id, name, categoryId);
            res.json({ message: "Product updated successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            await ProductService.deleteProduct(id);
            res.json({ message: "Product deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ProductController;
