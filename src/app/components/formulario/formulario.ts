import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [JsonPipe, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  public nombre : string = 'Hugues';
  public tarea : Tarea = {
    nombre: '',
    fecha: new Date(),
    descripcion: '',
    completada: false
  }; 

}
