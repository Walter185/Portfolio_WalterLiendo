import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
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
