import { IProducts } from './../../shared/interfaces/products';
import { ChangeDetectionStrategy, Component } from "@angular/core";
import produtosJSON from '../../../assets/produtos.json'

@Component({
  selector: "app-catalog-section",
  templateUrl: "./catalog-section.component.html",
  styleUrls: ["./catalog-section.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogSectionComponent {
  products: IProducts[] = produtosJSON.produtos.filter((produto) => {
    return produto.catalogSection;
  });

  getUrl(url: string): string {
    return `url(${url})`;
  }
}
