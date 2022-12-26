import { getPosts } from 'services/posts.api';

const postHTML = (post: any) => `
    <div class="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-black hover:bg-white/20">
        <h3 class="text-2xl font-bold">${post.title.rendered}</h3>
        <div class="text-lg">${post.content.rendered}</div>
        <a href="/posts/${post.slug}" class="text-lg text-blue-500">Read more</a>
    </div>
`;

export default async function Page() {
  const data = await getPosts();
  const posts = data.map(postHTML).join('');
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: posts }} />
    </>
  );
}
