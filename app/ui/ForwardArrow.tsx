import React from 'react'
import Link from 'next/link';

export function ForwardArrow() : React.ReactNode {
    return (
        <div>
                <svg
                className={`w-6 h-6 items-center rotate-90`}
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
          </div>
    )
}