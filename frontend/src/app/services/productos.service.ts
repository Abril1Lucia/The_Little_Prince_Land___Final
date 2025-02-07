import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imagen } from '../interfaces/Imagen';


@Injectable({
  providedIn: 'root'
})


export class ProductosService {


  private _httpClient = inject(HttpClient); 

  API_URL_GET = 'http://18.227.209.169:9000/imagenes/obtener';
  API_URL_POST = 'http://18.227.209.169:9000/imagenes/crear';
  API_URL_PUT = 'http://18.227.209.169/imagenes/actualizar';
  API_URL_DELETE = 'http://18.227.209.169/imagenes/eliminar';


  
 //obtener datos
 getProducts() {
  return this._httpClient.get(this.API_URL_GET);
 }

//crear datos
createProduct(producto: Imagen) {
  return this._httpClient.post(this.API_URL_POST, producto);
}

//modificar datos
updateProduct(id: string | undefined, producto: Imagen
) {
  return this._httpClient.put(`${this.API_URL_PUT}/${id}`, producto);
}

//eliminar
deleteProduct(id: string | undefined) {
  return this._httpClient.delete(`${this.API_URL_DELETE}/${id}`);
}
}
