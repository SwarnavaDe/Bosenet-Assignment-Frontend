import { Location } from '@angular/common';
import { ContributerService } from './../../contributer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-contributor',
  templateUrl: './new-contributor.component.html',
  styleUrls: ['./new-contributor.component.css']
})
export class NewContributorComponent implements OnInit {

  contributor:any = {
    name : "",
    nationality: "",
    onboardDate:"",
    exitDate:""
  }
  spinnerVisible: boolean = false;
  success: boolean = false;
  error:string = "";

  constructor(private contributerService:ContributerService, private location:Location) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.spinnerVisible = true
    console.log(this.contributor)
    if(this.contributor.name.length ==0 || this.contributor.nationality.length==0){
      this.spinnerVisible = false;
      this.error = 'Please fill up all the fields'
      return;
    }
    if(this.contributor.onboardDate instanceof Date && this.contributor.exitDate instanceof Date && this.error.length==0){
        this.contributerService.addContributor(this.contributor).subscribe(data=>{
          this.spinnerVisible = false;
          this.success = true;
          this.reset();
        });
    }
    else{
      this.error = 'Please enter a valid date.'
      this.spinnerVisible = false;
    }
  }
  reset(){
    this.contributor = {
      name : "",
      nationality: "",
      onboardDate:"",
      exitDate:""
    }
  }
  validate(){
    this.error="";
    var regex = new RegExp("^(?!.*[0-9]*[?!@#$%^&*()<>])");
    if(!regex.test(this.contributor.name) || !regex.test(this.contributor.nationality)){
      this.error = "Please enter valid data."
    }
  }
  goToHome(){
    this.location.back();
  }
}
