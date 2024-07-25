import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface HintProps{
    label: string;
    children: React.ReactNode;
    side?: "top"|"bottom"|"left"|"right";
    align?: "start"|"center"| "end";
    sideOffSet?:number;
    alignOffset?: number;
};

export const Hint =({
    label,
    children,
    side,
    align,
    sideOffSet,
    alignOffset,
}: HintProps)=>{
   
   return(
   <TooltipProvider>
        <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>

            <TooltipContent 
            className="text-white bg-black border-black"
            side={side}
            align={align}
            sideOffset={sideOffSet}
            alignOffset={alignOffset}>
                <p className="font-semibold capitalize">
                    {label}
                </p>
            </TooltipContent>



        </Tooltip>
    </TooltipProvider>

   )
}
