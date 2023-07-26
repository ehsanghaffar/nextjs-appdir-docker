export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  ingredients: Array<string>;
  steps: Array<string>;
  time: string;
}
export interface GetAllRecipesResponse {
  _id: string;
  name: string;
  description: string;
  ingredients: any[];
  __v: number;
}
