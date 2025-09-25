import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  projects = [
    {
      title: "E-Commerce Fashion Store",
      description: "A modern fashion e-commerce website with cart, filter, and dummy payment integration.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://loquacious-marigold-9c509b.netlify.app/",
      image: "assets/projects/ecom.PNG",
      status: "live"

    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing skills, projects, and resume with smooth scrolling.",
      techStack: ["CSS", "HTML","Javascript"],
      link: "",
      image: "assets/projects/portfolio1.PNG",
      status: "live"

    },

      {
        title: "Learning Management System (LMS)",
        description: "A web-based platform to manage courses, students, and learning resources efficiently. Features include user authentication, course management, progress tracking, and interactive dashboards.",
        techStack: ["Angular", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
        // link: "", // Coming soon
        image: "assets/projects/lms.jpg",
        status: "coming-soon"
      }
        ];
  

}
