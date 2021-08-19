import { ModelModule } from './../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from './store.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [BrowserModule,ModelModule],       // dependency module.
  declarations: [StoreComponent], // register & load components,directives & pipes
  exports: [StoreComponent],  // sharing components across modules(angular). exposing components to Injector.

})

export class StoreModule {}




