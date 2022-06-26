// A mock function to mimic making an async request for data
export function fetchPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  );
}

export function fetchPost(id: number) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
}

export function updatePost(id: number, data: any) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function addPost(post: any) {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      ...post,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
}
