import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../interfaces/product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  API_URL: string = 'http://localhost:3000'


  getProducts(): Observable<Product[]> {
    console.log(`${this.API_URL}/products`)
    return this.http.get<Product[]>(`${this.API_URL}/products`);
  }

  getProduct(id: number): Observable<Product> {
    console.log(id)
    return this.http.get<Product>(`${this.API_URL}/products/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.API_URL}/products`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    console.log(id);
    return this.http.delete<Product>(`${this.API_URL}/products/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API_URL}/products/${id}`, product);
  }
}
