import React from "react";
import Link from 'next/link';
import { ForwardArrow } from "./ForwardArrow";
import Image from "next/image";

export function ProviderCard({ to, name, photo, location }: { to: string, name: string, photo: string, location: string }) {
  return (
    <div className="bg-off-white rounded-md text-xl mx-5 my-1 hover:bg-gray-50 transition-colors">
      <Link href={to} className="flex items-center justify-between p-4 w-full">
        
        <div className="flex items-center gap-4">
          {photo && (
            <div className="relative w-14 h-14 overflow-hidden rounded-full shrink-0">
              <div className="absolute inset-[-50%] animate-[spin_3s_linear_infinite] bg-gradient-to-tr from-strawberry via-orange via-tangerine via-marigold to-yellow" />
              <div className="absolute inset-[2px] bg-white rounded-full z-10 flex items-center justify-center overflow-hidden">
                <Image src={photo} width={30} height={30} className="h-full w-full object-cover" alt={name} />
              </div>
            </div>
          )}

          <div className="flex flex-col">
            <span className="text-lg font-medium leading-tight">{name}</span>
            {location && (
              <span className="text-sm text-gray-400 leading-tight">{location}</span>
            )}
          </div>
        </div>

        <div className="text-gray-400">
           <ForwardArrow />
        </div>

      </Link>
    </div>
  );
}