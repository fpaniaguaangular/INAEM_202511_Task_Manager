import { Component, inject } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';
import { FormsModule } from '@angular/forms';
import { TaskManager } from '../../services/task-manager';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  public taskManager : TaskManager | null = null;
  constructor() {
    this.taskManager = inject(TaskManager);
  }

  public tarea : Tarea = {
    nombre: '',
    fecha: new Date(),
    descripcion: '',
    completada: false
  }; 

  public createTask(): void {
    if (this.taskManager) {
      this.taskManager.addTask(this.tarea);
      this.tarea = {
        nombre: '',
        fecha: new Date(),
        descripcion: '',
        completada: false
      };
    }
  }
}
