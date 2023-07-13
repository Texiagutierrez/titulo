import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilesService } from 'src/app/services/profiles.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
  formGroup: FormGroup;
  dataSource: any = [];
  cursosSource: any = [];
  displayedColumns: string[] = ['assigned', 'name', 'email', 'telefono', 'direccion', 'accion'];

  constructor(private pS: ProfilesService, private router: Router, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'rut': [null],
    });
    this.dataSource = this.getAlumnos();
    this.cursosSource = this.getCur();
  }
  
  getAlumnos(){
    return this.pS.getAlumnos().subscribe((res: any) => {
      this.dataSource = res;
      console.log('filtrado', this.dataSource);
    });
  }

  getAlumnosByCurso(curso: string){
    return this.pS.getAlumnos().subscribe((res: any) => {
      this.dataSource = res.filter((x: { cid: string; }) => x.cid == curso);
    });
  }

  getAlumnosByRut(formulario: any){
    console.log('rut', formulario.rut);
    let tmp: any = this.pS.getProfileRutAlumno(formulario.rut);
    this.formGroup.reset;
    return this.dataSource = tmp;
  }

  openProfile(id: number){
    this.router.navigate(['personas/profile', id]);
  }

  getCur(){
    return this.pS.getCursos().subscribe((res: any) => {
      this.cursosSource = res;
      
      console.log('filtrado', this.cursosSource);
    }); 
  }

  nuevoAlumno(){
    this.router.navigate(['personas/nuevo-alumno']);
  }

}
