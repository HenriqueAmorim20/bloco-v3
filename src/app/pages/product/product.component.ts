import { Router } from '@angular/router';
import { IProduct } from './../../shared/interfaces/products';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import produtosJSON from '../../../assets/produtos2.json'

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  product!: IProduct | undefined;
  currentSrc!: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getProduct(id);
    });
  }

  private getProduct(id: number) {
    this.product = produtosJSON.produtos.find((item) => item.id === id);
    if (this.product) {
      this.currentSrc = this.product.imgUrls[0]
      console.log(this.currentSrc)
    } else {
      this.router.navigate(['/catalogo']);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}