import React from 'react'

export function Heading({children}: { children: string}) : React.ReactNode {
    return (
        <h1 className="text-center text-4xl font-medium">{children}</h1>
    )
}