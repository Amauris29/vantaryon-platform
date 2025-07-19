export default function CursoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header><h2>Sección Curso</h2></header>
      <main>{children}</main>
    </>
  );
}