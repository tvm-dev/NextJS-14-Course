export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p
        style={{
          backgroundColor: "aqua",
          padding: "10px",
          margin: "5px",
          width: "100%",
        }}
      >
        Especificações
      </p>
      {children}
    </>
  );
}
