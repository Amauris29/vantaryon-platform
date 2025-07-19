// app/curso/layout.tsx
export default function CursoLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-gray-900 min-h-screen p-6 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Curso: La Máquina y Yo</h1>
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
}