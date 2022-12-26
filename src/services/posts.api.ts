import { clientEnv } from 'env/schema.mjs';

async function getPosts() {
  const response = await fetch(clientEnv.NEXT_PUBLIC_CLIENTVAR as string, {
    next: {
      revalidate: 60,
    },
  });
  return await response.json();
}

export { getPosts };
