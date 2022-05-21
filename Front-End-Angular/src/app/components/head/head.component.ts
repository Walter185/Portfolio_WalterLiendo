import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  public persona:persona | undefined;
  public editPersona:persona | undefined;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.userService.getPersona().subscribe(data => {this.persona = data})
  }
  Guardar(persona:persona){
    this.userService.createPersona(persona).subscribe(data =>{
      alert("Se agrego con exito");
      this.router.navigate(["head"]);
})}}
