import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { UserService } from 'src/app/_services/user.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  persona:persona = new persona("","","","","","","","","","","","");
  

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getPersona().subscribe(data => {this.persona = data})
  }

}
