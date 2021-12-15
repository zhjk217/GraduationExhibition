import { Component, HostListener} from '@angular/core';
declare var jquery:any; // 這邊用 var 
declare let $:any; // 當然 let 也可以

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
}
