import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myPortfolio: any;
  constructor(private portfoliodata:PortfolioService) { }

  ngOnInit(): void {
    this.portfoliodata.getData().subscribe(data => {
      this.myPortfolio = data;
    });
  }
}
