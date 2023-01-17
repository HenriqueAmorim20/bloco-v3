import { ProdutosService } from './produtos.service';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './components/components.module';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './pages/product/product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, CatalogComponent, ProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    ComponentsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent],
})
export class AppModule { }
