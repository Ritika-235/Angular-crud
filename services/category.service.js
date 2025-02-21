const db = require("../config/db");

class CategoryService {
    static async getAllCategories() {
        return db.query("SELECT * FROM Category");
    }

    static async getCategoryById(id) {
        return db.query("SELECT * FROM Category WHERE id = ?", [id]);
    }

    static async createCategory(name) {
        return db.query("INSERT INTO Category (name) VALUES (?)", [name]);
    }

    static async updateCategory(id, name) {
        return db.query("UPDATE Category SET name = ? WHERE id = ?", [name, id]);
    }

    static async deleteCategory(id) {
        return db.query("DELETE FROM Category WHERE id = ?", [id]);
    }
}

module.exports = CategoryService;
