import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root',
})
export class TaskManager {
  private tasks: Tarea[] = [];
  public addTask(task : Tarea): void {
    this.tasks.push(task);
  }
  public removeTask(taskName : string): void {
  }
  public getTasks(): Tarea[] {
    return this.tasks;
  }
}
