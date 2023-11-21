import NextLink from 'next/link';
import tw from 'tailwind-styled-components';

export const Container = tw.footer`
  w-full
  mt-auto
  pt-6
  flex
  flex-col
  items-center
  justify-center
  pb-4
`;

export const SeparatorLine = tw.hr`
  my-10
  border-t
  border-gray-200
  w-11/12
  mx-auto
`;

export const Content = tw.section`
  flex
  flex-col
  md:flex-row
  w-full
  lg:w-6/12
  items-center
  justify-center
  md:items-start
  md:justify-around
  flex-wrap
  gap-10
  pb-10
`;

export const Section = tw.section`
  flex
  flex-col
  items-center
  justify-center
  gap-2
  sm:max-w-xs
`;

export const Title = tw.p`
  text-xl
  font-bold
  text-gray-200
`;

export const List = tw.ul`
  flex
  flex-col
  items-start
  justify-center
  gap-2
`;

export const Link = tw(NextLink)`
  flex
  items-center
  justify-center
  gap-1
`;

export const LinkTitle = tw.h3`
  text-lg
  font-bold
  text-gray-200
`;

export const CopyrightContainer = tw.section`
  mt-3
  flex
  w-full
  items-center
  justify-center
`;

export const CopyrightText = tw.p`
  mb-2
  max-w-[18rem]
  text-center
  text-gray-200
  sm:max-w-fit
`;
