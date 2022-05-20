import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/_services/portfolio.service';

@Component({
  selector: 'app-educexp',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: any;


  constructor(private portfolioService:PortfolioService, ) { 
    
    this.portfolioService.getData().subscribe(data => {
      this.educationList=data.education;
 
    });

  }

  ngOnInit(): void {
  }

}
