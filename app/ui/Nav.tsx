"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ClipboardList, Sparkles, User } from "lucide-react";

const navTabs = [
    { href : "/", icon: Home },
    { href : "/symptoms", icon: ClipboardList },
    { href : "/insights", icon: Sparkles },
    { href : "/profile", icon: User },
];

//list of places to not show the nav bar can be adjusted as needed
const HIDDEN = ["/welcome", "/auth"];

export function Nav() {
    const pathname = usePathname();

    if (HIDDEN.includes(pathname)) {
        return null;
    }

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center h-16 z-50">
            {navTabs.map(({ href, icon: Icon }) => {
                const active = pathname === href;
                return (
                    <Link
                        key={href}
                        href={href}
                        className={`flex flex-col items-center gap-1 text-xs ${active ? "text-dark-beige" : "text-gray-400"}`}
                    >
                        <Icon size={22} strokeWidth={active ? 2.5 : 1.5} />
                    </Link>
                );
            })}
        </nav>
    );
}