import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function CardComponent({
    title, description, image, type
}: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
}) {
  return (
    <Card className="py-4 mr-2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{type}</p>
        <small className="text-default-500">{description}</small>
        <h4 className="font-bold text-large">{title}</h4>
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
