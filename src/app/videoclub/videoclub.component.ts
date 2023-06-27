import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.component.html',
  styleUrls: ['./videoclub.component.scss']
})
export class VideoclubComponent implements OnInit {

  public videoclub: any;
  public idCategoria: any;

  constructor(public json: JsonService, private ruta: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ruta.params.subscribe(params => {
      this.idCategoria = params.idCategoria;   //recojo posición categoria
    })
    this.videoclub = this.json.getVideoclub(); //almaceno datos json
  }

  setFavorito(video: number) {                                                                                          //FALSE => TRUE | TRUE=>FALSE
    this.videoclub[this.idCategoria].videos[video].favorito = !this.videoclub[this.idCategoria].videos[video].favorito; //cambio a valor contrario
    this.json.setVideoclub(this.videoclub);  //recojo de nuevo datos json
  }

  detalles(video: number) {
    this.router.navigate(["inicio/" + this.idCategoria + "/" + video]);  //navego a ruta, DetallesComponent
  }

  volver() {
    this.router.navigate(["inicio"]);  //navega a ruta inicio, InicioComponent
  }

}
