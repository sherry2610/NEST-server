import { Injectable } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class ProductsServices {
  products: Product[] = []

  insertProduct(title: string, description: string, price: string){
    const newProduct = new Product(Math.random().toString(), title, description, price);
    this.products.push(newProduct)
  }
}