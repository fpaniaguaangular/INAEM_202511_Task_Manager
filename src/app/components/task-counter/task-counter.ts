import { Component, inject } from '@angular/core';
import { TaskManager } from '../../services/task-manager';

@Component({
  selector: 'app-task-counter',
  imports: [],
  templateUrl: './task-counter.html',
  styleUrl: './task-counter.css',
})
export class TaskCounter {
  public taskManager = inject(TaskManager);
  constructor() { 
  }
}
