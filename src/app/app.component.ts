import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bloco';
  constructor(private _service: AppService) {}

  ngOnInit() {
    this._service.getProdutos().subscribe(res => {
      console.log(res)
    })
  }
}
