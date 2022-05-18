import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/_services/portfolio.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  myPortfolio:any;
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getData().subscribe(data=> {
      this.myPortfolio=data;
    });
  }

}
