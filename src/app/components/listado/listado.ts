import { Component, inject } from '@angular/core';
import { TaskManager } from '../../services/task-manager';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listado',
  imports: [DatePipe],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {
  public taskManager : TaskManager;

  constructor() {
    this.taskManager = inject(TaskManager);
    
  }
}
