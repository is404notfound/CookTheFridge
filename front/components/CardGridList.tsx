import Card from "./Card";

export default function CardGridList({ itemList=[]}) {
    return(
        <div className="grid grid-cols-3 gap-4">
        {itemList.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    )
}