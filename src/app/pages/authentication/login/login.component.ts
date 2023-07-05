import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  public frmLogin = new FormGroup({
    txtUser: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(40),
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    txtPass: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
  })

  constructor(private auth: AuthService, private router: Router) {}


  validateLoginData(){
    if(this.frmLogin.invalid) {
      return;
    }
    else {
      try {

      }
      catch{}
    }
  }
}
