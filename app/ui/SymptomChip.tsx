"use client";
import React, { useState } from 'react';

export function SymptomChip({children}: { children: string}) {
    const [selected, setSelected] = useState(false);

    const notSelectedSymptomsStyle = "border-medium-beige";
    const selectedSymptomsStyle = "bg-medium-beige border-medium-beige";

    return(
        <div onClick = {() => setSelected(!selected)}
            className = {`
                ${selected ? selectedSymptomsStyle : notSelectedSymptomsStyle}
                w-fit rounded-2xl border e py-1 px-4 text-center text-sm  transition-all shadow-xs text-dark-gray
            `}
        
        >
            {children}
        </div>
    )
}
