import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  iw: number;
  encapsulation: ViewEncapsulation.None;
  breakpoint: number;

  projects: Project[] = [
    {
      name: 'Portfolio Website',
      frameworks: ['Angular', 'Angular-Material'],
      description: 'I had the assignment to create a portfolio website. I have used the Angular framework to accomplish this. You are looking at the result! To view the code check the GitHub link below.',
      url: 'https://github.com/SjoerdBrattinga/Portfolio'
    }//,
    // {
    //   name: 'Project Name',
    //   frameworks: ['Frameworks'],
    //   description: 'description',
    //   url: ''
    // },
    // {
    //   name: 'Portfolio Website',
    //   frameworks: ['Angular', 'Angular-Material'],
    //   description: 'I had the assignment to create a portfolio website. I have used the Angular framework to accomplish this. You are looking at the result! To view the code check the GitHub link below.',
    //   url: 'https://github.com/SjoerdBrattinga/Portfolio'
    // },
    // {
    //   name: 'Portfolio Website',
    //   frameworks: ['Angular', 'Angular-Material'],
    //   description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa I had the assignment to create a portfolio website. I have used the Angular framework to accomplish this. You are looking at the result! To view the code check the GitHub link below.',
    //   url: 'https://github.com/SjoerdBrattinga/Portfolio'
    // }   
  ];
  

  constructor() { }

  ngOnInit() {
    this.iw = window.innerWidth;
    this.breakpoint = (window.innerWidth <= 1100) ? 1 : 2;
  }

  onResize(event) {
    this.iw = window.innerWidth;
    this.breakpoint = (event.target.innerWidth <= 1100) ? 1 : 2;
  }

}
