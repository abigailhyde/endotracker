import React from 'react'
import Link from 'next/link';

export function BackArrow({to}: { to: string}) : React.ReactNode {
    return (
        <div>
            <Link href={to} className="inline-block">
                <svg
                className={`w-6 h-6 mt-1 items-right rotate-270 transition-transform`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m5 15 7-7 7 7"
                />
                </svg>
            </Link>
          </div>
    )
}