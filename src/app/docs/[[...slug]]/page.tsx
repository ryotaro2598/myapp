import Link from "next/link";

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const pathLabel = slug?.length ? slug.join("/") : "(top)";

  return (
    <div>
      <h1>Docs Page</h1>
      <p>Slug: {pathLabel}</p>
      <Link href="/docs">Getting started</Link>
      <Link href="/docs/usage">Usage</Link>
      <Link href="/docs/configuration">Configuration</Link>
      <Link href="/docs/installation">Installation</Link>
    </div>
  );
}
