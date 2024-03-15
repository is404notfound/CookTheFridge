'use client';

import {Card, CardBody, CardFooter, Image, Checkbox} from "@nextui-org/react";

export default function CheckboxCard({
  item ,
}: {
  item? : {
    image?: string;
    title?: string;
    description?: string;
    type?: string;
    isChecked?: boolean;
};
}) {
  return (
    <div className="pr-4">
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <Checkbox data-selected={item?.isChecked} size="lg">{item.title}</Checkbox>
          </CardFooter>
        </Card>
    </div>
  )
}