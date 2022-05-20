import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/_services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceList: any;

  constructor(private portfolioService:PortfolioService, ) { 
    
    this.portfolioService.getData().subscribe(data => {
      this.experienceList=data.experience;
    });
}
ngOnInit(): void {
}

}