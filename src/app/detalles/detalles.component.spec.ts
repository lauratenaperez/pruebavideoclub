import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesComponent } from './detalles.component';
import { JsonService } from '../json.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

const idCategoria = 0;
const idVideo = 0;

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

describe('DetallesComponent', () => {
  let component: DetallesComponent;
  let fixture: ComponentFixture<DetallesComponent>;

  beforeEach(() => {                              //CONFIGURACIÓN TEST
    TestBed.configureTestingModule({            //meter dependencias
      imports: [],
      declarations: [                               //componente/servicio a testar
        DetallesComponent
      ],
      providers: [                                  //PROVIDERS del constructor en ORDEN - DEPENDENCIAS MOQUEADAS
        { provide: JsonService, useValue: {} },         //accede a servicio sin HttpClient-- PROVIDER MOQUEADO {} -- SIN REALIZAR CAMBIOS REALES (ejem.si servicio conectado a base de datos)
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} }                          //Daría error por falta de HttpClient - porque BookService tiene dependencia con HttpClient
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(DetallesComponent);          //crea componente (pasa por el constructor)
    component = fixture.componentInstance;                     //instancia componente
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onInit', () => {
    component['ruta'].params = of({ idCategoria, idVideo });
    component.idCategoria = idCategoria;
    component.idVideo = idVideo;
    component.json.getVideoclub = () => videos;

    component.ngOnInit();
    expect(component.videoclub).toEqual(videos);
  });

  it('#setFavorito', () => {
    component.idCategoria=idCategoria;
    component.idVideo=idVideo;
    component.videoclub=videos;  //propiedad videoclub devuelve vacío
    component.json.setVideoclub = () => {};  //videos=this.videoclub
 
    component.setFavorito();
    expect(component.videoclub[idCategoria].videos[idVideo].favorito).toEqual(true);
  })

  it('#verCategoria',()=> {
    component['router'].navigate=():any=>{};
    component.verCategoria();
  });

  it('#verTemporadas',()=> {
    component['router'].navigate=():any=>{};
    component.verTemporadas();
  })
});
