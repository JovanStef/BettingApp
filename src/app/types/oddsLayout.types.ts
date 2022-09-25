export type OddsLayout = {
  index: OddLayoutIndex;
  name: string;
  priority: number;
  odds: OddsLayoutItem;
};

export type OddLayoutIndex =
  | 'bothToScore'
  | 'doubleChance'
  | 'drawNoBet'
  | '3way'
  | 'totalGoals';
  
export type OddsLayoutItem = {
  id: string;
  priority: number;
  name: string;
};
