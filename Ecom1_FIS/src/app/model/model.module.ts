import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { NgModule } from '@angular/core';


@NgModule({
  providers: [StaticDataSource,ProductRepository], // register & load a service
})

export class ModelModule { }   // ?
