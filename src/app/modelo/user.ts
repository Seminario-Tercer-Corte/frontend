export type Roles = 'SUSCRIPTOR' | 'EDITOR' | 'ADMIN';

export interface User {
  id: number;
  name?: string;
  username?:string;
  email?: string;
  displayName?: string;
  emailVerified?: boolean;
  password?: string;
  picture?: string;
  role?: Roles;
  team?: any;
}