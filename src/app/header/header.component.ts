import { ContributerService } from './../contributer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  list:any[] = []
  constructor(private service: ContributerService) { }

  ngOnInit(): void {
    this.service.getAllContributers().subscribe(data=>{
      this.list = data;
      console.log(this.list)
    })

  }

}
