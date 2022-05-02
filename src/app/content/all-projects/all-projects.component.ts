import { Router } from '@angular/router';
import { AssignTeamPopupComponent } from './../assign-team-popup/assign-team-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { ContributerService } from './../../contributer.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  projects:any[] = [];
  success:boolean = false;
  constructor(private contributorService:ContributerService, private dialog:MatDialog, private router:Router) { }

  ngOnInit(): void {
    this.contributorService.getAllProjects().subscribe(data=>{
      this.projects = data;
    })
  }

  openTeams(project:any): void{
    const dialogRef = this.dialog.open(AssignTeamPopupComponent, {
      width: '850px',
      data: {project: project},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      var teamAssignmentRequest = {
        id:project.id,
        name:project.name,
        projectManagerId:project.projectManagerId,
        teamId:result
      }
      this.contributorService.assignTeamToProject(teamAssignmentRequest).subscribe(res=>{
          this.success = true;
          this.contributorService.getAllProjects().subscribe(data=>{
            this.projects = data;
          })
      })
      
    });
  }
  goToHome(){
     this.router.navigate(['home']);
  }

}
