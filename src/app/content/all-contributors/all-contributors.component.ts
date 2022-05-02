import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ContributerService } from './../../contributer.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-all-contributors',
  templateUrl: './all-contributors.component.html',
  styleUrls: ['./all-contributors.component.css']
})
export class AllContributorsComponent implements OnInit {

  startDate:any="";
  endDate:any="";
  contributors:any[] = [];

  constructor(private contributorService:ContributerService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {
    this.contributorService.getAllContributorsByDateRange(this.startDate,this.endDate).subscribe(data=>{
      this.contributors = data
    })
  }
  search(){
    this.startDate = this.datePipe.transform(this.startDate,"yyyy-MM-ddTHH:mm:ss");
    this.endDate = this.datePipe.transform(this.endDate,"yyyy-MM-ddTHH:mm:ss");
    this.contributorService.getAllContributorsByDateRange(this.startDate,this.endDate).subscribe(data=>{
      this.contributors = data
    })
  }
  goToHome(){
    this.router.navigate(['home']);
  }
  clear(){
    this.startDate="";
    this.endDate="";
  }
}
