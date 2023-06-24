import { Component, ViewEncapsulation } from '@angular/core';

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  curso: string;
  rut: string;
  telefono: number;
  direccion: string;
  email: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'Nombre',
    curso: '4°B',
    rut: '15623156',
    telefono: 39568634,
    direccion: 'Calle asdfasd',
    email: 'low',
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Andrew McDownland',
    curso: 'Project Manager',
    rut: 'Real Homes Theme',
    telefono: 24.5,
    direccion: 'Calle asdfasd',
    email: 'medium',
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    uname: 'Christopher Jamil',
    curso: 'Project Manager',
    rut: 'MedicalPro Theme',
    telefono: 12.8,
    direccion: 'Calle asdfasd',
    email: 'high',
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-4.jpg',
    uname: 'Nirav Joshi',
    curso: 'Frontend Engineer',
    rut: 'Hosting Press HTML',
    telefono: 2.4,
    direccion: 'Calle asdfasd',
    email: 'critical',
  },
];

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AlumnosComponent {

  displayedColumns: string[] = ['assigned', 'name', 'email', 'telefono', 'direccion'];
  dataSource = ELEMENT_DATA;

}
