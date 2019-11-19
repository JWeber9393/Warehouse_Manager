import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //Dependency injection**


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  allProducts() {
    return this._http.get('/api/products')
  }

  oneProduct(id: string) {
    return this._http.get(`/api/products/${id}`)
  }

  editProduct(product, id: string) {
    console.log(id);
    return this._http.put(`/api/products/${id}`, product)
  }

  createProduct(product) {
    return this._http.post('/api/products', product)
  }

  deleteProduct(product) {
    return this._http.delete(`/api/products/${product._id}`, product)
  }
}

