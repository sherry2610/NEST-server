import { Body, Controller, Post } from "@nestjs/common";
import { ProductsServices } from "./products.services";

@Controller('products')
export class ProductsController {
  
  constructor(private readonly productsServices: ProductsServices){}
  
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
    ): any {
    const generatedId = this.productsServices.insertProduct(prodTitle, prodDesc, prodPrice);
    return {id: generatedId}
  }

}