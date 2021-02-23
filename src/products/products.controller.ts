import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
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

  @Get()
  getAllProducts(){
    return [...this.productsServices.getAllProducts()]
  }

  @Get(':id')
  getProduct(@Param('id') id: string){
    const product = this.productsServices.getProduct(id)
    return {...product}
  }

  @Patch(':id')
  updateProduct(@Param('id') prodId: string, @Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number){
    const product = this.productsServices.updateProduct(prodId, prodTitle, prodDesc, prodPrice)
    return {...product}
  }

}