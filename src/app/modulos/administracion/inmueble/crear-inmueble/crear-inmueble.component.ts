import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {InmuebleModel} from 'src/app/modelos/inmueble.model';
import {TipoInmuebleModel} from 'src/app/modelos/tipo-inmueble.model';
import {InmuebleService} from 'src/app/servicios/inmueble.service';
import {TipoInmuebleService} from 'src/app/servicios/tipo-inmueble.service';

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})

export class CrearInmuebleComponent implements OnInit {
  opcionesTipoInmueble:TipoInmuebleModel[] = [];
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioInmueble: InmuebleService,
    private router: Router,
    private servicioTipoInmueble: TipoInmuebleService
     ) {

      }
      ngOnInit(): void {
        this.ConstruirFormulario();
        this.servicioTipoInmueble.ListarRegistros().subscribe({
          next: (data) => {
            this.opcionesTipoInmueble = data;
           }, error: (err) => {
            alert("Error cargando la información.");
           }
         })
       }
        /** * Construye el formulario */
        ConstruirFormulario() {
          this.fGroup = this.fb.group({
            propietario: ['', [Validators.required]],
            telefono: ['', [Validators.required]],
            direccion: ['', [Validators.required]],
            tipoId: ['', [Validators.required]] }); }

         /** * Guarda un nuevo registro */
         GuardarRegistro() {
           if (this.fGroup.invalid) {
            alert("Faltan datos");
} else {
   let propietario = this.fGroup.controls["propietario"].value;
   let telefono = this.fGroup.controls["telefono"].value;
   let direccion = this.fGroup.controls["direccion"].value;
   let tipoInmuebleId = this.fGroup.controls["tipoId"].value;
   let modelo = new InmuebleModel();
   modelo.direccion = direccion;
   modelo.propietario = propietario;
   modelo.telefono = telefono;
   modelo.tipoInmuebleId = tipoInmuebleId;
   this.servicioInmueble.GuardarRegistro(modelo).subscribe({
    next: (data) => {
      this.router.navigate(["/admin/listar-inmueble"]);
      alert("Almacenado correctamente.");
    }, error: (err) => {
        alert("Error almacenando la información.");
       }
     });
   }
 }
 }
