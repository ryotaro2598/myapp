import Link from "next/link";
import type { Metadata } from "next";
import PostComponent from "./_components/Post";
import { posts } from "./_lib/data";

const pageTitle = "Blog Page. This is a blog page";
const pageDescription = "Blog page. This is a blog page";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

export default function BlogPage() {
  return (
    <div>
      <h1>{pageTitle}</h1>
      <p>{pageDescription}</p>
      <Link href="/blog/authors">Authors</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostComponent post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
