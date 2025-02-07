export class ProductComponent {
  products = [
    { id: 1, name: 'Laptop', category_name: 'Electronics' },
    { id: 2, name: 'Shirt', category_name: 'Clothing' },
  ];

  categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
  ];

  productName = '';
  selectedCategoryId: number | null = null;

  addProduct() {
    if (!this.productName || !this.selectedCategoryId) return;

    const selectedCategory = this.categories.find(cat => cat.id === this.selectedCategoryId);
    const newProduct = {
      id: this.products.length + 1,
      name: this.productName,
      category_name: selectedCategory ? selectedCategory.name : 'Unknown'
    };

    this.products.push(newProduct);
    this.productName = '';
    this.selectedCategoryId = null;
  }

  updateProduct(id: number) {
    const product = this.products.find(p => p.id === id);
    if (product) {
      this.productName = product.name;
      this.selectedCategoryId = this.categories.find(cat => cat.name === product.category_name)?.id || null;
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}
