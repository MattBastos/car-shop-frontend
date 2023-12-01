import tw from 'tailwind-styled-components';

export const Container = tw.section`
  flex
  flex-col
  gap-5
  relative
  w-full
  overflow-x-auto
  rounded-t-xl
`;

export const NoCarMessage = tw.h2`
  text-xl
  text-center
  font-bold
  text-gray-100
`;

export const Table = tw.table`
  w-full
  table-auto
  border-collapse
  border-spacing-0
  rounded-t-xl
  bg-gray-200
  text-center
`;

export const THead = tw.thead`
  bg-primary
  text-sm
  uppercase
  text-gray-200
  md:text-base
  lg:text-lg
`;

export const TH = tw.th`
  px-4
  py-3
`;

export const TBody = tw.tbody`
  text-sm
  text-gray-800
  md:text-base
  lg:text-lg
`;

export const TBodyRow = tw.tr`
  border-b
  border-gray-400
  transition-colors
  ease-in-out
  hover:bg-gray-300
`;

export const TD = tw.td`
  px-2
  py-2
  md:px-4
`;

export const TDActions = tw.td`
  flex
  items-center
  justify-center
  gap-4
  px-2
  py-2
  md:px-4
`;
