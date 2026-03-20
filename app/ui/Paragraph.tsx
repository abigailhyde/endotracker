import React from 'react'


export function Paragraph({children}: { children: string}) : React.ReactNode {
    return (
        <p className="text-center text-sm tracking-wide">{children}</p>
    )
}