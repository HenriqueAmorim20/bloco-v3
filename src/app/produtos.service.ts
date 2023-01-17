import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProdutos() {
    return this.http.get('/.netlify/functions/produtos').pipe(map((res) => {
      return res;
    }), take(1));
  }

  getProdutoById(id: number) {
    return this.http.post('/.netlify/functions/produtos', { id }).pipe(map((res) => {
      return res;
    }), take(1));
  }
}
