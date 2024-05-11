// Mock
export const ingredientsList = () => {
    const result = [];
  
    for (let i = 1; i <= 20; i++) {
      result.push({
        id: i,
        image: `https://source.unsplash.com/300x200?fruit,${i}`,
        name: `Ingredient ${i}`,
      });
    }
  
    return result;
  }

  // Mock
  export const cuisineList = () => {
    const result = [];

    for (let i = 1; i <= 15; i++) {
      result.push({
        id: i,
        image: `https://source.unsplash.com/random/300x200?food cuisine,${i}`,
        name: `Healthy Food ${i}`,
        ingredients: [{ id: i, name: `Ingredient ${i}` }, { id: i + 1, name: `Ingredient ${i + 1}` }],
        description: `Description ${i}`,
        season: `Spring`,
      });
    }

    return result;
  }