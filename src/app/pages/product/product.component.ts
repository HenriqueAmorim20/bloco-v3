import { ProdutosService } from './../../produtos.service';
import { Router } from '@angular/router';
import { IProduct } from './../../shared/interfaces/products';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import produtosJSON from '../../../assets/produtos.json';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  product!: IProduct | undefined;
  currentSrc!: string | undefined;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _service: ProdutosService)
  {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params['id'];
      this.product = produtosJSON.find(item => item.id === id)
      this.currentSrc = this.product?.imgUrls[0]

      this._service.getProdutoById(id).subscribe(res => {
        this.product = res as IProduct;
        if (this.product?.id) {
          this.currentSrc = this.product.imgUrls[0]
        } else {
          this.router.navigate(['/catalogo']);
        }
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}