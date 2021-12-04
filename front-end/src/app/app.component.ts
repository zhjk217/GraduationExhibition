import { Component, HostListener} from '@angular/core';
declare var jquery:any; // 這邊用 var 
declare let $:any; // 當然 let 也可以

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  image = "assets/img/portfolio/1.jpg";
  Imageout = false;
  ImageNumber = 0;
  ChangeImage() {
    this.Imageout = true;
    var st = setInterval(() => {
      if (!this.Imageout) {
        clearInterval(st);
        return;
      }
      this.RollImage();
    }, 1000);
  }
  RollImage(){
    let rollNumber = Math.floor(Math.random() * 6 + 1);
    if(rollNumber == this.ImageNumber){
      this.RollImage();
      return;
    }
    this.image = "assets/img/portfolio/" + rollNumber + ".jpg";
  }
  OutImage() {
    this.Imageout = false;
    $
  }
}
