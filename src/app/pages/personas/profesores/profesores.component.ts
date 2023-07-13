import { Component, OnInit} from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit{
  formGroup: FormGroup;
  dataSource: any = [];
  cursosSource: any = [];
  displayedColumns: string[] = ['assigned', 'name', 'email', 'telefono', 'direccion', 'accion'];

  constructor(private pS: ProfilesService, private router: Router, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'rut': [null],
    });
    this.dataSource = this.getProfesores();
    this.cursosSource = this.getCur();
  }

  getProfesores(){
    return this.pS.getProfesores().subscribe((res: any) => {
      this.dataSource = res;
      
      console.log('filtrado', this.cursosSource);
    }); ;
  }

  getProfesoresByCurso(curso: string){
    console.log('curso', curso)
    let tmp: any = this.pS.getProfileProfByCurso(curso);
    return this.dataSource = tmp;
  }

  getProfesoresByRut(formulario: any){
    console.log('rut', formulario.rut);
    let tmp: any = this.pS.getProfileRutProfesor(formulario.rut);
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

  nuevoProfesor(){
    this.router.navigate(['personas/nuevo-profesor']);
  }
}
