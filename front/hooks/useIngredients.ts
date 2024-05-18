import { IIngredient } from "@/recoil/interfaces";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { GET_INGREDIENTS, POST_INGREDIENT, DELETE_INGREDIENT } from "graphql/query";

const useIngredients = () => {
    const [ingredientList, setIngredientList] = useState<IIngredient[]>([]);
    const { data } = useQuery(GET_INGREDIENTS);
    const [postIngredient] = useMutation(POST_INGREDIENT);
    const [deleteIngredient] = useMutation(DELETE_INGREDIENT);

    useEffect(() => {
        if (data) {
            setIngredientList(data.ingredients);
        }
    }, [data]);

    const getIngredientSequence = () => {
        return ingredientList.length > 0 ? ingredientList[ingredientList.length - 1].id + 1 : 1;
    }

    const save = async (ingredient: IIngredient) => {
        await postIngredient({
            variables: {
                ...ingredient,
                id: getIngredientSequence(),
            }
        }).then((res) => {
            console.log('[Result Response] ', res);
            setIngredientList([...ingredientList, ingredient]);
            alert("Ingredient added successfully");
        }).catch((err) => {
            console.log(err);
            alert("Failed to add ingredient");
        }
        );
    }

    const remove = async (id: number) => {
        await deleteIngredient({
            variables: {
                id: id
            }
        }).then((res) => {
            console.log('[Result Response] ', res);
            setIngredientList(ingredientList.filter((ingredient) => ingredient.id !== id));
            alert("Ingredient deleted successfully");
        }).catch((err) => {
            console.log(err);
            alert("Failed to delete ingredient");
        }
        );
    }


    return { ingredientList, save, remove };
}

export default useIngredients;