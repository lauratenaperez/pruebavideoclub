import { Component } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'videoclub';
  videoclub:any;                 //variable para almacenar datos (con valor de cualquier tipo)
 // fotografias: any;

  constructor(public json: JsonService) {}

  ngOnInit(): void {
    this.json.getJson().subscribe((res: any) => {     //me subscribo una vez al json 
      this.json.setVideoclub(res.videoclub);          //accedo siempre a la lista datos json (para si valores cambian)=> (fav = true|false)
     // this.fotografias = this.json.setVideoclub(res.videoclub.film); 
      this.videoclub = this.json.getVideoclub();      //recojo y almaceno datos en variable videoclub
    })
  }
}