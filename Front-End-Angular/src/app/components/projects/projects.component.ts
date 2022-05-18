import { Component, OnInit } from '@angular/core';
import { PortfolioServ
import { MatCardModule } from '@angular/material/card';
import { Portf}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  myPortfolio: any;
  projectList: any;
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getData().subscribe(data => {
      this.projectList = data.projects;
    });
  }
}