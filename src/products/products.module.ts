import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsServices } from "./products.services";

@Module({
  controllers:[ProductsController],
  providers: [ProductsServices]
})
export class ProductModule {}