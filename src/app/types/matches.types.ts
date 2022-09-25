export type Match = {
  id: number;
  sd: string;
  h: string;
  a: string;
  odds: Odds[] | any;
};
export type BothToScore = Odd;
export type DoubleChance = Odd;
export type DrawNoBet = Odd;
export type TotalGoals = Odd;

export type Odds = BothToScore | DoubleChance | DrawNoBet | TotalGoals;
export type Odd = {
  name: string;
  value: number;
  id: number;
};
