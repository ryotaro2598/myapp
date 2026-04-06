import Link from "next/link";

export default async function ShopPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <h1>Shop Page</h1>
      <p>This is a shop page</p>
      <p>Slug: {slug.join("/")}</p>
      <Link href="/shop">Back to shop</Link>
      <Link href="/shop/products">Products</Link>
      <Link href="/shop/categories">Categories</Link>
      <Link href="/shop/tags">Tags</Link>
      <Link href="/shop/reviews">Reviews</Link>
      <Link href="/shop/faqs">FAQs</Link>
      <Link href="/shop/contact">Contact</Link>
      <Link href="/shop/about">About</Link>
    </div>
  );
}
