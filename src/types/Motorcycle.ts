import { Vehicle } from './Vehicle';

export type Motorcycle = Vehicle & {
  category: string;
  engineCapacity: number;
};
