import Link from "next/link";

export default function ShopIndex() {
  return (
    <div>
      <h1>Shop</h1>
      <p>Slug: (shop top — no segments)</p>
      <Link href="/shop/products">Products</Link>
      <Link href="/shop/categories">Categories</Link>
      <Link href="/shop/tags">Tags</Link>
    </div>
  );
}
