import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  profileImageUrl: string = '';
  resumeUrl: string = '';
  // resumes: any[] = [];
  resume : any;

  phrases: string[] = [
    'Full Stack Developer',
    'Angular & Node.js Expert',
    'MongoDB Enthusiast',
    'Web App Builder'
  ];



  constructor(public homeService: HomeService) {}
  

  ngOnInit() {
    // this.homeService.getProfileImage().subscribe((res) => {
    //   if (res && res.length > 0) {
    //     // this.profileImageUrl = `http://localhost:5000/uploads/${res[0].filename}`;

    //     this.profileImageUrl = this.homeService.getImageFullPath(res[0].path); // ✔️ Converts relative to full URL
    //   }
    // });


    this.homeService.getProfileImage().subscribe((res: any) => {
      if (res && res.imageUrl) {
        this.profileImageUrl = this.homeService.getImageFullPath(res.imageUrl);
      } else {
        this.profileImageUrl = 'assets/profile.jpg'; // fallback
      }
    });
    
  
    this.homeService.getResumeUrl().subscribe((res) => {
      if (res && res.length > 0) {
        this.resume = res[0]; // 👈 assign full resume object

        this.resumeUrl = this.homeService.getResumeFullPath(res[0].path); // Assuming resume also has `.path`
      }
    });

    this.startTyping();
   }
   
  
  downloadResume() {
    window.open(this.resumeUrl, '_blank');
  }
  startTyping() {
    const typedTextSpan = document.querySelector('.typed-text') as HTMLElement;
    const cursorSpan = document.querySelector('.cursor') as HTMLElement;

    let phraseIndex = 0;
    let charIndex = 0;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;

    const type = () => {
      if (charIndex < this.phrases[phraseIndex].length) {
        typedTextSpan.textContent += this.phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        typedTextSpan.textContent = this.phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        phraseIndex++;
        if (phraseIndex >= this.phrases.length) phraseIndex = 0;
        setTimeout(type, typingDelay + 300);
      }
    };

    // Small delay before starting
    setTimeout(type, 1000);
  }

  
}



