import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.scss']
})
export class AddCursoComponent {
  frmIngresar!: FormGroup;
  constructor(private router: Router, private pS: ProfilesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.frmIngresar = this.fb.group({
    cid: new FormControl('', [
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
        await this.pS.addCurso(this.frmIngresar.value)
        this.router.navigate(['parametros/mantenedor']);
      }
      catch{}
    }
  }

  volver(){
    this.router.navigate(['parametros/mantenedor']);
  }
}
