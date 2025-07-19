
// app/laboratorio/layout.tsx
export default function LaboratorioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="laboratorio-layout">
      <h1>Laboratorio IA</h1>
      <main>{children}</main>
    </div>
  );
}
