import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [BrowserModule, RouterModule],
  providers: [],
  exports: [NavbarComponent, FooterComponent],
})
export class LayoutsModule {}
