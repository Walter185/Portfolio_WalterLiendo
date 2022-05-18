import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model'
import { PersonaService } 'src/app/_services/persona.service'

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
persona: persona = new persona("", "","");

  constructor(public personaService:PersonaService) { }

  ngOnInit(): void {
   
  }

}
