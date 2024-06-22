import { notFound } from "next/navigation";

interface InfoParams {
  params: {
    productId: number;
    reviewId: string;
  };
}

export default function Review({ params }: InfoParams) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      <p>Produto {params.productId} </p>
      <p>Review {params.reviewId} </p>
    </div>
  );
}
