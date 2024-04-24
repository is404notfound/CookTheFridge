import { useRecoilState } from "recoil";
import { checkedListState } from "@/recoil/atoms/common";
import { IIngredient } from "@/recoil/interfaces";

const useFilter = ()=> {
    const [checkedList, setCheckedList] = useRecoilState(checkedListState);

    const handleCheck = (ingredient: IIngredient) => {
        const index = checkedList.findIndex((item) => item.id === ingredient.id);
        if (index === -1) {
            setCheckedList([...checkedList, ingredient]);
        } else {
            setCheckedList(checkedList.filter((item) => item.id !== ingredient.id));
        }
    };

    return { checkedList, handleCheck };
}

export default useFilter;