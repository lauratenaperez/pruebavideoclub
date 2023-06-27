import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';
import { JsonService } from '../json.service';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Component } from '@angular/core';

const videos = [{
  "categoria": "series",
  "videos": [{
    "titulo": "Friends",
    "favorito": false,
    "sinopsis": "'Friends', comedia ambientada en Manhattan, sigue la vida de seis amigos: Rachel (Jennifer Aniston), Ross (David Schwimmer), Mónica (Courteney Cox), Chandler (Matthew Perry), Phoebe (Lisa Kudrow) y Joey (Matt LeBlanc), que luchan por sobrevivir a la vida diaria mientras toman café, en este caso, en el mítico Central Perk, su lugar favorito en el que reunirse. Ross y Mónica son hermanos, él está enamorado de Rachel, así que ahora que ella ha dejado plantado a su futuro marido y se ha mudado al piso de Mónica, ve una nueva oportunidad de conquistarla. De hecho, a lo largo de las diez temporadas veremos como las idas y venidas de esta pareja no desaparecen, aunque esto no quita protagonismo a los demás personajes. Como Mónica y Chandler que comienzan su romance en secreto pero finalmente deciden vivir juntos, enfrente del piso de Joey, que parece no enterarse de nada. El sueño de este hilarante miembro de la panda que va un poco por libre, es convertirse en un actor reconocido. Joey comparte con Phoebe eso de ir un poco a su rollo y es que el personaje al que da vida Kudrow va y viene sin demasiadas ataduras aportando un toque humorístico que no pasa desapercibido. 'Friends' se ha convertido en todo un fenómeno, siendo una de las series más queridas y apreciadas a nivel mundial.",
    "temporada": ["Temporada 1", "Temporada 2", "Temporada 3", "Temporada 4", "Temporada 5", "Temporada 6", "Temporada 7", "Temporada 8", "Temporada 9", "Temporada 10"]
  }]
}];
    
const idCategoria = 0;
const idVideo = 0;
const fotos=["https://es.web.img3.acsta.net/r_1920_1080/pictures/14/07/10/17/24/524852.jpg",
"https://es.web.img3.acsta.net/r_1920_1080/pictures/14/10/17/15/35/140327.jpg",
  "https://es.web.img2.acsta.net/r_1920_1080/pictures/14/07/10/17/24/527977.jpg"
];

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(() => {                              //CONFIGURACIÓN TEST
    TestBed.configureTestingModule({            //meter dependencias
      imports: [],
      declarations: [                               //componente/servicio a testar
        InicioComponent
      ],
      providers: [                                  //PROVIDERS del constructor en ORDEN - DEPENDENCIAS MOQUEADAS
        { provide: JsonService, useValue: {} },         //accede a servicio sin HttpClient-- PROVIDER MOQUEADO {} -- SIN REALIZAR CAMBIOS REALES 
        { provide: Router, useValue: {} }        
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(InicioComponent);          //crea componente (pasa por el constructor)
    component = fixture.componentInstance;                     //instancia componente
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit', () => {
    component['json'].getVideoclub = () => videos;

    component.ngOnInit();
    expect(component.videoclub).toEqual(videos);
  });

  it('#setFavorito', () => {
    component.videoclub=videos;  //propiedad videoclub devuelve vacío
    component['json'].setVideoclub = () => {};  //videos=this.videoclub
 
    component.setFavorito(idCategoria,idVideo);
    expect(component.videoclub[idCategoria].videos[idVideo].favorito).toEqual(true);
  })

  it('#mostrarMas',()=> {
    component['router'].navigate=():any=>{};
    component.mostrarMas(idCategoria);
  });

  it('#detalles',()=> {
    component['router'].navigate=():any=>{};
    component.detalles(idCategoria,idVideo);
  });

  it('#generaCartel',()=> {
   component.fotografias=fotos;
    component.generaCartel();
    expect(component.foto).toBeDefined();
  });
  
});
