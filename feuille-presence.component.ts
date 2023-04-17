import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../filter.service';

@Component({
  selector: 'app-feuille-presence',
  templateUrl: './feuille-presence.component.html',
  styleUrls: ['./feuille-presence.component.css']
})
export class FeuillePresenceComponent implements OnInit{

  constructor(private http:HttpClient, private routeur: Router, private absentService: DataService) {}
  objects : any;
  dateAbsence = '';
  absents: any[];


  ngOnInit (): void {
    this.objects = this.http.get("http://127.0.0.1:8000/data/"). subscribe (
      data => this.objects = data,
      error => { console.log('error', error); }
      )
    
  }


  filter() {
    this.absentService.getAbsents(this.dateAbsence).subscribe(
      infos => {
        this.objects= [];
        for(let a of infos.result)
        this.objects.push(a),
      error => console.error(error)}
    );

   }
  }




