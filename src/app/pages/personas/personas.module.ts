import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

// ruta
import { PersonasRoutes } from './personas.routing';

// Componentes
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ApoderadosComponent } from './apoderados/apoderados.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProfesorComponent } from './add-profesor/add-profesor.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PersonasRoutes),
    MaterialModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    AlumnosComponent,
    ProfesoresComponent,
    ApoderadosComponent,
    FuncionariosComponent,
    ProfileComponent,
    AddAlumnoComponent,
    AddProfesorComponent
  ],
})
export class PersonasModule {}
