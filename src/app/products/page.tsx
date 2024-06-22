import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transações",
};

export default function Products() {
  const id = 1;

  return (
    <div className="font-semibold text-center m-auto p-10 bg-slate-300 flex flex-col">
      <Link href={`/products/${id}`}>Product 01</Link>
      <Link href={"/products/2"} className="m-10">
        Product 02
      </Link>
      <Link href={"/products/3"} replace>
        Product 03
      </Link>
    </div>
  );
}
