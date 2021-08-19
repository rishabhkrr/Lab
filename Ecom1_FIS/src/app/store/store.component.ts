import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
  selector: "store",
  templateUrl: "store.component.html",
})

export class StoreComponent { // orphan - register.

  public selectedCategory = null;  // "Category 1"  -> //null
  public productsPerPage = 4; // 4
  public selectedPage = 1;

  constructor(private repository: ProductRepository) {}

  /*  get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    } */

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage // 4
    return this.repository.getProducts(this.selectedCategory)
    .slice(pageIndex, pageIndex + this.productsPerPage); // first 6 products

  }


 get categories(): string[] {
    return this.repository.getCategories();
  }

   changeCategory(newCategory?: string) { //"Category 1"
        this.selectedCategory = newCategory;
        this.changePage(1);
    }

   changePage(newPage: number) {
        this.selectedPage = newPage;
    }

  changePageSize(newSize: number) { // 6
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }



  get pageNumbers(): number[] {
     return Array(Math.ceil(this.repository
         .getProducts(this.selectedCategory).length / this.productsPerPage))
             .fill(0).map((x, i) => i + 1);
  }
}
