import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/_services/portfolio.service';
import { Education } from 'src/app/model/education.model';

@Component({
  selector: 'app-educexp',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public educations:Education[]=[];


  constructor(private educationService: EducationService) { }
  
  ngOnInit(): void {
    this.getEducations();
  }


}
