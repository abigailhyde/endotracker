import React from 'react'

export function Heading({children}: { children: React.ReactNode}) : React.ReactNode {
    return (
        <h1 className="w-full text-center text-3xl mb-2 font-medium">{children}</h1>
    )
}