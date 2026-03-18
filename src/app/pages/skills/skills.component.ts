import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent{

  technicalSkills = [
    { name: "Angular", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "JavaScript", level: 90, category: "Language" },
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "CSS3/SCSS", level: 90, category: "Frontend" },
    { name: "Node.js", level: 70, category: "Backend" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "Figma", level: 80, category: "Design" },
  ]

  softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Project Management",
    "Creative Thinking",
    "Attention to Detail",
    "Time Management",
    "Adaptability",
  ]

}
