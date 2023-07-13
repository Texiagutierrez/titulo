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

  txtReset: string = 'Se ha enviado un correo a su casilla para reestablecer la contraseña'
  constructor(private auth: AuthService, private router: Router) {}

  get f(){
    return this.frmLogin.controls;
  }


  validateLoginData(){
    if(this.frmLogin.invalid) {
      return;
    }
    else {
      try {
        this.auth.login(this.f.txtUser.value, this.f.txtPass.value)
        .then(async res => {
          localStorage.setItem('uid', res.user.uid);
          localStorage.setItem('email', JSON.stringify(res.user.email));
          let tmp = await res.user.getIdToken();
          console.log('token', tmp);
          localStorage.setItem('token', JSON.stringify(tmp));
          this.router.navigate(['dashboard']);
          console.log(res);
        })
        .catch(error => console.log(error))
        //let tmp = this.auth.getLoginData(this.f.txtUser.value, Number(this.f.txtPass.value));
        /*console.log(tmp[0]);
        if(tmp.length > 0 ){
          localStorage.setItem('rol', tmp[0].rol);
          localStorage.setItem('rut', String(tmp[0].rut));
        }*/
      }
      catch{}
    }
  }

  resetPassword(){
    this.auth.forgot(this.f.txtUser.value)
    .then()
    .catch(error => console.log(error))
  }
}
