import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  //Declaro una variable para guardar mi formulario
  registroForm: FormGroup;
  formBuilder: FormBuilder
  /* Construir el formulario */
  constructor(formBuider: FormBuilder){
    this.formBuilder = formBuider
    /* Crear el formulario y estructurarlo (asignar validaciones, campos existentes) */
    this.registroForm = this.formBuilder.group(
      {
        nombre: [
          //Valor inicial
          '',
          //lista de validaciones
          [ 
            //Tiene que ser requerido
            Validators.required,
            //Tiene que tener MAS de 3 caracteres
            Validators.minLength(3)
          ]
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.email //Que sea un email
          ]
        ],
        mensaje: [
          ''
        ]
      }
    )
  } 

  handleSubmit (){
    console.log(
      'El formulario de registro enviado es:', 
      this.registroForm.value
    )

    //Cuando se envie que resetee los campos
    this.registroForm.reset()
  }


}
