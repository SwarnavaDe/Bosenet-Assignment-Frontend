import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
import { AssignContributorsComponent } from './content/assign-contributors/assign-contributors.component';
import { AllContributorsComponent } from './content/all-contributors/all-contributors.component';
import { AllProjectsComponent } from './content/all-projects/all-projects.component';
import { AllTeamsComponent } from './content/all-teams/all-teams.component';
import { NewContributorComponent } from './content/new-contributor/new-contributor.component';
import { HomeComponent } from './content/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home', component: HomeComponent},
  {path:'new-contributor', component:NewContributorComponent},
  {path:'all-teams', component:AllTeamsComponent},
  {path:'all-projects', component:AllProjectsComponent},
  {path:'all-contributors', component:AllContributorsComponent},
  {path:'assign-contributors/:id', component:AssignContributorsComponent},
  {path:'page-not-found', component:PageNotFoundComponent},
  {path:'**',redirectTo:'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
