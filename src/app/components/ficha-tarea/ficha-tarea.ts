import { Component, Input } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ficha-tarea',
  imports: [DatePipe, CommonModule],
  templateUrl: './ficha-tarea.html',
  styleUrl: './ficha-tarea.css',
})
export class FichaTarea {
  @Input() public tarea : Tarea | undefined;
  
}
