import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    const params = new HttpParams().set('id', id);
    return this.http.get('/.netlify/functions/produtos', { params }).pipe(map((res) => {
      return res;
    }), take(1));
  }
}
