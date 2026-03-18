import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Angular and Node.js, featuring user authentication, product catalog, shopping cart, and payment integration.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["Angular", "TypeScript", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions, forecasts, and interactive maps using weather APIs.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["Vue.js", "JavaScript", "CSS3", "Weather API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and skills with smooth animations and responsive design.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["Angular", "SCSS", "TypeScript", "Animations"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A full-stack blog platform with content management, user authentication, and comment system.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["Angular", "Express.js", "PostgreSQL", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "A mobile-responsive fitness tracking application with workout logging, progress charts, and goal setting.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["React Native", "Redux", "Chart.js", "AsyncStorage"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  filteredProjects = this.projects
  activeFilter = "all"

  filterProjects(filter: string) {
    this.activeFilter = filter
    if (filter === "all") {
      this.filteredProjects = this.projects
    } else if (filter === "featured") {
      this.filteredProjects = this.projects.filter((project) => project.featured)
    } else {
      this.filteredProjects = this.projects.filter((project) =>
        project.technologies.some((tech) => tech.toLowerCase().includes(filter.toLowerCase())),
      )
    }
  }

}
