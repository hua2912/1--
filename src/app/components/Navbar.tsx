import { useState } from "react";
import { ShoppingCart, Search, Menu, X, Leaf } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ cartCount, onCartClick, currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { label: "首页", page: "home" },
    { label: "农产品", page: "products" },
    { label: "农户故事", page: "farmers" },
    { label: "产地直供", page: "origin" },
    { label: "关于我们", page: "about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col leading-none">
              <span style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--primary)" }}>
                田间直送
              </span>
              <span style={{ fontSize: "0.65rem", color: "var(--muted-foreground)", letterSpacing: "0.05em" }}>
                从田间到餐桌
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`px-4 py-2 rounded-lg transition-all text-sm ${
                  currentPage === link.page
                    ? "bg-secondary text-primary font-medium"
                    : "text-foreground hover:bg-secondary/60"
                }`}
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center bg-input-background rounded-full px-3 py-1.5 gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="搜索农产品..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-sm w-32 placeholder:text-muted-foreground"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              />
            </div>

            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground rounded-full text-xs flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => { onNavigate(link.page); setMenuOpen(false); }}
              className={`text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                currentPage === link.page ? "bg-secondary text-primary font-medium" : "hover:bg-secondary/60"
              }`}
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
