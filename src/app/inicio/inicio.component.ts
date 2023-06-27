import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public videoclub: any;              //variable para almacenar datos 
  public fotografias: Array<any> = ["https://es.web.img3.acsta.net/r_1920_1080/pictures/14/07/10/17/24/524852.jpg",
  "https://es.web.img3.acsta.net/r_1920_1080/pictures/14/10/17/15/35/140327.jpg",
    "https://es.web.img2.acsta.net/r_1920_1080/pictures/14/07/10/17/24/527977.jpg",
    "https://es.web.img3.acsta.net/r_1920_1080/pictures/14/07/10/17/24/535790.jpg",
    "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/67/97/93/19019870.jpg",
    "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/67/97/93/19019885.jpg",
    "https://es.web.img2.acsta.net/r_1920_1080/pictures/14/10/17/15/35/146655.jpg",
    "https://i.ytimg.com/vi/kh3iNhyxSsI/maxresdefault.jpg",
    "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/82/69/17/19826702.jpg",
    "https://es.web.img2.acsta.net/r_1920_1080/medias/nmedia/18/82/69/17/19807638.jpg",
    "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/82/69/17/19793374.jpg",
    "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/85/98/42/19816484.jpg",
    "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/66/15/74/18973775.jpg",
    "https://es.web.img2.acsta.net/r_1920_1080/medias/nmedia/18/66/15/74/18973783.jpg",
    "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/66/15/74/18973784.jpg",
    "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/66/15/74/18973785.jpg",
    "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/66/15/74/18973779.jpg",
    "https://es.web.img2.acsta.net/r_1920_1080/pictures/14/10/22/16/23/164817.jpg",
    "https://es.web.img3.acsta.net/r_1920_1080/pictures/14/10/22/16/23/171643.jpg",
    "https://es.web.img2.acsta.net/r_1920_1080/pictures/14/10/22/16/26/514650.jpg",
    "https://es.web.img3.acsta.net/r_1920_1080/pictures/14/11/20/16/48/057757.jpg",
    "https://es.web.img2.acsta.net/r_1920_1080/pictures/14/11/20/16/48/073011.jpg",
    "https://es.web.img3.acsta.net/r_1920_1080/pictures/14/09/25/16/40/189183.jpg",
    "https://es.web.img2.acsta.net/r_1920_1080/pictures/14/11/20/16/48/093588.jpg",
    "https://es.web.img3.acsta.net/r_1920_1080/pictures/14/11/20/16/48/343568.jpg"
   ];

  foto: any;
 
  constructor(private json: JsonService, private router: Router) { }

  ngOnInit(): void {
    this.videoclub = this.json.getVideoclub();    //continuamente recojo datos json
  }

  setFavorito(categoria: number, video: number) {  //al clickar en img, recojo parametros i= idcategoria y f= idvideo
    this.videoclub[categoria].videos[video].favorito = !this.videoclub[categoria].videos[video].favorito; //valor favorito cambiará a contrario
    this.json.setVideoclub(this.videoclub);  //recojo lista datos modificados
  }

  mostrarMas(categoria: number) {                  //paso idcategoria
    this.router.navigate(["inicio/" + categoria]);  //ruta inicio/0 muestra datos peliculas  = videoclubComponent
  }                                               //ruta inicio/1 muestra datos series     = videoClubComponent

  detalles(categoria: number, video: number) {                //paso idcategoria e idvideo
    this.router.navigate(["inicio/" + categoria + "/" + video]);   //ruta inicio/0/0-10  = detallesComponent
  }                                                          //ruta inicio/1/0-7   = detallesComponent

  generaCartel() {
    var i = Math.floor(Math.random() * (this.fotografias.length));
    this.foto = this.fotografias[i];
  }

 /* setTimeout(function() => {
    var i = Math.floor(Math.random() * (this.fotografias.length));
    this.foto = this.fotografias[i];
    console.log(this.foto);
  }, 1000);*/
  /*generaCartel(){
    this.fotografias = this.json.setVideoclub;  
      var i = Math.floor(Math.random()*(this.fotografias.length));
       this.foto=this.fotografias[i];
       console.log(this.foto);
  }*/
}
