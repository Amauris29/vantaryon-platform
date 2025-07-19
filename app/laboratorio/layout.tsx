export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white font-sans">
        <header className="p-4 shadow-md flex justify-between items-center">
          <h1 className="text-2xl font-bold">VANTARYON — LABORATORIO IA</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Inicio</a>
            <a href="/curso" className="hover:underline">Curso</a>
            <a href="/laboratorio" className="hover:underline">Laboratorio IA</a>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
