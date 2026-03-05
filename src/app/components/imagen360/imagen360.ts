import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ThreeJSComponent } from '../three-js/three-js'; // Ruta corregida
import { LoginComponent } from '../login/login';          // Nombre corregido

@Component({
  selector: 'app-imagen360',
  standalone: true,
  imports: [CommonModule, ThreeJSComponent, LoginComponent], 
  templateUrl: './imagen360.html',
  styleUrls: ['./imagen360.scss']
})
export class Imagen360Component {
  isLoggedIn = false;
  handleLoginSuccess() { this.isLoggedIn = true; }
}