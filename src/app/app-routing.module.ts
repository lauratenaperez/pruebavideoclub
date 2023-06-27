import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { VideoclubComponent } from './videoclub/videoclub.component';
import { DetallesComponent } from './detalles/detalles.component';
import { TemporadasComponent } from './temporadas/temporadas.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' }, //si esta vacío te muestra el componente de inicio
  { path: 'inicio', component: InicioComponent },
  { path: 'inicio/:idCategoria', component: VideoclubComponent },
  { path: 'inicio/:idCategoria/:idVideo', component: DetallesComponent },
  { path: 'inicio/:idCategoria/:idVideo/temporadas', component: TemporadasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
