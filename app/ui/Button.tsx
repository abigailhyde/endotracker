import React from 'react'
import Link from 'next/link';


export function Button({to, text}: { to: string, text: string}) : React.ReactNode {
    return (
        <Link href={to}  className="bg-dark-beige py-2 my-1 rounded-sm flex flex-row justify-center items-center">
            <button>
                {text}
            </button>
        </Link>
    )
}