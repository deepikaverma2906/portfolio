import { Component, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  // sections: HTMLElement[] = [];
  // showArrow = true;



  ngOnInit() {
    AOS.init();

  //   setTimeout(() => {
  //     this.sections = Array.from(document.querySelectorAll('section'));
  //   }, 0);
  // }
  // @HostListener('window:scroll', [])
  // onScroll() {
  // const footerSection = document.getElementById('footer');
  // if (footerSection) {
  //   const scrollY = window.scrollY;
  //   const windowHeight = window.innerHeight;
  //   const contactTop = footerSection.offsetTop;

  //   // Hide arrow when contact section starts to enter view
  //   this.showArrow = scrollY + windowHeight < contactTop;
  // }

  // }


  // scrollTo(sectionId: string) {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  // scrollToNextSection() {
  //   const currentScroll = window.scrollY;
  //   const next = this.sections.find(section => section.offsetTop > currentScroll + 10);
  //   if (next) {
  //     next.scrollIntoView({ behavior: 'smooth' });
  //   }


  
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
