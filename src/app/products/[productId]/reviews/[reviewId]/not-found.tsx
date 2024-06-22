import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <p>Erro 404!</p>
      <p>Oops, esta review não existe mais!</p>
      <Link href={"/"} className="underline">
        Voltar
      </Link>
    </div>
  );
}
