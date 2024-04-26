import Card from "./Card";
import CheckboxCard from "./CheckBoxCard";

export default function CardSlideList({
  isCheckable,
  itemList = [],
  isEvent = false,
  cb = (param?: any) => {}
}: {
  isCheckable?: boolean;
  isEvent? : boolean;
  cb?: (param?: any) => void;
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
          <Card key={index} id={item.id} image={item.image} title={item.name} isEvent={isEvent} cb={cb} />
        )
      }
      )}
    </div>
  );
}