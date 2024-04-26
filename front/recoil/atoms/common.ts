import { atom } from 'recoil';
import { IIngredient } from '../interfaces';

export const checkedListState = atom<IIngredient[]>({
    key: 'checkedListState',
    default: [],
});