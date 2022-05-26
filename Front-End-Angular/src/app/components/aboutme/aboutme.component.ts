import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { persona } from "src/app/model/persona.model";
import { UserService } from "src/app/_services/user.service";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  public persona:persona;
  public editPersona:persona | undefined;
  subscription;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

      public getUser():void{ 
        this.subscription=
        this.userService.getUser().subscribe({next: (response: persona) => {
          this.persona=response;
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
        })
      }
    
  public onUpdatePersona(persona:persona){
    this.editPersona=persona;
    document.getElementById('add-persona-form')?.click();
    this.userService.updatePersona(persona).subscribe({
      next: ( response: persona) =>{
        console.log(response);
        this.getUser();
       },
       error:(error:HttpErrorResponse)=>{
         alert(error.message);
       }
    })
  }
  ngOnDestroy():void{
    this.subscription.unsubcribe();
  }
}
  

