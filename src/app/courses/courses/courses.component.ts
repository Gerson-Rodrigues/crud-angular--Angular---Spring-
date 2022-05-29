import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id:'1', nome:'Top Gear', distri:'Kemko', ano:'1992', plataforma: 'Super Nintendo'},
    {_id:'2', nome:'Super Mario World', distri: 'Nintendo', ano:'1990', plataforma: 'Super Nintendo'},
    {_id:'3', nome:'God of War', distri: 'Santa Monica Studio', ano:'2005', plataforma: 'MultiPlataforma'},
    {_id:'4', nome:'A Plague Tale: Innocence', distri: 'Focus Home Interactive', ano:'2019', plataforma: 'MultiPlataforma'},
    {_id:'5', nome:'Jackie Chan Stuntmaster', distri: 'Radical Entertainment', ano:'2000', plataforma: 'PlayStation'},
    {_id:'6', nome:'Red Dead Redemption 2', distri: 'Rockstar Games', ano:'2018', plataforma: 'MultiPlataforma'},
    {_id:'7', nome:'Doom Troopers II', distri: 'Adrenalin Entertainment', ano:'1995', plataforma: 'Super Nintendo'},
    {_id:'8', nome:'Metal Gear Solid', distri: 'Konami', ano:'1998', plataforma: 'PlayStation'},

  ];
  displayedColumns = ['nome', 'categoria'];

  constructor() {
    //this.courses = [];
   }

  ngOnInit(): void {
  }

}
