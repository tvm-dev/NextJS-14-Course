import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link className=" m-10 underline p-10" href={"/products"}>
        Ir para Produtos
      </Link>
    </>
  );
}
