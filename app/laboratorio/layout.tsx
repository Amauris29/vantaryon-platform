export default function LaboratorioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header><h2>Sección Laboratorio</h2></header>
      <main>{children}</main>
    </>
  );
}