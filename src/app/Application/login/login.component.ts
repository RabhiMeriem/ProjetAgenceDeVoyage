import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup=new FormGroup({});
  msg:boolean=false;
  mdp:string="AzizMariem123";
  constructor(private fb:FormBuilder,private route:Router) {}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      psw:[""]
    });
  }
Submit(){
  if(this.loginForm.controls.psw.value==this.mdp)
  {
    this.route.navigate(['homeAdmin']);
    this.msg=false;
  }
  else
  { this.msg=true;
  }
}
}

