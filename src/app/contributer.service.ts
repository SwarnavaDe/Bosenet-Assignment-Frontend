import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributerService {

  constructor(private http:HttpClient) { }

  baseUrl: String = environment.baseUrl;

  getAllContributers():Observable<any>{
    console.log(Date.now());
    return this.http.get<any>(this.baseUrl+'/iss/contributors/get-all-contributors');
    
  }
  addContributor(contributor:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+'/iss/contributors/add',contributor);
  }
  getAllTeams():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/iss/team/get-all');
  }
  getTeamById(id:number):Observable<any>{
    return this.http.get<any>(this.baseUrl+'/iss/team/get/'+id);
  }
  getAllProjects():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/iss/project/get-all');
  }
  getAllContributorsByDateRange(startDate:any,endDate:any):Observable<any>{
    if(startDate==undefined || endDate==undefined){
      startDate='';
      endDate='';
    }
    return this.http.get<any>(this.baseUrl+'/iss/contributors/view?start='+startDate+'&end='+endDate);
  }
  assignContributorToTeam(request:any):Observable<any>{
    return this.http.put<any>(this.baseUrl+'/iss/contributors/teams/add',request);
  }
  assignTeamToProject(request:any):Observable<any>{
    return this.http.put<any>(this.baseUrl+'/iss/contributors/project/add',request);
  }
}
