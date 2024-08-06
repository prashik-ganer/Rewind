"use client"

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import EmptySearch from "./empty-search";
import EmptyFavourites from "./empty-favourites";
import EmptyBoards from "./empty-boards";
import BoardCard from "./board-card";
import NewBoardButton from "./new-board-button";

interface BoardListProps{
    orgId: string;
    query:{
        search?:string;
        favourites?:string;
    };
};


export const BoardList =({
    orgId,
    query,
}: BoardListProps)=>{
    // const data=[]           // TODO: Change to API Call
    const data= useQuery(api.boards.get, {orgId});

    // if(!data===undefined){
    //     return(
    //         <div>
    //             Loading....
    //         </div>
    //     )
    // }

    if(data===undefined){
        return(
            <div>
                <h2 className="text-3xl">
                    {query.favourites? "Favourite Boards":"Team Boards"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pd-10">
                    <NewBoardButton orgId={orgId} disabled/>
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>
                    <BoardCard.Skeleton/>
                </div>
            </div>
        )
    }

    if(!data?.length && query.search){
        return (
            <div>
                {/* Try searching for something else. */}
                <EmptySearch/>
            </div>
        )
    }

    if(!data?.length && query.favourites){
        return (
            <div>
                <EmptyFavourites/>
            </div>
        )
    }

    if(!data?.length){
        return (
            <div>
                <EmptyBoards/>
            </div>
        )
    }

    

    return (
        <div>
            {/* {JSON.stringify(query)} */}
            <h2 className="text-3xl">
                {query.favourites? "Favourite Boards":"Team Boards"}
            </h2>
            {/* {JSON.stringify(data)} */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pd-10">
                <NewBoardButton orgId={orgId}/>
                {data?.map((board)=>(
                    <BoardCard
                        key={board._id}
                        id={board._id}
                        title={board.title}
                        imageUrl={board.imageUrl}
                        authorId={board.authorId}
                        authorName={board.authorName}
                        createdAt={board._creationTime}
                        orgId={board.orgId}
                        isFavourite={false}

                    />
                ))}


            </div>
        </div>
    )
}
