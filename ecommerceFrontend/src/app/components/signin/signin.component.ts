import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:string="../assets/user.png"
  form:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
        this.formControl()
  }
  formControl(){
    this.form=this.formBuilder.group({
      email:this.formBuilder.control("",[Validators.required,Validators.email]),
      password:this.formBuilder.control("",[Validators.required,Validators.minLength(3)])

    })
  }

}
