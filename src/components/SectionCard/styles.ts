import Link from 'next/link';
import tw from 'tailwind-styled-components';

export const Container = tw(Link)`
  flex
  h-60
  w-60
  flex-col
  items-center
  justify-center
  rounded-lg
  bg-gray-200
  shadow-lg
  transition-transform
  ease-in-out
  hover:scale-105
`;

export const IconContainer = tw.section`
  flex
  h-4/5
  w-full
  items-center
  justify-center
  hover:bg-gray-300
`;

export const Title = tw.h2`
  text-xl
  font-bold
`;
