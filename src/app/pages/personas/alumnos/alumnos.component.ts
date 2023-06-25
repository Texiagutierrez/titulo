import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilesService } from 'src/app/services/profiles.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AlumnosComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['assigned', 'name', 'email', 'telefono', 'direccion', 'accion'];

  constructor(private pS: ProfilesService, private router: Router){}

  ngOnInit(): void {
    this.dataSource = this.getAlumnos();
  }
  
  getAlumnos(){
    return this.pS.getProfileAlumno();
  }

  openProfile(id: number){
    this.router.navigate(['personas/profile', id]);
  }

}
