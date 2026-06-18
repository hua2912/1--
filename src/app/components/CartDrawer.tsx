import { X, Trash2, ShoppingBag } from "lucide-react";
import type { Product } from "./ProductCard";

export interface CartItem extends Product {
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQty: (id: number, qty: number) => void;
}

export function CartDrawer({ isOpen, onClose, items, onRemove, onUpdateQty }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "var(--background)" }}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700, fontSize: "1.2rem" }}>
            购物车
          </h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-muted transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground opacity-40" />
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--muted-foreground)" }}>
                购物车还是空的<br />快去挑选新鲜农产品吧
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 bg-card rounded-xl p-3 border border-border">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="line-clamp-2 text-sm mb-1"
                      style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600 }}>
                      {item.name}
                    </p>
                    <p className="text-xs mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--muted-foreground)" }}>
                      {item.origin}
                    </p>
                    <div className="flex items-center justify-between">
                      <span style={{ color: "#c0392b", fontWeight: 700, fontSize: "1rem" }}>
                        ¥{item.price}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-sm hover:bg-muted transition-colors"
                        >
                          −
                        </button>
                        <span className="w-5 text-center text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-sm hover:bg-muted transition-colors"
                        >
                          +
                        </button>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="ml-1 p-1 rounded hover:bg-muted transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-border">
            <div className="flex justify-between mb-4">
              <span style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--muted-foreground)" }}>
                合计（含运费）
              </span>
              <span style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700, fontSize: "1.4rem", color: "#c0392b" }}>
                ¥{total.toFixed(2)}
              </span>
            </div>
            <button
              className="w-full py-4 rounded-xl font-semibold text-base transition-all hover:opacity-90"
              style={{ background: "var(--primary)", color: "#fff", fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              去结算
            </button>
            <p className="text-center text-xs mt-3" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--muted-foreground)" }}>
              满 99 元包邮 · 冷链配送 · 次日达
            </p>
          </div>
        )}
      </div>
    </>
  );
}
