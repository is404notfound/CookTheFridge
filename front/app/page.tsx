'use client';

import CardGridList from "@/components/CardGridList";
import CoverList from "@/components/CoverList";
import useFilter from "@/hooks/useFilter";
import { IIngredient, ICuisine } from "@/recoil/interfaces";
import { useEffect, useState } from "react";
import CardSlideList from "@/components/CardSlideList";
import { cuisineList } from "@/utils/common";
import useIngredients from "@/hooks/useIngredients";

export default function Home() {
  const { checkedList } = useFilter();
  const [filteredCuisineList, setFilteredCuisineList] = useState<ICuisine[]>([]);
  const { ingredientList } = useIngredients();

  useEffect(() => {
    const checkedIngredientIds = checkedList.map((item: IIngredient) => item.id);
    const filteredCuisines = cuisineList().filter((cuisine: ICuisine) => {
      return cuisine.ingredients
        .some((ingredient: IIngredient) => checkedIngredientIds.includes(ingredient.id));
    });

    setFilteredCuisineList(filteredCuisines);
  }, [checkedList]);

  return (
    <main className="flex min-h-screen flex-col justify-between p-3 pt-20 md:p-24">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold pb-3 md:pl-7">Seasonal Recommend</h1>
          <CoverList itemList={cuisineList().slice(5)} />
        </div>
      </div>
      <div className="sticky top-0 z-20 bg-black pb-10">
        <h1 className="text-2xl font-bold pb-3 pt-20 ">Ingredients In Your Fridge</h1>
        <CardSlideList isCheckable={true} itemList={ingredientList} />
      </div>
      <div className="z-0 pt-10">
        <h1 className="text-2xl font-bold pb-3">Cuisines Available</h1>
        <CardGridList itemList={checkedList.length ? filteredCuisineList : cuisineList()} />
      </div>
    </main>
  );
}
