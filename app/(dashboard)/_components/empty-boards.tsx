"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";


const EmptyBoards = () => {
  const {organization} = useOrganization();
  // const create = useMutation(api.board.create);
  const {mutate, pending} = useApiMutation(api.board.create);
  const onClick = () =>{
    if(!organization) return;
    // create({
    //   orgId: organization.id,
    //   title: "Untitled"
    // });
    mutate({
      orgId: organization.id,
      title: "Untitled"
    })
    .then((id)=>{
      toast.success("Board Created!")
      // TODO: Redirect to board/{id}
    })
    .catch(()=>toast.error("Failed to create board!"))
  };
 
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/notes.png"
        height={110}
        width={110}
        alt="Empty search"
      />
      <h2 className="text-2xl font-semibold mt-6">
        Create your first board
      </h2>
      <p className="text-muted-foreground textg-sm mt-6">
        Start by creating a baord for your organization
      </p>
      <div className="mt-6">
        {/* <Button onClick={onClick} size="lg">
          Create Board
        </Button> */}
        <Button disabled={pending} onClick={onClick} size="lg">
          Create Board
        </Button>
      </div>
    </div>
  )
}

export default EmptyBoards
