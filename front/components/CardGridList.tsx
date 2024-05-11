import Card from "@/components/Card";

interface ItemList {
    image?: string;
    name: string;
    description: string;
    ingredients: { name: string }[];
}

export default function CardGridList({ itemList }: { itemList: ItemList[] }){
    return(
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        { itemList.length ? 
          itemList.map((item, index: number) => (
            <Card
              key={index}
              image={item.image}
              title={item.name}
              firstDescription={item.description}
              secondDescription={item.ingredients.map(({ name }) => name).join(", ") }
            />
          )) : (
            <div className=" col-span-3 flex justify-center items-center">
              <h1 className="text-sm pb-3">No Cuisines Found</h1>
            </div>
          ) 
        }
      </div>
    )
}