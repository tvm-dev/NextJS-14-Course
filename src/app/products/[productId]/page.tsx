interface ReviewParams {
  params: {
    productId: number;
    reviewId: number;
  };
}

export default function Info({ params }: ReviewParams) {
  return (
    <div>
      <p>Informações sobre o produto {params.productId}</p>
    </div>
  );
}
