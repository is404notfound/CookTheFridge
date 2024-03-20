'use client';

import {Card, CardBody, CardFooter, Image, Checkbox} from "@nextui-org/react";
import useFilter from "@/hooks/useFilter";
import { useEffect, useState } from "react";

export default function CheckboxCard({
  item ,
}: {
  item : {
    id: number;
    image?: string;
    name: string;
    description?: string;
    isChecked?: boolean;
};
}) {
  const { handleCheck, checkedList } = useFilter();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    const isContained: number = checkedList.findIndex(({ id }) => id === item.id);
    isContained !== -1 ? setIsChecked(true) : setIsChecked(false);
  }, [checkedList]);

  return (
    <div className="pr-4">
        <Card shadow="sm" isPressable onPress={()=>handleCheck(item)}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item?.name}
              className="w-full object-cover h-[140px]"
              src={item?.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <Checkbox color="gradient" isSelected={isChecked} size="md" onChange={()=>handleCheck(item)}>
              <span className="truncate"> {item?.name} </span>
            </Checkbox>
          </CardFooter>
        </Card>
    </div>
  )
}