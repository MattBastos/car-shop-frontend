import Link from 'next/link';
import tw from 'tailwind-styled-components';

export const Container = tw(Link)`
  flex
  h-48
  w-48
  md:h-60
  md:w-60
  flex-col
  items-center
  justify-center
  rounded-lg
  bg-gray-200
  shadow-lg
`;

export const IconContainer = tw.section`
  flex
  h-4/5
  w-full
  items-center
  justify-center
  transition-colors
  ease-in-out
  duration-300
  hover:bg-gray-300
`;

export const Title = tw.h2`
  text-lg
  md:text-xl
  font-bold
`;
