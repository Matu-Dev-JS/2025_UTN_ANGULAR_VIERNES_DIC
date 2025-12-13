import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponente } from './mi-componente/mi-componente';
import { Contador } from './contador/contador';
import { ReactiveFormsModule } from '@angular/forms';
import { Registro } from './registro/registro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MiComponente, Contador, ReactiveFormsModule, Registro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  text = 'Hello world!';
  saludar(){
    alert('Hola')
    this.text = 'Adios';
  }
}
