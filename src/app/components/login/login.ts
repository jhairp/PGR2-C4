import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  // Evento para avisar al padre que el login fue exitoso
  @Output() onLoginSuccess = new EventEmitter<void>();

  onSubmit(event: Event) {
    event.preventDefault();
    // Aquí iría tu lógica de validación real
    console.log("Login exitoso");
    this.onLoginSuccess.emit();
  }
}