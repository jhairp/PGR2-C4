import { Routes } from '@angular/router';
import { Imagen360Component } from './components/imagen360/imagen360';

export const routes: Routes = [
  {
    path: 'recorrido',
    component: Imagen360Component // Este es el padre que tiene el 3D + el Login
  },
  {
    path: '',
    redirectTo: 'recorrido',
    pathMatch: 'full'
  }
];