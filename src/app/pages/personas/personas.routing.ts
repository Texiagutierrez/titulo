import { Routes } from '@angular/router';

// ui
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ApoderadosComponent } from './apoderados/apoderados.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';


export const PersonasRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alumnos',
        component: AlumnosComponent,
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
    ],
  },
];
