import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogComponent } from "./pages/catalog/catalog.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "catalogo", component: CatalogComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
