import { ShoppingCart, Star, MapPin } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  unit: string;
  image: string;
  rating: number;
  reviews: number;
  origin: string;
  farmer: string;
  category: string;
  tag?: string;
  organic?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative overflow-hidden h-52 bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: "var(--accent)", color: "#fff", fontFamily: "'Noto Sans SC', sans-serif" }}>
            {product.tag}
          </span>
        )}
        {product.organic && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: "var(--primary)", color: "#fff", fontFamily: "'Noto Sans SC', sans-serif" }}>
            有机认证
          </span>
        )}
        {discount > 0 && (
          <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-xs font-bold"
            style={{ background: "#c0392b", color: "#fff" }}>
            -{discount}%
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1 mb-1">
          <MapPin className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
          <span className="text-xs text-muted-foreground" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            {product.origin} · {product.farmer}
          </span>
        </div>

        <h3 className="mb-2 line-clamp-2"
          style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, fontSize: "1rem", color: "var(--foreground)" }}>
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          <Star className="w-3.5 h-3.5 fill-current" style={{ color: "#d4860a" }} />
          <span className="text-xs font-medium" style={{ color: "#d4860a" }}>{product.rating}</span>
          <span className="text-xs text-muted-foreground" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            ({product.reviews}条评价)
          </span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-1">
              <span style={{ color: "#c0392b", fontFamily: "'Noto Serif SC', serif", fontWeight: 700, fontSize: "1.4rem" }}>
                ¥{product.price}
              </span>
              <span className="text-xs text-muted-foreground" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                /{product.unit}
              </span>
            </div>
            {product.originalPrice > product.price && (
              <div className="line-through text-xs text-muted-foreground" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                ¥{product.originalPrice}
              </div>
            )}
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:opacity-90 hover:scale-105 shadow"
            style={{ background: "var(--primary)", color: "#fff", fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            <ShoppingCart className="w-4 h-4" />
            加购
          </button>
        </div>
      </div>
    </div>
  );
}
