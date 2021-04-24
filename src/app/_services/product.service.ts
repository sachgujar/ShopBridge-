import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from '@environments/environment';

import {  Product } from '@app/_models/product';
const baseUrl = `${environment.apiUrl}/products`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Product[]>(baseUrl);
    }

    getById(id: string) {
        return this.http.get<Product>(`${baseUrl}/${id}`);
    }

    create(params: Product) {
        return this.http.post(baseUrl, params);
    }

    update(id: string, params:Product) {
        return this.http.put(`${baseUrl}/${id}`, params);
    }

    delete(id: string) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
}
