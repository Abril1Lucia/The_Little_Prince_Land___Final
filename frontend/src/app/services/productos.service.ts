import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imagen } from '../interfaces/Imagen';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  private _httpClient = inject(HttpClient); 
  private URL_PRODUCTOS = 'http://localhost:9000/imagenes'


  

  // POST
  postProducto(product:Imagen){
    return this._httpClient.post(this.URL_PRODUCTOS + '/crear', product);
  }

  // GET
  getProductos(){
    return this._httpClient.get(this.URL_PRODUCTOS + '/obtener');
  }

  // PUT
  putProducto(productActualizado:Imagen, id:string){
    // para actualizar debemos pasar el body y el id del producto a actualizar
    return this._httpClient.put(this.URL_PRODUCTOS + '/actualizar/' + id, productActualizado);
  }


  // DELETE
  deleteProducto(id:string){
    // la ruta esta conformada por: ruta generica + acción + id
    return this._httpClient.delete(this.URL_PRODUCTOS + '/eliminar/' + id);
  }
}
