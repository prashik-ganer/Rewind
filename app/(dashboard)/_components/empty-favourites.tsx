import Image from "next/image";

import React from 'react'

const EmptyFavourites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-favourites.jpg"
        height={140}
        width={140}
        alt="Empty search"
      />
      <h2 className="text-2xl font-semibold mt-6">
        No favourites board!
      </h2>
      <p className="text-muted-foreground textg-sm mt-6">
        Try favouriting for somthing else.
      </p>
    </div>
  )
}

export default EmptyFavourites
