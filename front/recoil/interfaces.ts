export interface IIngredient {
    id: number;
    name: string;
    image?: string;
}

export interface IRecipe {
    id: number;
    name: string;
    ingredients: IIngredient[];
    category?: string;
    season?: string;
    image?: string;
    description?: string;
}