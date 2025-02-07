import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';  // Your Node.js backend URL

  constructor(private http: HttpClient) {}

  // Category APIs
  getCategories() {
    return this.http.get(`${this.baseUrl}/category`);
  }

  addCategory(category: any) {
    return this.http.post(`${this.baseUrl}/category/add`, category);
  }

  updateCategory(id: number, category: any) {
    return this.http.put(`${this.baseUrl}/category/update/${id}`, category);
  }

  deleteCategory(id: number) {
    return this.http.delete(`${this.baseUrl}/category/delete/${id}`);
  }

  // Product APIs
  getProducts(page: number, pageSize: number) {
    return this.http.get(`${this.baseUrl}/product?page=${page}&pageSize=${pageSize}`);
  }

  addProduct(product: any) {
    return this.http.post(`${this.baseUrl}/product/add`, product);
  }

  updateProduct(id: number, product: any) {
    return this.http.put(`${this.baseUrl}/product/update/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.baseUrl}/product/delete/${id}`);
  }
}
