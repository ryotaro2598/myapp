import Link from "next/link";
import { notFound } from "next/navigation";
import PostComponent from "../../_components/Post";
import { posts } from "../../_lib/data";

function decodeAuthorParam(authorParam: string) {
  try {
    return decodeURIComponent(authorParam);
  } catch {
    return authorParam;
  }
}

export default async function AuthorPostsPage({
  params,
}: {
  params: Promise<{ author: string }>;
}) {
  const { author: authorParam } = await params;
  const authorName = decodeAuthorParam(authorParam);
  const authorPosts = posts.filter((post) => post.author === authorName);

  if (authorPosts.length === 0) {
    notFound();
  }

  return (
    <div>
      <h1>Posts by {authorName}</h1>
      <p>
        <Link href="/blog/authors">Back to authors</Link>
        {" · "}
        <Link href="/blog">Back to blog</Link>
      </p>
      <ul>
        {authorPosts.map((post) => (
          <li key={post.id}>
            <PostComponent post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
