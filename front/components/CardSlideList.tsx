import Card from "./Card";
import CheckboxCard from "./CheckBoxCard";

export default function CardSlideList({
  isCheckable,
  itemList=[] ,
}: {
  isCheckable?: boolean;
  itemList: {
    id: number;
    image?: string;
    name: string;
    description?: string;
  }[];
}) {
  return (
    <div className="flex flex-row items-center justify-center overflow-x-scroll">
      { itemList.map((item, index) => {
        return isCheckable ? (
          <CheckboxCard key={index} item={item} />
        ) : (
          <Card key={index} image={item.image} title={item.name} />
        )
      }
      )}
    </div>
  );
}