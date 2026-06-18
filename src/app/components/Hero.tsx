interface HeroProps {
  onShopNow: () => void;
}

export function Hero({ onShopNow }: HeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1734261781035-36bc9d35437a?w=1600&h=900&fit=crop&auto=format')`,
        }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(30,42,20,0.82) 0%, rgba(30,42,20,0.45) 60%, transparent 100%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{ background: "rgba(212,134,10,0.9)", color: "#fff", fontFamily: "'Noto Sans SC', sans-serif", letterSpacing: "0.08em" }}>
            🌾 产地直供 · 品质保证
          </span>

          <h1 className="text-white mb-6 leading-tight"
            style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.2 }}>
            来自田间的<br />
            <span style={{ color: "#a8d678" }}>新鲜美味</span>
            <br />直达您的餐桌
          </h1>

          <p className="mb-10 max-w-lg"
            style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.8 }}>
            我们直接与全国 200+ 家庭农场合作，绕过中间商，让农民获得更多收益，让您享受到最新鲜、最实惠的农产品。
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onShopNow}
              className="px-8 py-4 rounded-xl font-semibold text-base transition-all hover:opacity-90 hover:scale-105 shadow-lg"
              style={{ background: "var(--primary)", color: "#fff", fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              立即选购
            </button>
            <button
              className="px-8 py-4 rounded-xl font-semibold text-base transition-all hover:bg-white/20 border"
              style={{ background: "rgba(255,255,255,0.12)", color: "#fff", borderColor: "rgba(255,255,255,0.4)", fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              了解更多
            </button>
          </div>

          <div className="mt-14 flex flex-wrap gap-8">
            {[
              { value: "200+", label: "合作农场" },
              { value: "50万+", label: "服务用户" },
              { value: "98%", label: "好评率" },
              { value: "24h", label: "冷链配送" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.8rem", fontWeight: 700, color: "#a8d678" }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "0.85rem" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
