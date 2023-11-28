import tw from 'tailwind-styled-components';

export const Label = tw.label`
  flex
  flex-col
`;

export const Span = tw.span`
  mb-1
`;

export const Input = tw.input`
  rounded
  border
  border-gray-300
  px-2
  py-1
  focus:border-primary
  focus:outline-none
`;
