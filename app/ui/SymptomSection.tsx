import React from "react";

interface SymptomSectionProps {
  children: React.ReactNode;
  title?: string;
  iconSrc: string;
  isOpen: boolean;
  onClick: () => void;
}

export function SymptomSection({
  children,
  title,
  iconSrc,
  isOpen,
  onClick,
}: SymptomSectionProps) {
  return (
    <div id="accordion-card">
      <h2 id="accordion-card-heading-1">
        <button
          type="button"
          onClick={onClick} 
          className="bg-off-white rounded-t-md text-xl flex items-center justify-between w-full pl-4 pt-3 pb-3 gap-3"
        >
          <div className="flex items-center gap-2">
            {iconSrc && (
              <img src={iconSrc} className="w-7 h-7 object-contain" alt="" />
            )}
            <span>{title}</span>
          </div>
          <div>
            <svg
              className={`mr-4 w-5 h-5 transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
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
        </button>
      </h2>
      <div
        id="accordion-card-body-1"
        className={`bg-off-white rounded-b-lg rounded-b-base shadow-xs ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-3 pt-2 md:p-5 flex flex-wrap gap-2">{children}</div>
      </div>
    </div>
  );
}