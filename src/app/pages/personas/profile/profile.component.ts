import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProfilesService } from 'src/app/services/profiles.service';
import { ActivatedRoute, Router } from '@angular/router';


export interface ChipColor {
  name: string;
  color: ThemePalette;
}

export interface Fruit {
  name: string;
}

export interface Vegetable {
  name: string;
}

export interface productsData {
  id: number;
  imagePath: string;
  name: string;
  lastname: string;
  curso: string;
  rut: number;
  telefono: number;
  direccion: string;
  email: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    name: 'Nombre',
    lastname: 'Apellido',
    curso: '4°B',
    rut: 15623151,
    telefono: 39568634,
    direccion: 'Calle asdfasd',
    email: 'low',
  }
];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  rut: string;

  constructor(private pS: ProfilesService, private route: ActivatedRoute, private router: Router){}

  perfil = {
    id: '',
    imagePath: 'assets/images/profile/user-1.jpg',
    name: '',
    lastname: ' ',
    curso: ' ',
    rut: '',
    telefono: '',
    direccion: '',
    email: '',
    rol: ''
  }

  // drag n drop
  vegetables: Vegetable[] = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'strawberry' },
    { name: 'orange' },
    { name: 'kiwi' },
    { name: 'cherry' },
  ];

  // 
  // Stacked
  // 
  availableColors: ChipColor[] = [
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' },
  ];

  ngOnInit(): void {
    this.rut = this.route.snapshot.params['id'];
    let tmp = this.getPerfil(this.rut);
    console.log('valor de tmp: ', tmp);
    this.perfil = {
      id: tmp[0].id,
      imagePath: tmp[0].imagePath,
      name: tmp[0].name,
      lastname: tmp[0].lastname,
      curso: tmp[0].curso,
      rut: tmp[0].rut,
      telefono: tmp[0].telefono,
      direccion: tmp[0].direccion,
      email: tmp[0].email,
      rol: tmp[0].rol
    }
  }

  getPerfil(id: string){
    console.log('llega rut: ', id)
    return this.pS.getProfile(id);
  }

  backTo(rol: string){
    switch(rol) {
      case 'alumno':
        this.router.navigate(['personas/alumnos']);
        break;
      case 'profesor':
        this.router.navigate(['personas/profesores']);
        break;
      default:
        // code block
    }
    
  }

  drop(event: Event) {
    if (isDragDrop(event)) {
      moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
    }
  }

  // 
  //  chips with input
  // 
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }


  }

}
function isDragDrop(object: any): object is CdkDragDrop<string[]> {
  return 'previousIndex' in object;
}
