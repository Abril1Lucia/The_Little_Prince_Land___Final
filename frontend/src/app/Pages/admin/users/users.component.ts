import { Component } from '@angular/core';
import { Users } from '../../../interfaces/users';
import { UsuariosService } from '../../../services/usuarios.service';
import { NgFor } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  _dataService = inject(UsuariosService)
  allUsers: Users[] = [];

   fullName: string = '';
   email: string = '';
   password: string = '';
   phone: string = '';
   showDiv: boolean = false;
   editMode: boolean = false;  
   editProductId: string | undefined | null= null;
 
 
   obtenerDatos() {
     this._dataService.getUsuarios().subscribe({
       next: (res: any) => {
         console.log('res', res);
         this.allUsers = res.datos;
       },
       error: (error) => {
         console.error('Hubo un error', error);
       }
     });
   }
 
   crearDatos(){
     if (this.fullName === '' || this.email === '' || this.password === '' || this.phone === '') {
       alert('Ingrese todos los campos');
     } else{
 
       const cuentaNueva: Users = {
        fullName: this.fullName,
         email: this.email,
         password: this.password,
         phone: this.phone,
       };
 
 
       this._dataService.postUsuarios(cuentaNueva).subscribe({
         next: (res: any) => {
           if (res) {
             console.log('res', res);
             this.obtenerDatos();
           } else {
             console.error('Hubo un error');
           }
         },
         error: (error) => {
           console.error('Hubo un error', error);
         }
       });
 
   }
 
 }
 
 
 
 
 
 toggleDiv() {
   this.showDiv = !this.showDiv;
   if (!this.showDiv) {
     this.fullName = '';
     this.email = '';
     this.password = '';
     this.phone = '';
     this.showDiv = false;
     this.editMode = false;  
     this.editProductId= null;
   }
 }
 
 limpiarCampos() {
   this.fullName === '';
   this.email === '';
   this.password === '';
   this.phone === '';
 }
 
 ngOnInit() {
   this.obtenerDatos();
 
 }

}
