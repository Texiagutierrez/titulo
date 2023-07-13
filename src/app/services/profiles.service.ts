import { Injectable } from '@angular/core';
import { Firestore,
   addDoc,
    collection,
     collectionData,
      doc,
       docData } from '@angular/fire/firestore';
import { query, where, getDocs } from "firebase/firestore";
import { Cursos } from '../interfaces/cursos.interface';
import { Rol } from '../interfaces/rol.interface';
import { Personas, Alumnos, Profesor, Curso, Asignatura } from '../interfaces/personas.interface';
import { Observable } from 'rxjs';
export interface productsData {
  id: string;
  imagePath: string;
  name: string;
  lastname: string;
  curso: string;
  rut: string;
  telefono: string;
  direccion: string;
  email: string;
  rol: string
}

export interface cursosData {
  curso: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: '1',
    imagePath: 'assets/images/profile/user-1.jpg',
    name: 'Texia Iladi',
    lastname: 'Gutiérrez Cancino',
    curso: '4° Medio B',
    rut: '12792620',
    telefono: '956367257',
    direccion: 'Mariscadero Alto',
    email: 'texiailadi@hotmail.com',
    rol: 'alumno'
  },
  {
    id: '2',
    imagePath: 'assets/images/profile/user-2.jpg',
    name: 'Martin Alejandro',
    lastname: 'Concha Gutiérrez',
    curso: '7° Básico A',
    rut: '23565983',
    telefono: '967549812',
    direccion: 'abdón Fuente-alba s/n',
    email: 'conchagutierrez.martin@edupelluhue.cl',
    rol: 'alumno'
  },
  {
    id: '3',
    imagePath: 'assets/images/profile/user-2.jpg',
    name: 'Alejandro Ernesto ',
    lastname: 'Muñoz Muñoz',
    curso: '7° Básico A',
    rut: '23565983',
    telefono: '967549812',
    direccion: 'Almirante Rivero #781 s/n',
    email: 'munozmunoz.alejandro@edupelluhue.cl',
    rol: 'alumno'
  },
  {
    id: '4',
    imagePath: 'assets/images/profile/user-3.jpg',
    name: 'Christopher Ignacio',
    lastname: 'Benavides flores',
    curso: '7° Básico A',
    rut: '24987456',
    telefono: '934123476',
    direccion: 'Riquelme #001',
    email: 'benavidesflores.Christopher@edupelluhue.cl',
    rol: 'profesor'
  },
  {
    id: '5',
    imagePath: 'assets/images/profile/user-4.jpg',
    name: 'Marta Ignacia',
    lastname: 'Ceballo Canales',
    curso: '4° Medio B',
    rut: '15623154',
    telefono: '2.4',
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

  constructor(private firestore: Firestore) { }

  getProfileAlumno(){
    return ELEMENT_DATA.filter(x => x.rol == "alumno");
  }

  getProfileProfesor(){
    return ELEMENT_DATA.filter(x => x.rol == "profesor");
  }

  getProfile(rut: string){
    return ELEMENT_DATA.filter(x => x.rut == rut);
  }

  getProfileRutAlumno(rut: string){
    return ELEMENT_DATA.filter(x => x.rut == rut && x.rol == "alumno");
  }
  getProfileRutProfesor(rut: string){
    return ELEMENT_DATA.filter(x => x.rut == rut && x.rol == "profesor");
  }

  getProfileByCurso(curso: string){
    return ELEMENT_DATA.filter(x => x.curso == curso && x.rol == "alumno");
  }

  getProfileProfByCurso(curso: string){
    return ELEMENT_DATA.filter(x => x.curso == curso && x.rol == "profesor");
  }

  /*getCursos(){
    return CURSOS_DATA;
  }*/

  usConectado(id: string){
    return ELEMENT_DATA.filter(x => x.id == id);
  }

  addRol(rol: Rol){
    const agrRol = collection(this.firestore, 'roles');
    return addDoc(agrRol, rol);
  }

  addPersona(persona: Personas){
    const agrPersona = collection(this.firestore, 'personas');
    return addDoc(agrPersona, persona);
  }

  getPersona(): Observable<Personas[]>{
    const agrcursos = collection(this.firestore, 'personas');
    //const citiesRef = collection(db, "cities");
    const mail = localStorage.getItem('email');
    const q = query(agrcursos, where("email", "==", mail));
    return collectionData(q, {idField: 'uid'}) as Observable<Personas[]>
  }

  getPersonas(): Observable<Personas[]>{
    const agrcursos = collection(this.firestore, 'personas');
    return collectionData(agrcursos, {idField: 'uid'}) as Observable<Personas[]>
  }


  addCurso(curso: Curso){
    const agrPersona = collection(this.firestore, 'cursos');
    return addDoc(agrPersona, curso);
  }

  getCurso(): Observable<Cursos[]>{
    const agrcursos = collection(this.firestore, 'cursos');
    return collectionData(agrcursos, {idField: 'id'}) as Observable<Cursos[]>
  }

  getCursos(): Observable<Cursos[]>{
    const agrcursos = collection(this.firestore, 'cursos');
    return collectionData(agrcursos) as Observable<Cursos[]>
  }

  editCurso(){

  }

  removeCurso(){

  }

  addAsignatura(asignatura: Asignatura){
    const agrPersona = collection(this.firestore, 'asignatura');
    return addDoc(agrPersona, asignatura);
  }

  getAsignatura(): Observable<Cursos[]>{
    const agrcursos = collection(this.firestore, 'asignatura');
    return collectionData(agrcursos, {idField: 'id'}) as Observable<Cursos[]>
  }

  getAsignaturas(): Observable<Cursos[]>{
    const agrcursos = collection(this.firestore, 'asignatura');
    return collectionData(agrcursos) as Observable<Cursos[]>
  }

  editAsignatura(){

  }

  removeAsignatura(){

  }

  addAlumno(alumno: Alumnos){
    const agrPersona = collection(this.firestore, 'alumnos');
    return addDoc(agrPersona, alumno);
  }

  getAlumno(): Observable<Alumnos[]>{
    const agrcursos = collection(this.firestore, 'alumnos');
    return collectionData(agrcursos, {idField: 'id'}) as Observable<Alumnos[]>
  }

  getAlumnos(): Observable<Alumnos[]>{
    const agrcursos = collection(this.firestore, 'alumnos');
    return collectionData(agrcursos) as Observable<Alumnos[]>
  }

  editAlumnos(){

  }

  removeAlumno(){

  }

  addProfesor(profesor: Profesor){
    const agrPersona = collection(this.firestore, 'profesores');
    return addDoc(agrPersona, profesor);
  }

  getProfesor(): Observable<Profesor[]>{
    const agrcursos = collection(this.firestore, 'profesores');
    return collectionData(agrcursos, {idField: 'id'}) as Observable<Profesor[]>
  }

  getProfesores(): Observable<Profesor[]>{
    const agrcursos = collection(this.firestore, 'profesores');
    return collectionData(agrcursos) as Observable<Profesor[]>
  }

  editProfesor(){

  }

  removeProfesor(){

  }
}
