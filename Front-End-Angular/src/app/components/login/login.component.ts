import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
form:FormGroup;
  email='';
  password='';

  constructor(private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group({
      password:['',[]],
      mail:['',[]]
    })
  }
  
  ngOnInit() { }

}
