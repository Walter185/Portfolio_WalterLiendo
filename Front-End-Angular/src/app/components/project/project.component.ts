import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/_services/portfolio.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  myPortfolio: any;
  projectList: any;
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getData().subscribe(data => {
      this.projectList = data.projects;
    });
  }
}
