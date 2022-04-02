import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ConsumirApiService } from './consumir-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-tas-2022';
  public productos:Array<any>= []

  constructor(
    private consumirApiService:ConsumirApiService
    ){
this.consumirApiService.getProductos().subscribe((resp:any)=>{
  this.productos = resp
})
  }
}
