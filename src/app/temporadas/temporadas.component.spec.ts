import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporadasComponent } from './temporadas.component';
import { JsonService } from '../json.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

const idCategoria = 0;
const idVideo = 0;

const videos = [{
  "categoria": "series",
  "videos": [{
    "titulo": "Friends",
    "favorito": false,
    "sinopsis": "'Friends', comedia ambientada en Manhattan, sigue la vida de seis amigos: Rachel (Jennifer Aniston), Ross (David Schwimmer), Mónica (Courteney Cox), Chandler (Matthew Perry), Phoebe (Lisa Kudrow) y Joey (Matt LeBlanc), que luchan por sobrevivir a la vida diaria mientras toman café, en este caso, en el mítico Central Perk, su lugar favorito en el que reunirse. Ross y Mónica son hermanos, él está enamorado de Rachel, así que ahora que ella ha dejado plantado a su futuro marido y se ha mudado al piso de Mónica, ve una nueva oportunidad de conquistarla. De hecho, a lo largo de las diez temporadas veremos como las idas y venidas de esta pareja no desaparecen, aunque esto no quita protagonismo a los demás personajes. Como Mónica y Chandler que comienzan su romance en secreto pero finalmente deciden vivir juntos, enfrente del piso de Joey, que parece no enterarse de nada. El sueño de este hilarante miembro de la panda que va un poco por libre, es convertirse en un actor reconocido. Joey comparte con Phoebe eso de ir un poco a su rollo y es que el personaje al que da vida Kudrow va y viene sin demasiadas ataduras aportando un toque humorístico que no pasa desapercibido. 'Friends' se ha convertido en todo un fenómeno, siendo una de las series más queridas y apreciadas a nivel mundial.",
    "temporada": ["Temporada 1", "Temporada 2", "Temporada 3", "Temporada 4", "Temporada 5", "Temporada 6", "Temporada 7", "Temporada 8", "Temporada 9", "Temporada 10"]
  }]
}];

describe('TemporadasComponent', () => {
  let component: TemporadasComponent;
  let fixture: ComponentFixture<TemporadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        TemporadasComponent
      ],
      providers: [
        { provide: JsonService, useValue: {} },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(TemporadasComponent);
    component = fixture.componentInstance;
  });

  it('Creación componente', () => {
    expect(component).toBeTruthy();
  });

  it('OnInit', async () => {
    component['ruta'].params = of({ idCategoria, idVideo });
    component.idCategoria = idCategoria;
    component.idVideo = idVideo;
    component['json'].getVideoclub = () => videos;
    component['json'].setVideoclub = () => { };
    component.ngOnInit();
    expect(component.temporada).toEqual(videos[0].videos[0].temporada);
  });

  it('#volver',()=> {
    component['router'].navigate=():any=>{};
    component.volver();
  });

});
