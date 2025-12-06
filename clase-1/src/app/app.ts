import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
