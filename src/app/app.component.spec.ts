import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { JsonService } from './json.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

const videos = [{
  "categoria": "series",
  "videos": [{
    "titulo": "Friends",
    "favorito": false,
    "sinopsis": "'Friends', comedia ambientada en Manhattan, sigue la vida de seis amigos: Rachel (Jennifer Aniston), Ross (David Schwimmer), Mónica (Courteney Cox), Chandler (Matthew Perry), Phoebe (Lisa Kudrow) y Joey (Matt LeBlanc), que luchan por sobrevivir a la vida diaria mientras toman café, en este caso, en el mítico Central Perk, su lugar favorito en el que reunirse. Ross y Mónica son hermanos, él está enamorado de Rachel, así que ahora que ella ha dejado plantado a su futuro marido y se ha mudado al piso de Mónica, ve una nueva oportunidad de conquistarla. De hecho, a lo largo de las diez temporadas veremos como las idas y venidas de esta pareja no desaparecen, aunque esto no quita protagonismo a los demás personajes. Como Mónica y Chandler que comienzan su romance en secreto pero finalmente deciden vivir juntos, enfrente del piso de Joey, que parece no enterarse de nada. El sueño de este hilarante miembro de la panda que va un poco por libre, es convertirse en un actor reconocido. Joey comparte con Phoebe eso de ir un poco a su rollo y es que el personaje al que da vida Kudrow va y viene sin demasiadas ataduras aportando un toque humorístico que no pasa desapercibido. 'Friends' se ha convertido en todo un fenómeno, siendo una de las series más queridas y apreciadas a nivel mundial.",
    "temporada": ["Temporada 1", "Temporada 2", "Temporada 3", "Temporada 4", "Temporada 5", "Temporada 6", "Temporada 7", "Temporada 8", "Temporada 9", "Temporada 10"]
  }]
}];

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [                                  //PROVIDERS del constructor en ORDEN - DEPENDENCIAS MOQUEADAS
        {
          provide: JsonService,
          useValue: {
            getJson: (): any => of({ videos }), // subscripcion que devuelve observable 
            getVideoclub: (): any => of({ videos })
          }
        }        //accede a servicio sin HttpClient-- PROVIDER MOQUEADO {} -- SIN REALIZAR CAMBIOS REALES 
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);          //crea componente (pasa por el constructor)
    component = fixture.componentInstance;
  });

  it('Creación de componente', () => {
    expect(component).toBeTruthy();
  });

  it('#OnInit', () => {
    component.videoclub = videos;
    component.json.getVideoclub = () => videos;
    component.ngOnInit();
    console.log(component.videoclub);
    expect(component.videoclub).toEqual(videos);
  });

});
