import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoclubComponent } from './videoclub.component';
import { JsonService } from '../json.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { of } from 'rxjs';

const idCategoria = 0;

const videos = [{
  "categoria": "peliculas",
  "videos": [{
    "titulo": "La vida es bella",
    "anio": "1998",
    "portada": "https://www.ecartelera.com/carteles/2600/2611/001.jpg",

    "pais": "Italia",
    "genero": "Drama, Comedia, Romance",
    "duracion": "117min",
    "sinopsis": "Unos años antes de que comience la Segunda Guerra Mundial, un joven llamado Guido llega a un pequeño pueblo de la Toscana italiana con la intención de abrir una librería. Allí conocerá a Dora, la prometida del fascista Ferruccio, y desde el momento que la ve, se enamora perdidamente de ella. Conquistarla no es tarea fácil, pero finalmente consigue hacerlo. Ambos se casan y juntos tienen un hijo, Giosue. Con la llegada de la guerra y el nazismo, los judíos como ellos tienen las cosas muy difíciles para salir adelante. Y más difíciles todavía se ponen cuando Guido y Giosue son mandados a un campo de concentración. Dora, al enterarse, se embarga también en un tren para estar con ellos. Una vez allí, Guido hará todo lo posible para que su hijo crea que todo es un juego y no vea el campo de concentración como lo que realmente es.",
    "cartelera": true,
    "favorito": false
  }]
}];

describe('VideoclubComponent', () => {
  let component: VideoclubComponent;
  let fixture: ComponentFixture<VideoclubComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      imports: [],
      declarations: [ VideoclubComponent ],
      providers: [
        { provide: JsonService, useValue: {} },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(VideoclubComponent);
    component = fixture.componentInstance;
  });

  it('Creación de componente', () => {
    expect(component).toBeTruthy();
  });
  it('#onInit', () => {
    component['ruta'].params = of({ idCategoria });
    component.idCategoria = idCategoria;
    component.json.getVideoclub = () => videos;

    component.ngOnInit();
    expect(component.videoclub).toEqual(videos);
  });

  it('#setFavorito', () => {
    component.idCategoria=idCategoria;
    component.videoclub=videos;  
    component.json.setVideoclub = () => {}; 
 
    component.setFavorito(0);
    expect(component.videoclub[idCategoria].videos[0].favorito).toEqual(true);
  })

  it('#detalles',()=> {
    let video=0;
    component['router'].navigate=():any=>{};
    component.detalles(video)
  });

  it('#volver',()=> {
    component['router'].navigate=():any=>{};
    component.volver();
  });
});
