import { ContributerService } from './../../contributer.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-assign-team-popup',
  templateUrl: './assign-team-popup.component.html',
  styleUrls: ['./assign-team-popup.component.css']
})
export class AssignTeamPopupComponent implements OnInit {

  constructor(private service:ContributerService,public dialogRef: MatDialogRef<AssignTeamPopupComponent>, @Inject(MAT_DIALOG_DATA)public data:any,public dialog:MatDialog) { }
  teams:any[] = [];
  success:boolean = false;
  ngOnInit(): void {
      this.service.getAllTeams().subscribe(res=>{
        this.teams = res;
      })
  }
  // assignTeam(teamId:number):void{
  //   var teamAssignmentRequest = {
  //     id:this.data.project.id,
  //     name:this.data.project.name,
  //     projectManagerId:this.data.project.projectManagerId,
  //     teamId:teamId
  //   }
  //   this.service.assignTeamToProject(teamAssignmentRequest).subscribe(res=>{
  //     //this._snackBar.open("Team assigned successfully", "OK");
     
  //     this.success = true;
  //     console.log(this.success);
  //   })
  // }

}
