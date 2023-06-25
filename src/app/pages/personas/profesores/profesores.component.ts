import { Component, OnInit} from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit{
  displayedColumns: string[] = ['assigned', 'name', 'email', 'telefono', 'direccion', 'accion'];
  dataSource: any = [];

  constructor(private pS: ProfilesService, private router: Router){}

  ngOnInit(): void {
    this.dataSource = this.getProfesores();
  }

  getProfesores(){
    return this.pS.getProfileProfesor();
  }

  openProfile(id: number){
    this.router.navigate(['personas/profile', id]);
  }
}
