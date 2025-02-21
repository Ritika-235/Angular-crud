const db = require("../config/db");

class ProductService {
    static async getPaginatedProducts(page, size) {
        const offset = (page - 1) * size;
        return db.query(`
            SELECT Product.id, Product.name AS ProductName, 
                   Category.name AS CategoryName, Product.categoryId 
            FROM Product 
            JOIN Category ON Product.categoryId = Category.id 
            LIMIT ?, ?`, [offset, size]);
    }

    static async createProduct(name, categoryId) {
        return db.query("INSERT INTO Product (name, categoryId) VALUES (?, ?)", [name, categoryId]);
    }

    static async updateProduct(id, name, categoryId) {
        return db.query("UPDATE Product SET name = ?, categoryId = ? WHERE id = ?", [name, categoryId, id]);
    }

    static async deleteProduct(id) {
        return db.query("DELETE FROM Product WHERE id = ?", [id]);
    }
}

module.exports = ProductService;
