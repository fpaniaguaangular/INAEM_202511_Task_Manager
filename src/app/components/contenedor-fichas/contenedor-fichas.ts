import { Component, inject } from '@angular/core';
import { TaskManager } from '../../services/task-manager';
import { FichaTarea } from '../ficha-tarea/ficha-tarea';

@Component({
  selector: 'app-contenedor-fichas',
  imports: [FichaTarea],
  templateUrl: './contenedor-fichas.html',
  styleUrl: './contenedor-fichas.css',
})
export class ContenedorFichas {
  public taskManager = inject(TaskManager);
}
