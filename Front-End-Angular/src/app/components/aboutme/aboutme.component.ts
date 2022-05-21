import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { UserService } from 'src/app/_services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
    public persona:persona | undefined;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUser();
  }
    public getUser():void{ 
    this.userService.getUser().subscribe({next: (response: persona) => {
      this.persona=response;
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
    })
  }
  }

