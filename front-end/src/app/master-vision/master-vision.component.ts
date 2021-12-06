import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-master-vision',
  templateUrl: './master-vision.component.html',
  styleUrls: ['./master-vision.component.css']
})
export class MasterVisionComponent{
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
        navbarCollapsible.classList.remove('navbar-shrink');
    } else {
        navbarCollapsible.classList.add('navbar-shrink')
    }

};
}