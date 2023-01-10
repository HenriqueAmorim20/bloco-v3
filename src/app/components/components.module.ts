import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CatalogSectionComponent } from "./catalog-section/catalog-section.component";
import { AboutSectionComponent } from "./about-section/about-section.component";
import { HomeSectionComponent } from "./home-section/home-section.component";
import { HighlightsSectionComponent } from "./highlights-section/highlights-section.component";
import { ContactSectionComponent } from "./contact-section/contact-section.component";

@NgModule({
  declarations: [
    CatalogSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    HomeSectionComponent,
    HighlightsSectionComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CatalogSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    HomeSectionComponent,
    HighlightsSectionComponent,
  ],
})
export class ComponentsModule {}
