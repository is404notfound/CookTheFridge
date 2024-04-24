'use client';

import CardSlideList from "@/components/CardSlideList";
import { ingredientsList } from "app/page";
import PreviewPanel from "@/components/PreviewPanel";
import Card from "@/components/Card";


export default function Ingredients() {

  return (
    <main className="flex flex-col p-24">
        <div>
            <h1 className="text-4xl font-bold">Ingredients</h1> 
        </div>
        <div className="flex flex-col p-24">
            <h2 className="text-2xl font-bold">Exist List</h2>
            <CardSlideList isCheckable={false} itemList={ingredientsList()} />
        </div>
        <div className="flex flex-col p-24">
            <h2 className="text-2xl font-bold">Preview</h2>
            <PreviewPanel component={<Card />} />
        </div>
        <div className="flex flex-col p-24">
            <h2 className="text-2xl font-bold">Detail</h2>
            <div className="flex flex-row">
                <p className="text-2xl font-bold">ID</p>
                <input type="text" className="border-2 border-gray-300 rounded-md p-2 m-2" />         
            </div>
            <div className="flex flex-row">
                <p className="text-2xl font-bold">Ingredient Name</p>
                <input type="text" className="border-2 border-gray-300 rounded-md p-2 m-2" />         
            </div>
            <div className="flex flex-row">
                <p className="text-2xl font-bold">Description</p>
                <input type="text" className="border-2 border-gray-300 rounded-md p-2 m-2" />
            </div>
            <div className="flex flex-row">
                <p className="text-2xl font-bold">Image</p>
                <input type="text" className="border-2 border-gray-300 rounded-md p-2 m-2" />
            </div>
        </div>
    </main>
  );
}
