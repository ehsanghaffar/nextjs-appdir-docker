import { IRecipCreate } from "@/models/recipe";

export const seedData: IRecipCreate[] = [
  {
    name: 'Chocolate Cake',
    description: 'A delicious chocolate cake recipe',
    ingredients: [
      { id: 1, name: 'Flour' },
      { id: 2, name: 'Sugar' },
      { id: 3, name: 'Cocoa Powder' },
      { id: 4, name: 'Eggs' },
      { id: 5, name: 'Butter' },
      { id: 6, name: 'Milk' },
      { id: 7, name: 'Vanilla Extract' },
    ],
    photo: 'contactus.jpg',
    steps: '1. Preheat oven to 350°F. 2. Mix dry ingredients. 3. Mix wet ingredients. 4. Combine and mix until smooth. 5. Bake for 30 minutes.\n 1. Preheat oven to 350°F. 2. Mix dry ingredients. 3. Mix wet ingredients. 4. Combine and mix until smooth. 5. Bake for 30 minutes',
  },
  {
    name: 'Spaghetti Bolognese',
    description: 'Classic Italian pasta dish',
    ingredients: [
      { id: 8, name: 'Spaghetti' },
      { id: 9, name: 'Ground Beef' },
      { id: 10, name: 'Tomato Sauce' },
      { id: 11, name: 'Onion' },
      { id: 12, name: 'Garlic' },
      { id: 13, name: 'Olive Oil' },
      { id: 14, name: 'Salt' },
      { id: 15, name: 'Pepper' },
    ],
    photo: 'contactus.jpg',
    steps: '1. Cook spaghetti according to package instructions. 2. Brown ground beef in olive oil. 3. Add chopped onion and garlic. 4. Stir in tomato sauce and seasonings. 5. Simmer for 20 minutes. 6. Serve over cooked spaghetti.',
  },
  {
    name: 'Just Cake',
    description: 'Classic Cake',
    ingredients: [
      { id: 16, name: 'Onion' },
      { id: 17, name: 'Garlic' },
      { id: 18, name: 'Olive Oil' },
      { id: 19, name: 'Salt' },
      { id: 20, name: 'Pepper' },
    ],
    photo: 'contactus.jpg',
    steps: '1. Cook spaghetti according to package instructions. 2. Brown ground beef in olive oil. 3. Add chopped onion and garlic. 4. Stir in tomato sauce and seasonings. 5. Simmer for 20 minutes. 6. Serve over cooked spaghetti.',
  },
];
