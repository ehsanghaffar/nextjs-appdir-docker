import mongoose, { Document, Schema } from 'mongoose'

export interface IRecipe extends Document {
  name: string;
  description: string;
  ingredients?: Ingredients[];
  photo: File | null;
  steps: string;
}

export interface Ingredients {
  id: number;
  name: string;
}

export type IRecipCreate = Pick<IRecipe, "name" | "description" | "ingredients" | "photo" | "steps">

const RecipeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: [
    new Schema({
      id: Number,
      name: String
    },
      { _id: false }
    )
  ],
  photo: {
    type: String
  },
  steps: {
    type: String
  }
})

export const Recipe = mongoose.models.Recipe || mongoose.model<IRecipe>('Recipe', RecipeSchema)
