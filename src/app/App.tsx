import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Categories } from "./components/Categories";
import { ProductCard, type Product } from "./components/ProductCard";
import { FarmerStories } from "./components/FarmerStories";
import { CartDrawer, type CartItem } from "./components/CartDrawer";
import { Footer } from "./components/Footer";

const allProducts: Product[] = [
  {
    id: 1,
    name: "云南高原有机小白菜 新鲜嫩叶现摘现发",
    price: 12.8,
    originalPrice: 18,
    unit: "500g",
    image: "https://images.unsplash.com/photo-1708798534031-3711ec8cc16e?w=400&h=300&fit=crop&auto=format",
    rating: 4.9,
    reviews: 1283,
    origin: "云南大理",
    farmer: "李建国农场",
    category: "vegetables",
    tag: "热销",
    organic: true,
  },
  {
    id: 2,
    name: "四川蒲江红心猕猴桃 香甜多汁当季鲜果",
    price: 39.9,
    originalPrice: 58,
    unit: "2kg",
    image: "https://images.unsplash.com/photo-1599275247787-40daab5777bc?w=400&h=300&fit=crop&auto=format",
    rating: 4.8,
    reviews: 2156,
    origin: "四川蒲江",
    farmer: "张秀兰果园",
    category: "fruits",
    tag: "当季",
  },
  {
    id: 3,
    name: "黑龙江五常稻花香大米 2024新米正宗原产",
    price: 68,
    originalPrice: 85,
    unit: "5kg",
    image: "https://images.unsplash.com/photo-1716650205028-af3e1b453c3a?w=400&h=300&fit=crop&auto=format",
    rating: 4.9,
    reviews: 3847,
    origin: "黑龙江五常",
    farmer: "王大山农场",
    category: "grains",
    organic: true,
  },
  {
    id: 4,
    name: "新疆阿克苏苹果 冰糖心红富士礼盒装",
    price: 49.9,
    originalPrice: 69,
    unit: "5kg",
    image: "https://images.unsplash.com/photo-1437275418715-2def52829d07?w=400&h=300&fit=crop&auto=format",
    rating: 4.7,
    reviews: 4521,
    origin: "新疆阿克苏",
    farmer: "阿依古丽家庭农场",
    category: "fruits",
    tag: "爆款",
  },
  {
    id: 5,
    name: "山东农家散养土鸡蛋 谷物喂养无添加",
    price: 28.8,
    originalPrice: 36,
    unit: "30枚",
    image: "https://images.unsplash.com/photo-1585537358069-c67a7a471cd0?w=400&h=300&fit=crop&auto=format",
    rating: 4.8,
    reviews: 1967,
    origin: "山东潍坊",
    farmer: "赵家鸡场",
    category: "eggs",
    organic: true,
  },
  {
    id: 6,
    name: "云南野生牛肝菌干货 纯天然无硫熏制",
    price: 89,
    originalPrice: 120,
    unit: "200g",
    image: "https://images.unsplash.com/photo-1634726164517-d3bc7e54ebb1?w=400&h=300&fit=crop&auto=format",
    rating: 4.9,
    reviews: 892,
    origin: "云南楚雄",
    farmer: "彝家野生菌基地",
    category: "mushrooms",
    tag: "精品",
  },
  {
    id: 7,
    name: "秦岭山区土蜂蜜 百花蜜纯正天然无添加",
    price: 58,
    originalPrice: 78,
    unit: "500g",
    image: "https://images.unsplash.com/photo-1708798051569-423da62ad13a?w=400&h=300&fit=crop&auto=format",
    rating: 4.8,
    reviews: 1543,
    origin: "陕西秦岭",
    farmer: "孙老汉蜂场",
    category: "honey",
    organic: true,
  },
  {
    id: 8,
    name: "海南三亚热带小菠萝 香甜多汁当季现摘",
    price: 24.9,
    originalPrice: 35,
    unit: "3斤",
    image: "https://images.unsplash.com/photo-1691039030112-3294ecb3181e?w=400&h=300&fit=crop&auto=format",
    rating: 4.6,
    reviews: 728,
    origin: "海南三亚",
    farmer: "海南热带农庄",
    category: "fruits",
    tag: "新品",
  },
];

