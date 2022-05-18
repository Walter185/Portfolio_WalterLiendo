import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
    persona:persona = new persona("","","","","","","","","","","","");

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getPersona().subscribe(data => {this.persona = data})
  }

  }

