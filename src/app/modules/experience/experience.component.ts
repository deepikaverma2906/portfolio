// import { Component, OnInit } from '@angular/core';
// import { ExperienceService } from 'src/app/services/experience.service';

// @Component({
//   selector: 'app-experience',
//   templateUrl: './experience.component.html',
//   styleUrls: ['./experience.component.css']
// })
// export class ExperienceComponent implements OnInit {
//   experiences: any[] = [];

//   constructor(private experienceService: ExperienceService) {}

//   ngOnInit(): void {
//     this.experienceService.getAllExperiences().subscribe(data => {
//       this.experiences = data;
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Static frontend data for experience
    this.experiences = [
      {
        role: 'Node.js Develpoer Intern',
        company: 'Bitvivid Solutions Pvt Ltd',
        details: 'Interned as a Node.js Developer at BitVivid Solutions, working on back.'
      },
      {
        role: 'Full Stack Developer',
        company: 'Infowave technology',
        details: 'Developed full-stack web applications using modern front-end and back.'
      },
      {
        role: 'Jr node.js developer',
        company: 'Codemongoose Technology Pvt. Ltd.',
        details: 'Worked as a Junior Node.js Developer, building RESTful APIs and handling backend logic using Node.js, Express, and MongoDB.'
      }
    ];
  }
}
