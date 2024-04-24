import { atom } from 'recoil';
import { IIngredient } from '../interfaces';

export const ingredientState = atom<IIngredient>({
    key: 'ingredientState',
    default: {
        id: 0,
        name: 'New Ingredient',
        image: '',
    },
});