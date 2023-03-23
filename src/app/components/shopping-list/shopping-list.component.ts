import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  products: Product[] = [];
  shoppingCard:Product[] = [];

  constructor(private productService: ProductService,
    private messageService: MessageService) { }

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
    this.messageService.add({severity: "success", detail: product.name + " zum Einkaufswagen hinzugefügt"})
  }
}
