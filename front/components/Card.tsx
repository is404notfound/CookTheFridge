import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function CardComponent({
    title, image, firstDescription, secondDescription
}: {
    title?: string;
    image?: string;
    firstDescription?: string;
    secondDescription?: string;
}) {
  return (
    <Card className="py-4 mr-2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{firstDescription}</p>
        <h4 className="font-bold text-large">{title}</h4>
        <small className="text-default-500">{secondDescription}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={270}
        />      
    </CardBody>
    </Card>
  );
}
