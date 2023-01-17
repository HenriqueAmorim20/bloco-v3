import { ProdutosService } from './../../produtos.service';
import { IProduct } from './../../shared/interfaces/products';
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-catalog-section",
  templateUrl: "./catalog-section.component.html",
  styleUrls: ["./catalog-section.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogSectionComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private _service: ProdutosService) { }

  ngOnInit() {
    this._service.getProdutos().subscribe(res => {
      this.products = res as IProduct[];
    })
  }

  getUrl(url: string): string {
    return `url(${url})`;
  }
}
