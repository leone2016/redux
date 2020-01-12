import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface SubChildren {
  state: string;
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  child?: SubChildren[];
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '',
    name: 'Menu Principal',
    type: 'saperator',
    icon: 'av_timer'
  },
  {
    state: 'dashboard/demo',
    name: 'Demo',
    type: 'link',
    icon: 'av_timer'
  },
  {
    state: '',
    name: 'Autenticacion',
    type: 'saperator',
    icon: 'av_timer'
  },
  {
    state: 'authentication',
    name: 'Authentication',
    type: 'sub',
    icon: 'perm_contact_calendar',
    children: [
      { state: 'login', name: 'Login', type: 'link' },
      { state: 'register', name: 'Register', type: 'link' },
      { state: 'forgot', name: 'Forgot', type: 'link' },
      { state: 'lockscreen', name: 'Lockscreen', type: 'link' },
      { state: '404', name: 'Error', type: 'link' }
    ]
  },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
