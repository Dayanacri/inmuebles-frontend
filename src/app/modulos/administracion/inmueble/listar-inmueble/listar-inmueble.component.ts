import {Component, OnInit} from '@angular/core';
import {InmuebleModel} from 'src/app/modelos/inmueble.model';
import {InmuebleService} from 'src/app/servicios/inmueble.service';
@Component({ selector: 'app-listar-inmueble', templateUrl: './listar-inmueble.component.html', styleUrls: ['./listar-inmueble.component.css'] }) export class ListarInmuebleComponent implements OnInit { listaRegistros: InmuebleModel[] = [];
  constructor(private servicioInmueble: InmuebleService) { } ngOnInit(): void { this.servicioInmueble.ListarRegistros().subscribe({ next: (data) => { this.listaRegistros = data; }, error: (err) => { alert("Error obteniendo la información.") } }) } }
