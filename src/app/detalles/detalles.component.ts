import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  public videoclub: any;
  public idCategoria: any;
  public idVideo: any;
  public temporada: Array <any>=[]; 

  constructor(public json: JsonService, private ruta: ActivatedRoute, private router: Router) { }
 

  ngOnInit(): void {
    this.ruta.params.subscribe(params =>{   //ACCEDO A PARAMENTROS IDS PASADOS POR RUTA
      this.idCategoria = params.idCategoria;  
      this.idVideo = params.idVideo;
    })
    this.videoclub = this.json.getVideoclub();
    this.temporada = this.json.getVideoclub()[this.idCategoria].videos[this.idVideo].temporada;
     //console.log(this.temporada);
  }

  setFavorito() {
    this.videoclub[this.idCategoria].videos[this.idVideo].favorito = !this.videoclub[this.idCategoria].videos[this.idVideo].favorito;
    this.json.setVideoclub(this.videoclub);
  }


  verCategoria(){
    this.router.navigate(["inicio/"+this.idCategoria]);  //navegar a VideoclubComponent: peliculas o series
  }

  verTemporadas(){
    this.router.navigate(["inicio/"+this.idCategoria+"/"+this.idVideo+"/temporadas"]); //navegar a TemporadasComponent
    
  }

}
