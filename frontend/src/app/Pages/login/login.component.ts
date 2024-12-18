import { Component } from '@angular/core';
import { FooterComponent } from '../../Componets/footer/footer.component';
import { RouterLink } from '@angular/router';
import {ReactiveFormsModule, FormControl, FormGroup} from "@angular/forms"


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  formularioLogin = new FormGroup({
    image: new FormGroup(''),
    name: new FormGroup(''),
    email: new FormGroup (''),
    password: new FormControl (''),
    telefono: new FormGroup(''),
  })

  handleSubmit(){
    console.log('info del input imagen' +
      this.formularioLogin.value.image
    )
    console.log('info del input name' +
      this.formularioLogin.value.name
    )
    console.log('info del input email' +
      this.formularioLogin.value.email
    )
    console.log('info del input password' +
      this.formularioLogin.value.password
    )
    console.log('info del input telefono' +
      this.formularioLogin.value.telefono
    )
  }
}
