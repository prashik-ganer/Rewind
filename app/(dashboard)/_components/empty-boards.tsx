"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";


const EmptyBoards = () => {
  const {organization} = useOrganization();
  const create = useMutation(api.board.create);
  const onClick = () =>{
    if(!organization) return;
    create({
      orgId: organization.id,
      title: "Untitled"
    });
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
        <Button onClick={onClick} size="lg">
          Create Board
        </Button>
      </div>
    </div>
  )
}

export default EmptyBoards
