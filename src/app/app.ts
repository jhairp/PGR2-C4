import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Imagen360Component } from './components/imagen360/imagen360';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Imagen360Component],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {

}