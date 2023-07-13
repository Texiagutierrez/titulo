import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ProfilesService } from 'src/app/services/profiles.service'; 

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.scss']
})
export class AddAlumnoComponent implements OnInit{

  frmIngresarPersona!: FormGroup;

  constructor(private auth: AuthService, private router: Router, private pS: ProfilesService, private fb: FormBuilder) {}
  ngOnInit(): void {
    let logged: any = this.auth.checkLogin();
    if(logged.admin == false && logged.logged == false){
      this.router.navigate(['authentication/login']);
    }
    this.frmIngresarPersona = this.fb.group({
    imagePath: new FormControl('assets/images/profile/user-1.jpg', []),
    name: new FormControl('', [
      Validators.required
    ]),
    lastname: new FormControl('', [
      Validators.required
    ]),
    curso: new FormControl('', [
      Validators.required
    ]),
    rut: new FormControl('', [
      Validators.required
    ]),
    telefono: new FormControl('', [
      Validators.required
    ]),
    direccion: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required
    ]),   
    });
   
  }

  


  async validateLoginData(){
    if(this.frmIngresarPersona?.invalid) {
      return;
    }
    else {
      try {
        console.log(this.frmIngresarPersona.value)
        await this.pS.addPersona(this.frmIngresarPersona.value)
      }
      catch{}
    }
  }

  volver(){
    this.router.navigate(['personas/alumnos']);
  }
}
