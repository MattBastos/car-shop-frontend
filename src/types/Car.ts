import { Vehicle } from './Vehicle';

export type Car = Vehicle & {
  doorsQty: number;
  seatsQty: number;
};
