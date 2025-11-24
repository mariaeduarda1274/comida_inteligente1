export interface Recipe {
  recipeName: string;
  description: string;
  prepTime: string;
  tags: string[];
  ingredients: string[];
  instructions: string[];
}

export interface UserProfile {
  name: string;
  age: string;
  gender: 'masculino' | 'feminino' | 'nao_informar';
  dietaryRestrictions: string[];
}
