import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CrearInmuebleComponent} from './modulos/administracion/inmueble/crear-inmueble/crear-inmueble.component';
import {EditarInmuebleComponent} from './modulos/administracion/inmueble/editar-inmueble/editar-inmueble.component';
import {EliminarInmuebleComponent} from './modulos/administracion/inmueble/eliminar-inmueble/eliminar-inmueble.component';
import {ListarInmuebleComponent} from './modulos/administracion/inmueble/listar-inmueble/listar-inmueble.component';
import {CrearTipoInmuebleComponent} from './modulos/administracion/tipoInmueble/crear-tipo-inmueble/crear-tipo-inmueble.component';
import {EditarTipoInmuebleComponent} from './modulos/administracion/tipoInmueble/editar-tipo-inmueble/editar-tipo-inmueble.component';
import {EliminarTipoInmuebleComponent} from './modulos/administracion/tipoInmueble/eliminar-tipo-inmueble/eliminar-tipo-inmueble.component';
import {ListarTipoInmuebleComponent} from './modulos/administracion/tipoInmueble/listar-tipo-inmueble/listar-tipo-inmueble.component';
import {EncabezadoComponent} from './pagina-maestra/encabezado/encabezado.component';
import {ErrorComponent} from './pagina-maestra/error/error.component';
import {InicioComponent} from './pagina-maestra/inicio/inicio.component';
import {PiePaginaComponent} from './pagina-maestra/pie-pagina/pie-pagina.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarTipoInmuebleComponent,
    CrearTipoInmuebleComponent,
    EditarTipoInmuebleComponent,
    EliminarTipoInmuebleComponent,
    ListarInmuebleComponent,
    CrearInmuebleComponent,
    EditarInmuebleComponent,
    EliminarInmuebleComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
