"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "アプリ" },
  { href: "/game", label: "ゲーム" },
  { href: "/3dcg", label: "3DCG" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full items-center justify-between gap-6 px-6 py-4 sm:px-20" aria-label="メイン">
        <h1 className="text-lg font-bold tracking-tight sm:text-xl">Manabu Developer</h1>
        <ul className="flex items-center gap-5 text-sm sm:gap-6 sm:text-base">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <li key={link.href}>
                <Link href={link.href} aria-current={active ? "page" : undefined} className={active ? "font-bold text-zinc-900" : "text-zinc-500 transition hover:text-zinc-900"}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
