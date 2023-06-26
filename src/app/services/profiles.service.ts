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

export interface cursosData {
  curso: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    name: 'Texia Iladi',
    lastname: 'Gutiérrez Cancino',
    curso: '4° Medio B',
    rut: 12792620,
    telefono: 956367257,
    direccion: 'Mariscadero Alto',
    email: 'texiailadi@hotmail.com',
    rol: 'alumno'
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    name: 'Martin Alejandro',
    lastname: 'Concha Gutiérrez',
    curso: '7° Básico A',
    rut: 23565983,
    telefono: 967549812,
    direccion: 'abdón Fuente-alba s/n',
    email: 'conchagutierrez.martin@edupelluhue.cl',
    rol: 'alumno'
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-2.jpg',
    name: 'Alejandro Ernesto ',
    lastname: 'Muñoz Muñoz',
    curso: '7° Básico A',
    rut: 23565983,
    telefono: 967549812,
    direccion: 'Almirante Rivero #781 s/n',
    email: 'munozmunoz.alejandro@edupelluhue.cl',
    rol: 'alumno'
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-3.jpg',
    name: 'Christopher Ignacio',
    lastname: 'Benavides flores',
    curso: '7° Básico A',
    rut: 24987456,
    telefono: 934123476,
    direccion: 'Riquelme #001',
    email: 'benavidesflores.Christopher@edupelluhue.cl',
    rol: 'profesor'
  },
  {
    id: 5,
    imagePath: 'assets/images/profile/user-4.jpg',
    name: 'Marta Ignacia',
    lastname: 'Ceballo Canales',
    curso: '4° Medio B',
    rut: 15623154,
    telefono: 2.4,
    direccion: 'Calle Arturo Aparicio #501',
    email: 'ceballoCanales.marta@edupelluhue.cl',
    rol: 'profesor'
  },
];

const CURSOS_DATA: cursosData[] = [
  {
    curso: '4° Medio B'
  },
  {
    curso: '7° Básico A'
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

  getProfileRutAlumno(rut: number){
    return ELEMENT_DATA.filter(x => x.rut == rut && x.rol == "alumno");
  }
  getProfileRutProfesor(rut: number){
    return ELEMENT_DATA.filter(x => x.rut == rut && x.rol == "profesor");
  }

  getProfileByCurso(curso: string){
    return ELEMENT_DATA.filter(x => x.curso == curso && x.rol == "alumno");
  }

  getProfileProfByCurso(curso: string){
    return ELEMENT_DATA.filter(x => x.curso == curso && x.rol == "profesor");
  }

  getCursos(){
    return CURSOS_DATA;
  }

  usConectado(id: number){
    return ELEMENT_DATA.filter(x => x.id == id);
  }
}
