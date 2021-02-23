import { Injectable, NotFoundException } from "@nestjs/common";
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

  getProduct(prodId: string){
    const product = this.findProduct(prodId)[0]
    return {...product}
  }

  updateProduct(id: string, title: string, description: string, price: number){
    const [product, index] = this.findProduct(id)
    let updatedProduct = {...product}
    if(title){
      updatedProduct.title = title
    }
    if(description){
      updatedProduct.description = description
    }
    if(price){
      updatedProduct.price = price
    }
    this.products[index] = updatedProduct

    return {...updatedProduct}

  }

  deleteProduct(id: string){
    const index = this.findProduct(id)[1];
    this.products.splice(index,1)
  }

  private findProduct(prodId: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === prodId);
    const product = this.products[productIndex]
    if(!product){
      throw new NotFoundException('Could not found the product!')
    }
    return [ product, productIndex]
  }

}