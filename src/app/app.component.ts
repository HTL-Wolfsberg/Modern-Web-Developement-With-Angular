import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  products: Product[] = [];
  shoppingCard:Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit()
  {
    this.productService.getProducts().then((products) =>
    {
      this.products = products;
    })
  }

  onBuyClicked(product: Product)
  {
    this.shoppingCard.push(product);
  }

}
