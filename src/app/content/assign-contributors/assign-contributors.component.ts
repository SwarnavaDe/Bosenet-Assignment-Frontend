import { ContributerService } from './../../contributer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-assign-contributors',
  templateUrl: './assign-contributors.component.html',
  styleUrls: ['./assign-contributors.component.css']
})
export class AssignContributorsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private contributerService: ContributerService,private location:Location) { }
  id:number=0;
  team:any;
  contributors:any[]=[];
  assignedContributors:any[]=[];
  unassignedContributors:any[]=[];
  temporaryContributors:any[]=[];

  error:string = '';
  success:boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
        this.id = params['id'];
        this.contributerService.getTeamById(this.id).subscribe({next: data=>{
            this.team = data;
            this.assignedContributors = this.team.contributors;
            this.contributerService.getAllContributers().subscribe(resp=>{
                this.contributors = resp;
                this.filterContributorList(this.contributors);
            })
        },error: e=>{
          this.error = 'Team is not found'
        }
      }); 
    });

  }
  filterContributorList(contributorsList:any[]){
    var flag = 0;
    for(var i=0;i<contributorsList.length;i++){
      flag=0;
      for(var j = 0;j<this.assignedContributors.length;j++){
        if(contributorsList[i].id == this.assignedContributors[j].id){
          flag =1;
        }
      }
      if(flag == 0){
        this.unassignedContributors.push(contributorsList[i]);
      }
    }
  }

  submit(){
    var teamToUpdate = {
      id:this.team.id,
      name:this.team.name,
      teamLead:this.team.teamLead
    }
    let requestTeamObj = {
      team: teamToUpdate,
      contributors: this.temporaryContributors
    }
    this.contributerService.assignContributorToTeam(requestTeamObj).subscribe(data=>{
        this.success = true;
    })

  }
  add(contributor:any){
    var index = this.unassignedContributors.indexOf(contributor, 0);
    this.unassignedContributors.splice(index, 1);
    this.temporaryContributors.push(contributor);
  }
  remove(contributor:any){
    var index = this.temporaryContributors.indexOf(contributor, 0);
    this.temporaryContributors.splice(index, 1);
    this.unassignedContributors.push(contributor);
  }
  goToHome(){
    this.location.back();
  }
}
