import { Injectable } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class ProductsServices {
  products: Product[] = []

  insertProduct(title: string, description: string, price: number){
    const id = Math.random().toString()
    const newProduct = new Product(id, title, description, price);
    this.products.push(newProduct)
    return id
  }

  getAllProducts(){
    return [...this.products]
  }

}