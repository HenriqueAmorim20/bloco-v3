import { ProdutosService } from './../../produtos.service';
import { IProduct } from './../../shared/interfaces/products';
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import produtosJSON from '../../../assets/produtos.json'

@Component({
  selector: "app-catalog-section",
  templateUrl: "./catalog-section.component.html",
  styleUrls: ["./catalog-section.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogSectionComponent implements OnInit {
  products: IProduct[] = produtosJSON.filter((item) => {
    return item.mainPage;
  });

  constructor(private _service: ProdutosService) { }

  ngOnInit() {
    this._service.getProdutos().subscribe(res => {
      this.products = res as IProduct[];
    })
  }
}
