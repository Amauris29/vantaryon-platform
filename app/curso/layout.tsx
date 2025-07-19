
// app/curso/layout.tsx
export default function CursoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="curso-layout">
      <h1>Curso</h1>
      <main>{children}</main>
    </div>
  );
}
