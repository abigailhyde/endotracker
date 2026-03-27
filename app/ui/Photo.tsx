import React from 'react'

export function Photo({path}: { path: string}) : React.ReactNode {
    return (
        <div className="flex w-full justify-center py-4">
            <div className="relative h-48 w-48 overflow-hidden rounded-full items-center justify-center">
            <div className="absolute inset-[-50%] animate-[spin_3s_linear_infinite] bg-gradient-to-tr from-strawberry via-strawberry via-orange via-tangerine via-marigold via-yellow to-yellow" />
                <div className="absolute inset-1 bg-white rounded-full z-10 flex items-center justify-center">
                    <img src={path} className="rounded-full h-full w-full object-cover" />
                </div>
            </div>
        </div>
    )
}