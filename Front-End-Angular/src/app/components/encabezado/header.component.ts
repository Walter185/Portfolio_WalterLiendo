import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class ProfileComponent implements OnInit {

  myPortfolio: any;
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getData().subscribe(data=> {
      this.myPortfolio=data;
    });
  }
}
