import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class AppIconsComponent implements OnInit {
  dataSource: any = [];
  dataSource2: any = [];
  displayedColumns: string[] = ['name', 'editar', 'eliminar'];
  displayedColumns2: string[] = ['name', 'editar', 'eliminar'];
  constructor(private pS: ProfilesService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    let logged: any = this.auth.checkLogin();
    if(logged.admin == false || logged.logged == false){
      this.router.navigate(['authentication/login']);
    }
    if(logged.admin == false || logged.logged == true){
      this.router.navigate(['authentication/no-autorizado']);
    }
    console.log('entra?', logged);
    this.pS.getCursos().subscribe((res: any) => {
      this.dataSource = res;
      
      console.log('filtrado', this.dataSource);
    });

    this.pS.getAsignaturas().subscribe((res: any) => {
      this.dataSource2 = res;
      
      console.log('filtrado', this.dataSource2);
    });
    
  } 

  editarCurso(id: any){

  }

  eliminarCurso(id: any){

  }

  editarAsignatura(id: any){

  }

  eliminarAsignatura(id: any){

  }

  nuevoCurso(){
    this.router.navigate(['parametros/nuevo-curso']);
  }

  nuevaAsignatura(){
    this.router.navigate(['parametros/nueva-asignatura']);
  }

}
