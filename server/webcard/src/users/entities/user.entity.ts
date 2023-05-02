export interface User {
  id: number;
  name: string;
  password: string;
  registerDate: number | string;
  email: string;
  admin: boolean;
  gamesHistory: null | number;
  gamesFeatured: null | number;
}
