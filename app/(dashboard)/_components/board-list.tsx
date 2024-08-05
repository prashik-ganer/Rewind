"use client"
import EmptySearch from "./empty-search";
import EmptyFavourites from "./empty-favourites";
import EmptyBoards from "./empty-boards";


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
    const data=[]           // TODO: Change to API Call

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
            {JSON.stringify(query)}
        </div>
    )
}
