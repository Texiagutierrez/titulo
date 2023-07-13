import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(public dialog: MatDialog, private auth: AuthService, private router: Router) {}

  logOut(){
    this.auth.logout()
    .then(()=>{
      localStorage.removeItem('uid');
      localStorage.removeItem('rut');
      localStorage.removeItem('rol');
      localStorage.removeItem('email');
      localStorage.removeItem('token');
      this.router.navigate(['authentication/login']);
    })
    .catch(error => console.log(error))
  }

  profile(){
    this.router.navigate(['dashboard']);
  }
}
