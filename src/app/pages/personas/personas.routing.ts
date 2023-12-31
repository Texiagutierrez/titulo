import { Routes } from '@angular/router';

// ui
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ApoderadosComponent } from './apoderados/apoderados.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ProfileComponent } from './profile/profile.component';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { AddProfesorComponent } from './add-profesor/add-profesor.component';


export const PersonasRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alumnos',
        component: AlumnosComponent,
      },
      {
        path: 'nuevo-alumno',
        component: AddAlumnoComponent,
      },
      {
        path: 'nuevo-profesor',
        component: AddProfesorComponent,
      },
      {
        path: 'apoderados',
        component: ApoderadosComponent,
      },
      {
        path: 'profesores',
        component: ProfesoresComponent,
      },
      {
        path: 'funcionarios',
        component: FuncionariosComponent,
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
      },
    ],
  },
];
