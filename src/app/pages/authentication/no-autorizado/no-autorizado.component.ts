import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-autorizado',
  templateUrl: './no-autorizado.component.html',
  styleUrls: ['./no-autorizado.component.scss']
})
export class NoAutorizadoComponent {

  constructor(private router: Router) {}

  home(){
    this.router.navigate(['dashboard']);
  }

}
