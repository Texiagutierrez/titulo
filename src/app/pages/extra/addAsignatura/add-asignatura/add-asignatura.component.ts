import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-asignatura',
  templateUrl: './add-asignatura.component.html',
  styleUrls: ['./add-asignatura.component.scss']
})
export class AddAsignaturaComponent implements OnInit{

  frmIngresar!: FormGroup;
  constructor(private router: Router, private pS: ProfilesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.frmIngresar = this.fb.group({
    aid: new FormControl('', [
      Validators.required
    ])});
   
  }

  async validateLoginData(){
    if(this.frmIngresar?.invalid) {
      return;
    }
    else {
      try {
        console.log(this.frmIngresar.value)
        await this.pS.addAsignatura(this.frmIngresar.value)
        this.router.navigate(['parametros/mantenedor']);
      }
      catch{}
    }
  }

  volver(){
    this.router.navigate(['parametros/mantenedor']);
  }
}
