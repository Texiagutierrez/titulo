import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail} from '@angular/fire/auth';
import { Router } from '@angular/router';

export interface usersData {
  id: number;
  imagePath: string;
  name: string;
  lastname: string;
  curso: string;
  rut: number;
  telefono: number;
  direccion: string;
  email: string;
  rol: string;
  password: number;
}

const ELEMENT_DATA: usersData[] = [
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
    rol: 'Profesor',
    password: 12345678
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
    email: 'admin@edupelluhue.cl',
    rol: 'admin',
    password: 12345678
  }
];


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private router: Router) { }

  getLoginData(login: any, password: any){
    return ELEMENT_DATA.filter(x => x.email == login && x.password == password);
  }

  register(email: any, password: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: any, password: any){
    return signInWithEmailAndPassword(this.auth, email, password);  
  }

  logout(){
    return signOut(this.auth);
  }

  forgot(email: any){
    return sendPasswordResetEmail(this.auth, email);
  }

  checkLogin(){
    let allow = {
      admin: false,
      logged: false
    }
    let logged= false; 
    let tmp1: string = '';
    tmp1= JSON.stringify(localStorage.getItem('token'));
    let tmp2 = this.getDecodedAccessToken(tmp1);
    console.log('decoded', tmp2);

    if (tmp2 == null || tmp2 == ''){
      this.router.navigate(['authentication/login']);
    }
     
    if(tmp2.email == 'admin@admin.cl'){
      console.log('logeado1', tmp2.email);
      allow.admin = true;
      allow.logged = true;
    }
    else{
      console.log('logeado2', tmp2.email);
      allow.admin = false;
      allow.logged = true;
    }
    console.log('allow', allow);
    return allow;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

}
