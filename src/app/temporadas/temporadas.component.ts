import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.scss']
})
export class TemporadasComponent implements OnInit {
  public temporada:Array<any>=[];
  public idCategoria: any;
  public idVideo: any;

  constructor(private json: JsonService, private ruta: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.ruta.params.subscribe(params =>{
      this.idCategoria = params.idCategoria;
      this.idVideo = params.idVideo;
    })
    this.temporada = this.json.getVideoclub()[this.idCategoria].videos[this.idVideo].temporada;
  }

  volver(){
    this.router.navigate(["inicio/"+this.idCategoria+"/"+this.idVideo]);  //navegar a DetallesComponent
  }

}
