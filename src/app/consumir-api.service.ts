import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumirApiService {
  _url=" https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior/products "

  constructor(private http:HttpClient){
    
  }

  getProductos(){
let header = new HttpHeaders()
.set('Type-content','aplication/json')

return this.http.get(this._url,{
  headers:header
});
  }
  }




// private url: string = "http://localhost:3000/posts";
  // private ArrayG: Array<ResponseG>;
  // constructor( private http: HttpClient) { }

  // postRespuesta(_body: PeticionEnvio): Observable<ResponseG> {

  //   return this.http.post<ResponseG>(this.url, _body);
  // }
  // getRespuesta(): Observable<ResponseG[]> {
  //   return this.http.get<ResponseG[]>(this.url);
  // }
  // putRespuesta(_id: number, _body: PeticionEnvio): Observable<ResponseG> {
  //   let urlcom = this.url + "/" + _id;
  //   return this.http.put<ResponseG>(urlcom, _body);


