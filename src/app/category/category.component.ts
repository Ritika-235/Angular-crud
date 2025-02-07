export class CategoryComponent {
  categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
  ];
  categoryName = '';
  editMode = false;
  selectedCategoryId: number | null = null;

  addCategory() {
    if (this.editMode) {
      // Update category
      const category = this.categories.find(cat => cat.id === this.selectedCategoryId);
      if (category) {
        category.name = this.categoryName;
      }
      this.resetForm();
    } else {
      // Add new category
      const newCategory = {
        id: this.categories.length + 1,
        name: this.categoryName
      };
      this.categories.push(newCategory);
      this.categoryName = '';
    }
  }

  editCategory(category: any) {
    this.categoryName = category.name;
    this.selectedCategoryId = category.id;
    this.editMode = true;
  }

  deleteCategory(id: number) {
    this.categories = this.categories.filter(category => category.id !== id);
  }

  resetForm() {
    this.categoryName = '';
    this.selectedCategoryId = null;
    this.editMode = false;
  }
}
