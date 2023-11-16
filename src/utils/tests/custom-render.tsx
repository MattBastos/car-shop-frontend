import { render, RenderOptions } from '@testing-library/react';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context';
import { ReactElement } from 'react';

const customRender = (
  ui: ReactElement,
  {
    route = '/',
    ...options
  }: { route?: string } & Omit<RenderOptions, 'wrapper'>
) => {
  const mockUseRouter = {
    asPath: route,
    route,
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn()
  };

  return render(
    <AppRouterContext.Provider value={mockUseRouter}>
      {ui}
    </AppRouterContext.Provider>,
    options
  );
};

export * from '@testing-library/react';
export { customRender as render };
