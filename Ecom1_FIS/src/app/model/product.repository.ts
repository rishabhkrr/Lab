import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";


@Injectable()
export class ProductRepository {

  private products: Product[] = []; // array of Product[] // 15 objects
  private categories: string[] = []; // array of strings // 15 strings

  constructor(private dataSource: StaticDataSource) {

    dataSource.getProducts().subscribe((data) => {

      this.products = data;

      this.categories = data.map((p) => p.category) // 15 strings
      .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  // getProducts(category: string = null): Product[] {
  //     return this.products
  //         .filter(p => category == null || category == p.category);
  // }

  // getProduct(id: number): Product {
  //     return this.products.find(p => p.id == id);
  // }

  getProducts(category:string = null): Product[] { //"Category 1"
    return this.products
            .filter(p => category == null || category == p.category);  }

  getCategories(): string[] {
    return this.categories;
  }
}
