import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/_services/portfolio.service';

@Component({
  selector: 'app-educexp',
  templateUrl: './educexp.component.html',
  styleUrls: ['./educexp.component.css']
})
export class EducexpComponent implements OnInit {
  educationList: any;
  experienceList: any;

  constructor(private portfolioService:PortfolioService, ) { 
    
    this.portfolioService.getData().subscribe(data => {
      this.educationList=data.education;
      this.experienceList=data.experience;
    });

  }

  ngOnInit(): void {
  }

}
