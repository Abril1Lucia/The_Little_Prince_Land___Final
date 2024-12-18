import { Component } from '@angular/core';
import { NavbarComponent } from '../../Componets/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../Componets/footer/footer.component';

@Component({
  selector: 'app-obras-crear',
  imports: [RouterLink, FooterComponent, NavbarComponent],
  templateUrl: './obras-crear.component.html',
  styleUrl: './obras-crear.component.css'
})
export class ObrasCrearComponent {

}
