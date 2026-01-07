import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="text-xl font-bold">
            4S<span className="text-blue-600">STORE</span>
          </Link>

          {/* MENU */}
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/loja" className="hover:text-blue-600">
              Loja
            </Link>
            <Link href="/contato" className="hover:text-blue-600">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
