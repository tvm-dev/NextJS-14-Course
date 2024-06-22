"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Profile", href: "/profile" },
  { name: "Config", href: "/config" },
  { name: "Info", href: "/info" },
];

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState("");

  //checking if link is active:
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={`${isActive ? "bg-green-400" : "bg-rose-500"}`}
            key={link.href}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
