"use client";

import { forwardRef } from "react";
import { Symptom } from "../lib/types";

interface ChipProps extends React.InputHTMLAttributes<HTMLInputElement> {
    symptom: Symptom
}

export const SymptomChip = forwardRef<HTMLInputElement, ChipProps>(({symptom, ...props}, ref) => {
    return(
        <label className="border-medium-beige checked:bg-medium-beige checked: border-medium-beige w-fit rounded-2xl border e py-1 px-4 text-center text-sm  transition-all shadow-xs text-dark-gray">
            <input 
            {...props}
            ref={ref}
            type="checkbox" value={symptom.code}/>
            <span>{symptom.display}</span>
        </label>
    )
})
