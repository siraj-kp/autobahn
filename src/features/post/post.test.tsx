import { postSlice } from './postSllce';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen } from './test-suite';
import PostList from './list';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(ctx.json([{ title: 'hi', body: 'hi', id: 1 }]), ctx.delay(150));
  }),
];

test('should return the initial state', () => {
  expect(postSlice.reducer(undefined, {} as any)).toEqual({
    value: [],
    status: 'idle',
  });
});

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('fetches post', async () => {
  render(<PostList />);

  // should show loading intially
  expect(screen.queryByText(/data loading.../i)).toBeInTheDocument();

  expect(await screen.findByText(/hi/i)).toBeInTheDocument();
});
