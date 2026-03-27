import React from 'react'
import Link from 'next/link';

type BaseProp = {text: string}
type LinkProp = BaseProp & {to: string, onClick?: never}
type ClickProp = BaseProp & {onClick: () => void, to?: never}
type ButtonProp = LinkProp | ClickProp

export function Button({to, text, onClick}: ButtonProp) : React.ReactNode {
    if(to) {
        return (
            <Link href={to}  className="bg-dark-beige py-2 rounded-sm flex flex-row justify-center items-center">
                    {text}
            </Link>
        )
    }
    return (
        <button onClick={onClick}  className="bg-dark-beige py-2 rounded-sm flex flex-row justify-center items-center">
                {text}
        </button>
    )
}    