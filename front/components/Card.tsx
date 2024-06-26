import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function CardComponent({
    id
    , title
    , image
    , firstDescription
    , secondDescription
    , isEvent=false
    , cb=(param?:any)=>{}
    , isPressable=true
}: {
    id?: number;
    title?: string;
    image?: string;
    firstDescription?: string;
    secondDescription?: string;
    isEvent?: boolean;
    cb?: (param?:any) => void;
    isPressable?: boolean;
}) {

  function onPress () {
    const cardInfo = { id, name: title, image };
    isEvent && cb(cardInfo);
  }

  return (
    <Card 
      className="flex flex-col overflow-visible py-4 mr-2"
      isPressable={isPressable} 
      onPress={onPress}
    >
      <CardHeader className="flex flex-col pb-0 pt-2 px-4">
        <p className="text-tiny uppercase font-bold">{firstDescription || ''}</p>
        <h4 className="font-bold text-large">{title || 'Noname'}</h4>
        <small className="text-default-500">{secondDescription || ''}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        { 
          image 
          ? <Image
              className="object-cover h-[140px]"
              alt="Card background"
              src={image}
              width="100%"
          />
          : <div className="h-[140px] w-full flex justify-center"> 
              <span className="flex flex-col justify-center"> No Image </span>
            </div>
        }
      </CardBody>
    </Card>
  );
}
