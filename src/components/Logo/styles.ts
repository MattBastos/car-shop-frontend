'use client';

import Image from 'next/image';
import tw from 'tailwind-styled-components';

export const Container = tw.figure`
  m-2
  flex
  items-center
  justify-center
  overflow-hidden
  rounded-full
`;

export const Logo = tw(Image)`
  h-full
  w-full
  object-cover
`;
