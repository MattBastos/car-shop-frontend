'use client';

import Link from 'next/link';
import { ReactElement } from 'react';

type SectionCardProps = {
  icon: ReactElement;
  title: string;
  href: string;
};

export const SectionCard = ({ icon, title, href }: SectionCardProps) => {
  return (
    <Link
      href={href}
      className="h-60 w-60 rounded-lg bg-gray-200 shadow-lg transition-transform ease-in-out hover:scale-105"
    >
      <section>{icon}</section>

      <h2>{title}</h2>
    </Link>
  );
};
