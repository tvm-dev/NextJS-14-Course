import Link from "next/link";

interface ReviewParams {
  params: {
    productId: number;
    reviewId: string;
  };
}

export default function NotFound({ params }: ReviewParams) {
  return (
    <>
      <h1 className="font-semibold text-red-500">Erro 404!</h1>
      <p>Está página não existe!</p>
      <Link href={"/"} className="underline">
        Voltar
      </Link>
    </>
  );
}
