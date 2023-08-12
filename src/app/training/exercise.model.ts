export interface Exercise {
  id: string;
  name: string;
  calories: number;
  date?: Date;
  duration:number;
  state?: 'completed' | 'cancelled' | null;
}
