import CardGridList from "@/components/CardGridList";
import CoverList from "@/components/CoverList";
import CardSlideList from "../components/CardSlideList";

export default function Home() {
  // Mock data
  const recipeList = [
    {
      image: "https://source.unsplash.com/random/300x200",
      title: "Recipe 1",
      description: "Description 1",
      type: "recipe"
    },
    {
      image: "https://source.unsplash.com/random/300x200",
      title: "Recipe 2",
      description: "Description 2",
      type: "recipe"
    },
    {
      image: "https://source.unsplash.com/random/300x200",
      title: "Recipe 3",
      description: "Description 3",
      type: "recipe"
    },
    {
      image: "https://source.unsplash.com/random/300x200",
      title: "Recipe 4",
      description: "Description 4",
      type: "recipe"
    }
  ]

  // Mock Data
  const ingredientsList = [
    {
      image: "https://source.unsplash.com/random/300x200",
      title: "Ingredient 1",
      description: "Description 1",
    },
    {
      image: "https://source.unsplash.com/random/300x200",
      title: "Ingredient 2",
      description: "Description 2",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div>
        <h1 className="text-2xl font-bold pb-3">Seasonal Recommend</h1>
        <CoverList />
      </div>
      <div className="pt-20">
        <h1 className="text-2xl font-bold pb-3">Select Ingredients</h1>
        <CardSlideList isCheckable={true} itemList={ingredientsList} />
      </div>
      <div className="pt-20">
        <h1 className="text-2xl font-bold pb-3">Recipes</h1>
        <CardGridList itemList={recipeList} />
      </div>
    </main>
  );
}
