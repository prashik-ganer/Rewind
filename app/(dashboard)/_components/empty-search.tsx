import Image from "next/image";

import React from 'react'

const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-search.jpg"
        height={140}
        width={140}
        alt="Empty search"
      />
      <h2 className="text-2xl font-semibold mt-6">
        No results found!
      </h2>
      <p className="text-muted-foreground textg-sm mt-6">
        Try searching for somthing else.
      </p>
    </div>
  )
}

export default EmptySearch
