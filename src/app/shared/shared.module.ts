import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

// ruta
import { SharedRoutes } from './shared.routing';

// Componentes
//import { ProfileComponent } from '../pages/personas/profile/profile.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SharedRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    
  ],
})
export class SharedModule {}
