import Card from "@/components/Card";

export default function CardGridList({ itemList = [] }: { [key: string] : any }[] ) {
    return(
        <div className="grid grid-cols-3 gap-4">
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