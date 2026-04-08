import Link from "next/link";
import { posts } from "../_lib/data";

const uniqueAuthors = [
  ...new Set(
    posts.map((post) => post.author).filter((author): author is string => Boolean(author)),
  ),
];

export default function AuthorsPage() {
  return (
    <div>
      <h1>Authors Page</h1>
      <Link href="/blog">Back to blog</Link>
      <ul>
        {uniqueAuthors.map((author) => (
          <li key={author}>
            <Link href={`/blog/authors/${encodeURIComponent(author)}`}>{author}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
