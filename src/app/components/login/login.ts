import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',    // Quita el '.component'
  styleUrls: ['./login.scss']     // Quita el '.component'
})
export class LoginComponent {
  @Output() onLoginSuccess = new EventEmitter<void>();

  onSubmit(event: Event) {
    event.preventDefault();
    this.onLoginSuccess.emit(); // Avisa al jefe (Imagen360) que el login fue OK
  }
}