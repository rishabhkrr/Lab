// import { SoccerBallComponent } from './store/soccerDetail.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [BrowserModule, StoreModule,
        RouterModule.forRoot([   // Router State tree
            {
                path: "store", component: StoreComponent

            },
            {
                path: "cart", component: CartDetailComponent

            },

            {
                path: "checkout", component: CheckoutComponent
            },
            { path: "**", redirectTo: "/store" }
        ])],
    providers: [],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}
