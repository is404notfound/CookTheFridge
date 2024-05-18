export interface IIngredient {
    id: number;
    name: string;
    image?: string;
}

export interface ICuisine {
    id: number;
    name: string;
    ingredients: IIngredient[];
    tags: string[];
    image?: string;
    description?: string;
}