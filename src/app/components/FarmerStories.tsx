import { Quote } from "lucide-react";

const farmers = [
  {
    id: 1,
    name: "李建国",
    location: "云南省大理州",
    specialty: "有机蔬菜种植",
    avatar: "https://images.unsplash.com/photo-1708798534031-3711ec8cc16e?w=120&h=120&fit=crop&auto=format",
    story: "种了三十年地，第一次感受到直接卖给城里人的踏实。去年通过平台卖出了8万斤蔬菜，收入比以前翻了一倍。",
    income: "+120%",
    years: 30,
    products: ["白菜", "萝卜", "土豆"],
  },
  {
    id: 2,
    name: "张秀兰",
    location: "四川省成都市蒲江县",
    specialty: "生态水果种植",
    avatar: "https://images.unsplash.com/photo-1779769600391-8fc70595910f?w=120&h=120&fit=crop&auto=format",
    story: "猕猴桃成熟的时候最怕卖不出去。自从加入田间直送，每年提前两个月就被预定完了，再也不用担心烂在地里。",
    income: "+85%",
    years: 15,
    products: ["猕猴桃", "草莓", "柑橘"],
  },
  {
    id: 3,
    name: "王大山",
    location: "黑龙江省五常市",
    specialty: "优质大米种植",
    avatar: "https://images.unsplash.com/photo-1683506684881-efbb5203eacf?w=120&h=120&fit=crop&auto=format",
    story: "五常大米名气大，但以前被中间商压价。现在直接对接消费者，五常稻花香卖到了应有的价格，儿子也愿意回来一起种地了。",
    income: "+95%",
    years: 22,
    products: ["五常大米", "粳米", "糯米"],
  },
];

export function FarmerStories() {
  return (
    <section className="py-20" style={{ background: "var(--secondary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs mb-4"
            style={{ background: "var(--primary)", color: "#fff", fontFamily: "'Noto Sans SC', sans-serif" }}>
            🌱 农户故事
          </span>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--foreground)" }}>
            他们的笑容，是我们最大的动力
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--muted-foreground)", lineHeight: 1.8 }}>
            每一位农户背后，都有一段奋斗的故事。我们相信，帮助农民增收，就是帮助每个家庭更幸福。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {farmers.map((farmer) => (
            <div key={farmer.id} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={farmer.avatar}
                  alt={farmer.name}
                  className="w-16 h-16 rounded-full object-cover border-2 flex-shrink-0"
                  style={{ borderColor: "var(--primary)" }}
                />
                <div>
                  <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, fontSize: "1.1rem" }}>
                    {farmer.name}
                  </h3>
                  <p className="text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--muted-foreground)" }}>
                    {farmer.location}
                  </p>
                  <p className="text-xs mt-0.5" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--primary)", fontWeight: 500 }}>
                    {farmer.specialty} · 从业{farmer.years}年
                  </p>
                </div>
              </div>

              <div className="relative mb-5">
                <Quote className="w-6 h-6 absolute -top-1 -left-1 opacity-20" style={{ color: "var(--primary)" }} />
                <p className="pl-5 text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--foreground)" }}>
                  {farmer.story}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="text-xs text-muted-foreground mb-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                    主营产品
                  </div>
                  <div className="flex gap-1 flex-wrap">
                    {farmer.products.map((p) => (
                      <span key={p} className="px-2 py-0.5 rounded-full text-xs"
                        style={{ background: "var(--secondary)", color: "var(--primary)", fontFamily: "'Noto Sans SC', sans-serif" }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>收入增幅</div>
                  <div style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700, fontSize: "1.5rem", color: "#3a6b1e" }}>
                    {farmer.income}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
