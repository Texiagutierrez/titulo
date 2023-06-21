import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Personas',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Ui Components',
  },
  {
    displayName: 'Academico',
    iconName: 'rosette',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Evaluaciones',
    iconName: 'poker-chip',
    route: '/ui-components/chips',
  },
  {
    displayName: 'CRA',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Inventario',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Convivencia',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Parametros',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Seguridad',
    iconName: 'aperture',
    route: '/extra/sample-page',
  },
];
