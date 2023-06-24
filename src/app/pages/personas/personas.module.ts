import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

// ruta
import { PersonasRoutes } from './personas.routing';

// Componentes
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ApoderadosComponent } from './apoderados/apoderados.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PersonasRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    AlumnosComponent,
    ProfesoresComponent,
    ApoderadosComponent,
    FuncionariosComponent
  ],
})
export class PersonasModule {}
