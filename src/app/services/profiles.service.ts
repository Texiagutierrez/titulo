import { Injectable } from '@angular/core';
export interface productsData {
  id: number;
  imagePath: string;
  name: string;
  lastname: string;
  curso: string;
  rut: number;
  telefono: number;
  direccion: string;
  email: string;
  rol: string
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    name: 'Pepe',
    lastname: 'Silvia',
    curso: '4°B',
    rut: 15623151,
    telefono: 39568634,
    direccion: 'Calle asdfasd',
    email: 'low',
    rol: 'alumno'
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    name: 'Andrew ',
    lastname: 'McDownland',
    curso: 'Project Manager',
    rut: 15623152,
    telefono: 24.5,
    direccion: 'Calle asdfasd',
    email: 'medium',
    rol: 'alumno'
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    name: 'Christopher',
    lastname: 'Jamil',
    curso: 'Project Manager',
    rut: 15623153,
    telefono: 12.8,
    direccion: 'Calle asdfasd',
    email: 'high',
    rol: 'profesor'
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-4.jpg',
    name: 'Nirav',
    lastname: 'Joshi',
    curso: 'Frontend Engineer',
    rut: 15623154,
    telefono: 2.4,
    direccion: 'Calle asdfasd',
    email: 'critical',
    rol: 'profesor'
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor() { }

  getProfileAlumno(){
    return ELEMENT_DATA.filter(x => x.rol == "alumno");
  }

  getProfileProfesor(){
    return ELEMENT_DATA.filter(x => x.rol == "profesor");
  }

  getProfile(rut: number){
    return ELEMENT_DATA.filter(x => x.rut == rut);
  }
}
