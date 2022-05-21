import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
    public persona:persona | undefined

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getPersona().subscribe(data => {this.persona = data})
  }

  }

