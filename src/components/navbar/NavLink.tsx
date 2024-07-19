'use client'

import { NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathNname = usePathname();

  return (
    <NavbarItem isActive={pathNname === href} as={Link} href={href}>
      {label}
    </NavbarItem>
  );
}
