'use client';

import CardSlideList from "@/components/CardSlideList";
import PreviewPanel from "@/components/PreviewPanel";
import Card from "@/components/Card";
import { useRecoilState } from "recoil";
import { ingredientState } from "@/recoil/atoms/ingredient";
import { Button } from "@nextui-org/react";
import { IIngredient } from "@/recoil/interfaces";
import useIngredients from "@/hooks/useIngredients";

export default function Ingredients() {
    const { ingredientList, save, remove } = useIngredients();
    const [ingredient, setIngredient] = useRecoilState<IIngredient>(ingredientState);
    const { id, name, image } = ingredient;

    const initializeIngredients = () => {
        setIngredient({
            id: 0,
            name: '',
            image: '',
        });
    }

    function updateIngredient({ target }) {
        const { name, value } = target;

        setIngredient({
            ...ingredient,
            [name]: value,
        });
    }

    function onClickCardList(card: IIngredient) {
        setIngredient({
            ...card,
        });
    }

    function onClickSave() {
        const validation: boolean = validate();
        validation && save(ingredient);
    }

    function validate() {
        if (!name) {
            alert('Please enter the ingredient name!');
            return false;
        }

        return true;
    }

    async function onClickDelete() {
        const result = confirm('Are you sure you want to delete this ingredient?');
        result && remove(id);
    }

    return (
        <main className="flex flex-col gap-20 md:p-24 p-3 pt-20">
            <div>
                <h1 className="text-4xl font-bold">Ingredients</h1>
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold">Exist List</h2>
                <CardSlideList isCheckable={false} itemList={ingredientList} isEvent={true} cb={onClickCardList} />
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold">Preview</h2>
                <PreviewPanel component={<Card title={name} image={image} isEvent={false} isPressable={false} />} cb={initializeIngredients} />
            </div>
            <div className="flex flex-col gap-5">
                <div>
                    <h2 className="text-2xl font-bold pb-10">Detail</h2>
                    <div className="flex flex-col">
                        <div className="grid grid-cols-2">
                            <p className="text-xl font-bold">ID</p>
                            <input
                                type="text"
                                name="id"
                                className="border-2 border-gray-300 rounded-md p-2 m-2"
                                value={id || ''}
                                disabled
                            />
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-xl font-bold">Ingredient Name</p>
                            <input
                                type="text"
                                name="name"
                                className="text-black border-2 border-gray-300 rounded-md p-2 m-2"
                                value={name || ''}
                                onChange={updateIngredient}
                            />
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-xl font-bold">Image Url</p>
                            <input
                                type="text"
                                name="image"
                                className="text-black border-2 border-gray-300 rounded-md p-2 m-2"
                                value={image || ''}
                                onChange={updateIngredient}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center p-20">
                    <div className="flex flex-row gap-10">
                        <Button color="primary" onClick={onClickSave}>Save</Button>
                        {
                            !!id && <Button color="warning" onClick={onClickDelete}>Delete</Button>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}
