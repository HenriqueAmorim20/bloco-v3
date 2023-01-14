import { IProduct } from './../../shared/interfaces/products';
import { Component } from '@angular/core';
import produtosJSON from '../../../assets/produtos.json'

interface ISortOptions {
  label: string;
  value: number;
}

@Component({
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  productsDefault: IProduct[] = produtosJSON.produtos;

  products: IProduct[] = [...this.productsDefault];

  sortOptions: ISortOptions[] = [
    {
      label: 'Selecione uma opção',
      value: 0,
    },
    {
      label: 'Nome crescente',
      value: 1,
    },
    {
      label: 'Nome decrescente',
      value: 2,
    },
    {
      label: 'Preço crescente',
      value: 3,
    },
    {
      label: 'Preço decrescente',
      value: 4,
    },
  ]

  sortBy($event: Event) {
    const target = $event.target as HTMLSelectElement;
    const value = target.value;
    switch (value) {
      case '1':
        this.products = this.productsDefault.sort((a, b) => a.name.localeCompare(b.name));
        break
      case '2':
        this.products = this.productsDefault.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case '3':
        this.products = this.productsDefault.sort((a, b) => Number(a.price.replace(",", ".")) - Number(b.price.replace(",", ".")));
        break;
      case '4':
        this.products = this.productsDefault.sort((a, b) => Number(b.price.replace(",", ".")) - Number(a.price.replace(",", ".")));
        break
      default:
        this.products = [...this.productsDefault];
        break
    }
  }

  filterBy($event: Event) {
    const target = $event.target as HTMLInputElement;
    const value = target.value;

    this.products = this.productsDefault.filter((item) => {
      const A = item.name.toLowerCase();
      const B = value.toLowerCase()
      return A.includes(B)
    })
  }

  setUrl(item: IProduct, url: string) {
    const el = document.getElementById(item.id as unknown as string) as HTMLImageElement;
    el.src = url;
  }
}
