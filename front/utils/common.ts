import { ICuisine } from '@/recoil/interfaces';
  // Mock
  const cuisineList: ()=> ICuisine[] = ()=> {
    const result: ICuisine[] = [] as ICuisine[];

    for (let i = 1; i <= 15; i++) {
      result.push({
        id: i,
        image: `r5`,
        name: `Healthy Food ${i}`,
        ingredients: [{ id: i, name: `Ingredient ${i}` }, { id: i + 1, name: `Ingredient ${i + 1}` }],
        description: `Description ${i}`,
        tags: ['Vegetarian', 'Vegan', 'Gluten Free'],
      });
    }

    return result;
  }

  export { cuisineList }