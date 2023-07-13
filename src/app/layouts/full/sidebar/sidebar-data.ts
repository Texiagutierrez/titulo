import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Personas',
  },
  {
    displayName: 'Alumnos',
    iconName: 'mood-smile',
    route: '/personas/alumnos',
  },
  {
    displayName: 'Profesores',
    iconName: 'mood-smile',
    route: '/personas/profesores',
  },
  {
    navCap: 'Academico',
  },
  {
    displayName: 'Academico',
    iconName: 'rosette',
    route: '',
  },
  {
    displayName: 'Evaluaciones',
    iconName: 'poker-chip',
    route: '',
  },
  {
    displayName: 'CRA',
    iconName: 'list',
    route: '',
  },
  {
    displayName: 'Inventario',
    iconName: 'layout-navbar-expand',
    route: '',
  },
  {
    displayName: 'Convivencia',
    iconName: 'tooltip',
    route: '',
  },
  {
    navCap: 'Administración',
  },
  {
    displayName: 'Parametros',
    iconName: 'mood-smile',
    route: '/parametros/mantenedor',
  },
  {
    displayName: 'Seguridad',
    iconName: 'aperture',
    route: '',
  },
];


/*
{
    navCap: 'Home',
  },
  {
    displayName: 'Personas',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },

  */
