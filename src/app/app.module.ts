import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { VideoclubComponent } from './videoclub/videoclub.component';
import { DetallesComponent } from './detalles/detalles.component';
import { TemporadasComponent } from './temporadas/temporadas.component';

import { JsonService } from './json.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    InicioComponent,
    VideoclubComponent,
    DetallesComponent,
    TemporadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
