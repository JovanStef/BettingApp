export type Sport = {
  id: number;
  priority: number;
  name: string;
  total: number;
  countries: Array<Country>;
};
export type Country = {
  id: number;
  name: string;
  total: number;
  leagues: Array<League>;
};
export type League = {
  id: number;
  name: string;
  total: number;
};
