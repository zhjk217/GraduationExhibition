import { Component, HostListener} from '@angular/core';
declare var jquery:any; // 這邊用 var 
declare let $:any; // 當然 let 也可以

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll($event:any) {
    this.navbarShrink();
  }
  navbarShrink(){
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink');console.log("a");
    } else {
        navbarCollapsible.classList.add('navbar-shrink')
    }

};
}
