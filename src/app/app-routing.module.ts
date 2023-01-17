import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogComponent } from "./pages/catalog/catalog.component";
import { ProductComponent } from "./pages/product/product.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "catalogo", component: CatalogComponent },
  { path: "catalogo/:id", component: ProductComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
