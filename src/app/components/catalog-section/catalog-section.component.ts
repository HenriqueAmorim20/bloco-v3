import { ChangeDetectionStrategy, Component } from "@angular/core";

interface ICatalogSectionItem {
  id: number;
  name: string;
  price: string;
  imgUrl: string;
}

@Component({
  selector: "app-catalog-section",
  templateUrl: "./catalog-section.component.html",
  styleUrls: ["./catalog-section.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogSectionComponent {
  catalogItems: ICatalogSectionItem[] = [
    {
      id: 0,
      name: "UnB",
      price: "85,90",
      imgUrl: "/assets/images/catalog-section/1.png",
    },
    {
      id: 1,
      name: "Modernismo",
      price: "85,90",
      imgUrl: "/assets/images/catalog-section/2.png",
    },
    {
      id: 2,
      name: "Plano Piloto",
      price: "85,90",
      imgUrl: "/assets/images/catalog-section/3.png",
    },
    {
      id: 3,
      name: "Esplanada",
      price: "85,90",
      imgUrl: "/assets/images/catalog-section/4.png",
    },
  ];

  getUrl(url: string): string {
    return `url(${url})`;
  }
}
