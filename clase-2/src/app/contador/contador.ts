import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  public counter = signal(0);
  /* 
  Crear un componente llamado contador
  El componente debera tener un boton de incrementar y boton de decrementar
  El contador debera reaccionar
  */
  

  cambiarDeValorA5 (){
    this.counter.set(5);
  }

   incrementar() {
    /* Set lo usan cuando quieren que su estado cambie a cierto valor sin importar o necesitar conocer el valor previo */
    //this.counter.set(this.counter() + 1);
    //Si vamos a usar el valor previo del estado lo mas optimo es usar el metodo update
    this.counter.update(
      (current_value) => {
        return current_value + 1
      }
    )
  }
  decrementar() {
    this.counter.set(this.counter() - 1);
  }
}
