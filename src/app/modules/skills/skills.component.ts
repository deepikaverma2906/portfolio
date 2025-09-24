import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service'; // Update the path as needed
import { Skill } from 'src/models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  groupedSkills: any[] = [];

  constructor(private skillsService: SkillService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe((data : Skill[]) => {
      const categoryMap: { [key: string]: string[] } = {};

      data.forEach((skill: Skill) => {
        if (!categoryMap[skill.category]) {
          categoryMap[skill.category] = [];
        }
        categoryMap[skill.category].push(skill.title);
      });
    
      this.groupedSkills = Object.keys(categoryMap).map(category => ({
        category,
        skills: categoryMap[category],
        animationClass: this.getAnimationClass(category)
      }));
    });
    
  }

  getAnimationClass(category: string): string {
    switch (category.toLowerCase()) {
      case 'frontend':
        return 'slide-in-left';
      case 'backend':
        return 'slide-in-top';
      case 'tools':
        return 'slide-in-right';
      default:
        return '';
    }
  }
}
