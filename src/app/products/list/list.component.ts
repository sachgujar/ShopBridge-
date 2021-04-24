import { Component, OnInit } from '@angular/core';
import { Product } from '@app/_models/product';
import { ProductService } from '@app/_services/product.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  products: Product[] = [];

  page = 0;
  pageSize = 2;

  // items = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getAll()
          .pipe(first())
          .subscribe(products => this.products = products);
        //   for(let i = 1; i <= 100; i++){
        //     this.items.push({Name: 'Shop ' + i});
        //  }
  }

  deleteUser(id: string) {
      let product = this.products.find(x => x.id === id);
      product.isDeleting = true;
      this.productService.delete(id)
          .pipe(first())
          .subscribe(() => this.products = this.products.filter(x => x.id !== id));
  }

}
