import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private url = "assets/json/videoclub.json";

  private videoclub: Array<any> = [];                                    //array para almacenar datos
  private videoclubSubject = new Subject<any>();                         //para guardar datos
  public videoclubObservable$ = this.videoclubSubject.asObservable();    //accede a datos json con cambios (fav = true|false)

  constructor(private http: HttpClient) { }

  getJson() {
    return this.http.get(this.url);               //función para acceder al archivo json
  }

  setVideoclub(videoclubMod: Array<any>) {        //utilizo var para array datos modificados. LLAMO A FUNCIÓN CONSTANT. EN APP.COMPONENT y FAVORITOS
    this.videoclub = videoclubMod;                //videoclub = array datos modificados
    this.videoclubSubject.next(this.videoclub);   //valor datos modificados añadidos 
  }

  getVideoclub() {
    return this.videoclub;   //devuelve datos
  }
  

}
