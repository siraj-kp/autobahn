import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Import your own reducer
import { postSlice } from './postSllce';
import { BrowserRouter } from 'react-router-dom';

function render(
  ui: any,
  {
    preloadedState,
    store = configureStore({
      reducer: { posts: postSlice.reducer },
      preloadedState,
    }),
    ...renderOptions
  } = {} as any
) {
  function Wrapper({ children }: any) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
