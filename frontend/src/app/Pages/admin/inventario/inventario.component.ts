import { NgFor } from '@angular/common';
import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { Imagen } from '../../../interfaces/Imagen';
import { ProductosService } from '../../../services/productos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inventario',
  imports: [NgFor],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {

  _productsService = inject(ProductosService);
  _toastrService = inject(ToastrService)

  allProducts : Imagen[] = [];

  obtenerProductos(){

    this._productsService.getProducts().subscribe({
      next: (res:any) =>{
        //sale bien 
        this.allProducts = res.datos;
        console.log(this.allProducts)
        
      },
      error: (error: any) =>{
        //salio mal we

        console.log(error)
      }

    }
  )


  }

  ngOnInit(){
    this.obtenerProductos();
  }

}
