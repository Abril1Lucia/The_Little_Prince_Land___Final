import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { InventarioComponent } from './Pages/inventario/inventario.component';
import { LibroComponent } from './Pages/libro/libro.component';
import { LoginComponent } from './Pages/login/login.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ObrasComponent } from './Pages/obras/obras.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { UsersComponent } from './Pages/users/users.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Inicio'},
    {path: 'about', component: AboutUsComponent, title: 'About Us'},
    {path: 'Admin', component: AdminComponent, title: 'Admins', children: [
        {path: '', component: InventarioComponent, title: 'Inventario'},
        {path: 'Users', component: UsersComponent, title: 'Users'}
    ]},
    {path: 'Libro', component: LibroComponent, title:'sobre el libro'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: 'obras', component:ObrasComponent, title: 'obras'},
    {path: 'registro', component: RegistroComponent, title: 'registro'},
    {path: '**', component: NotFoundComponent, title: 'not found'}

];
