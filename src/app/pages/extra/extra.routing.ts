import { Routes } from '@angular/router';


// pages
import { AppIconsComponent } from './icons/icons.component';
import { AppSamplePageComponent } from './sample-page/sample-page.component';
import { AddCursoComponent } from './addCurso/add-curso/add-curso.component';
import { AddAsignaturaComponent } from './addAsignatura/add-asignatura/add-asignatura.component';

export const ExtraRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mantenedor',
        component: AppIconsComponent,
      },
      {
        path: 'sample-page',
        component: AppSamplePageComponent,
      },
      
      {
        path: 'nuevo-curso',
        component: AddCursoComponent,
      },
      
      {
        path: 'nueva-asignatura',
        component: AddAsignaturaComponent,
      },
    ],
  },
];
