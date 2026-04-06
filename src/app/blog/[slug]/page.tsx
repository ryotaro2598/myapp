import Link from "next/link";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <h1>Blog Post</h1>
      <p>This is a blog post</p>
      <p>Slug: {slug}</p>
      <Link href="/blog">Back to blog</Link>
    </div>
  );
}
