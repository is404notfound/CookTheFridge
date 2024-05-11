import { Button } from "@nextui-org/react";

export default function PreviePanel({
    component
    , cb
}: {
    component: JSX.Element;
    cb: ()=> void;
    }) {
    return(
        <div className="w-full flex flex-col bg-transparent bg-slate-950 border border-gray-500 border-double rounded-lg p-5">
            <div className="flex justify-end pb-10">
                <Button radius='full' onClick={cb}> Initialize </Button>
            </div>
            <div className="flex justify-center">
                { component }
            </div>
        </div>
    )
}