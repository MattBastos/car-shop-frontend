import tw from 'tailwind-styled-components';

export const OverlayBackdrop = tw.section`
  fixed
  left-0
  top-0
  z-10
  h-screen
  w-screen
  bg-black
  bg-opacity-20
`;

export const Container = tw.section`
  fixed
  left-1/2
  top-1/2
  z-50
  flex
  h-11/12
  w-4/5
  md:w-1/2
  -translate-x-1/2
  -translate-y-1/2
  transform
  flex-col
  items-center
  justify-center
  rounded-md
  bg-white
  p-4
  md:p-8
  shadow-xl
`;

export const TitleContainer = tw.section`
  flex
  w-full
  items-center
  justify-between
`;

export const Title = tw.h1`
  pl-2
  text-lg
  md:text-xl
  font-bold
  text-gray-700
`;

export const CloseModalButton = tw.button`
  rounded-full
  p-2
  md:p-3
  transition-colors
  duration-200
  ease-in-out
  hover:bg-gray-200
`;

export const SeparatorLine = tw.hr`
  my-2
  h-1
  w-4/5
  border-t
  border-gray-500
`;

export const Text = tw.p`
  mb-6
  text-center
  text-base
  md:text-xl
`;
