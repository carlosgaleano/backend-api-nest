import { Controller,Get, Param, Post, Query, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {

  @Get('')
  getProducts(
    @Query('limit') limit: number=100,
    @Query('offset') offset=0,//toma el tipo de dato del parametro
    @Query('brand') brand: string,
  ) {
    return {
      message:`product: limit=> ${limit} offset=> ${offset} brand.. => ${brand}`
    }

    ;
  }

  @Get('filter')
  getProductFilter(){
   return `Yo soy un filtro`;
  }



  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Post()
  create(@Body() payload :any){
    return {
      message: 'accion de crear',
      payload,
    }
  }

}
