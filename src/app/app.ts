import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulario } from "./components/formulario/formulario";
import { Listado } from "./components/listado/listado";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formulario, Listado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('INAEM_202511_Task_Manager');
}
