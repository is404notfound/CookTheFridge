import Card from "./Card";
import CheckboxCard from "./CheckBoxCard";

export default function CardSlideList({
  isCheckable,
  itemList=[] ,
}: {
  isCheckable?: boolean;
  itemList: {
    image?: string;
    title?: string;
    description?: string;
  }[];
}) {
  return (
    <div className="flex flex-row items-center justify-center">
      { itemList.map((item, index) => {
        return isCheckable ? (
          <CheckboxCard key={index} item={item} />
        ) : (
          <Card key={index} image={item.image} title={item.title} description={item.description} />
        )
      }
      )}
    </div>
  );
}