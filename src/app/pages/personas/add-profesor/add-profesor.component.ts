import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ProfilesService } from 'src/app/services/profiles.service'; 

@Component({
  selector: 'app-add-profesor',
  templateUrl: './add-profesor.component.html',
  styleUrls: ['./add-profesor.component.scss']
})
export class AddProfesorComponent implements OnInit{

  
  frmIngresarPersona!: FormGroup;

  constructor(private auth: AuthService, private router: Router, private pS: ProfilesService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.frmIngresarPersona = this.fb.group({
    imagePath: new FormControl('assets/images/profile/user-4.jpg', []),
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
        await this.pS.addProfesor(this.frmIngresarPersona.value)
      }
      catch{}
    }
  }

  volver(){
    this.router.navigate(['personas/profesores']);
  }

}
