export interface Personas {
    uid: string;
    imagePath: string;
    name: string;
    lastname: string;
    curso: string;
    rut: string;
    telefono: string;
    direccion: string;
    email: string;
    rol: string;
  }

  export interface Alumnos {
    imagePath: string;
    name: string;
    lastname: string;
    curso: string;
    rut: string;
    telefono: string;
    direccion: string;
    email: string;
  }

  export interface Profesor {
    imagePath: string;
    name: string;
    lastname: string;
    curso: string;
    rut: string;
    telefono: string;
    direccion: string;
    email: string;
  }

  export interface Asignatura {
    cid: string;
  }

  export interface Curso {
    aid: string;
  }