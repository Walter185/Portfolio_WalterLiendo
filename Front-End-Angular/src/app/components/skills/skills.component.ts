import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/_services/portfolio.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  myPortfolio: any;
  mySoftskills: any;
  myHardskills: any;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
      this.portfolioService.getData().subscribe(data => {
      this.mySoftskills = data.softskills;
      this.myHardskills = data.hardskills;
    });
  }

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  bufferValue = 75;

  get style() {
    return 'width' + this.myHardskills.level + '%'
  }

}