import { Router } from '@angular/router';
import { ContributerService } from './../../contributer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent implements OnInit {
  teams : any[]=[];
  constructor(private contributorService:ContributerService, private router: Router) { }

  ngOnInit(): void {
    this.contributorService.getAllTeams().subscribe(data=>{
      this.teams = data
    })
  }
  redirect(id:number){
      this.router.navigate(['assign-contributors/',id]);
  }
  goToHome(){
    this.router.navigate(['home']);
  }
}
