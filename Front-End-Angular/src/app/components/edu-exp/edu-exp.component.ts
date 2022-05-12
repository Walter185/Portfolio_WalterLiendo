import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edu-exp',
  templateUrl: './edu-exp.component.html',
  styleUrls: ['./edu-exp.component.css']
})
export class EduExpComponent implements OnInit {
  /*myPortfolio: any;*/
  educationList: any;
  experienceList: any;

  constructor(private portfolioService: PortfolioService, private router: Router) {

    this.portfolioService.getData().subscribe(data => {
      this.educationList=data.education;
      this.experienceList=data.experience;
    });



  }
  ngOnInit(): void {

  }

}