// MARKER-MAKE-KIT-INVOKED
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item)));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Noto Sans SC', sans-serif", background: "var(--background)" }}>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      {currentPage === "home" && (
        <>
          <Hero onShopNow={() => setCurrentPage("products")} />
          <Features />

          {/* Promo Banners */}
          <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: "产地直供 放心食材",
                    subtitle: "今日特惠：蔬菜全场8折",
                    bg: "https://images.unsplash.com/photo-1779769600391-8fc70595910f?w=800&h=260&fit=crop&auto=format",
                    cta: "立即抢购",
                  },
                  {
                    title: "应季水果 现摘现发",
                    subtitle: "冷链配送 48小时内到货",
                    bg: "https://images.unsplash.com/photo-1585537358069-c67a7a471cd0?w=800&h=260&fit=crop&auto=format",
                    cta: "查看详情",
                  },
                ].map((banner, i) => (
                  <div key={i} className="relative h-44 rounded-2xl overflow-hidden cursor-pointer group">
                    <img
                      src={banner.bg}
                      alt={banner.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-8"
                      style={{ background: "linear-gradient(90deg, rgba(30,42,20,0.8) 0%, transparent 100%)" }}>
                      <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700, fontSize: "1.3rem", color: "#fff" }}>
                        {banner.title}
                      </h3>
                      <p className="text-sm mb-3" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(255,255,255,0.8)" }}>
                        {banner.subtitle}
                      </p>
                      <button
                        onClick={() => setCurrentPage("products")}
                        className="self-start px-5 py-2 rounded-full text-sm font-medium transition-all hover:opacity-90"
                        style={{ background: "var(--accent)", color: "#fff", fontFamily: "'Noto Sans SC', sans-serif" }}
                      >
                        {banner.cta} →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section className="py-16" style={{ background: "var(--background)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs mb-3"
                    style={{ background: "var(--primary)", color: "#fff", fontFamily: "'Noto Sans SC', sans-serif" }}>
                    🔥 今日精选
                  </span>
                  <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                    当季好物推荐
                  </h2>
                </div>
                <button
                  onClick={() => setCurrentPage("products")}
                  className="text-sm hover:underline"
                  style={{ color: "var(--primary)", fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  查看全部 →
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {allProducts.slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                ))}
              </div>
            </div>
          </section>

          <FarmerStories />

          {/* Reviews */}
          <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="mb-3" style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                他们都在说
              </h2>
              <p className="mb-12 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--muted-foreground)" }}>
                超过50万用户的真实口碑
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "北京 · 王女士",
                    comment: "蔬菜真的很新鲜！下单第二天就到了，叶菜还带着露水，比超市新鲜太多了。农户直供，价格也实惠。",
                    stars: 5,
                    avatar: "王",
                    date: "2024年11月",
                  },
                  {
                    name: "上海 · 陈先生",
                    comment: "五常大米比之前买的任何米都好吃，香味浓郁，煮出来的饭粒粒饱满。以后就认这家了！",
                    stars: 5,
                    avatar: "陈",
                    date: "2024年10月",
                  },
                  {
                    name: "成都 · 李小姐",
                    comment: "猕猴桃甜度恰到好处，包装很用心，每个都有独立防护。退换货也很方便，客服态度特别好。",
                    stars: 5,
                    avatar: "李",
                    date: "2024年11月",
                  },
                ].map((review, i) => (
                  <div key={i} className="bg-card rounded-2xl p-6 border border-border text-left">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                        style={{ background: "var(--secondary)", color: "var(--primary)", fontFamily: "'Noto Serif SC', serif" }}>
                        {review.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                          {review.name}
                        </p>
                        <div className="flex items-center gap-0.5">
                          {Array(review.stars).fill(0).map((_, j) => (
                            <span key={j} style={{ color: "#d4860a", fontSize: "0.75rem" }}>★</span>
                          ))}
                        </div>
                      </div>
                      <span className="ml-auto text-xs" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--muted-foreground)" }}>
                        {review.date}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--foreground)" }}>
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {currentPage === "products" && (
        <>
          <div className="py-10 bg-white border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="mb-1" style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700, fontSize: "2rem" }}>
                农产品商城
              </h1>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--muted-foreground)" }}>
                产地直供 · 新鲜直达 · 支持农户
              </p>
            </div>
          </div>
          <Categories onSelect={setSelectedCategory} selected={selectedCategory} />
          <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="mb-6 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--muted-foreground)" }}>
                共找到 <span style={{ color: "var(--primary)", fontWeight: 600 }}>{filteredProducts.length}</span> 件商品
              </p>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--muted-foreground)" }}>
                  <p className="text-4xl mb-4">🌱</p>
                  <p>该分类暂无商品，敬请期待</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {currentPage === "farmers" && (
        <>
          <div className="py-10 bg-white border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="mb-1" style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700, fontSize: "2rem" }}>
                农户故事
              </h1>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--muted-foreground)" }}>
                每一份耕耘，都值得被看见
              </p>
            </div>
          </div>
          <FarmerStories />
        </>
      )}

      {(currentPage === "origin" || currentPage === "about") && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="text-6xl mb-6">🌾</div>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700, fontSize: "2rem", marginBottom: "1rem" }}>
              {currentPage === "origin" ? "产地直供体系" : "关于田间直送"}
            </h2>
            <p className="text-lg leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--muted-foreground)", maxWidth: "600px", margin: "0 auto" }}>
              {currentPage === "origin"
                ? "我们深入全国各大农业产区，与200+家庭农场签订长期合作协议，建立严格的产品标准和质量追溯体系，确保每一件农产品都经得起检验。"
                : "田间直送成立于2018年，是一家专注于农产品产地直供的电商平台。我们的使命是帮助农民增收，让消费者吃到真正新鲜、健康的食材。"}
            </p>
            <button
              onClick={() => setCurrentPage("products")}
              className="mt-8 px-8 py-4 rounded-xl font-semibold transition-all hover:opacity-90"
              style={{ background: "var(--primary)", color: "#fff", fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              去选购农产品
            </button>
          </div>
        </section>
      )}

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQty}
      />
    </div>
  );
}
