import { Truck, ShieldCheck, Leaf, Users } from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "产地直供",
    desc: "与全国200+家庭农场直接合作，绕过中间商，让农民获得公平收益。",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "品质保证",
    desc: "每批产品经过严格品检，有机认证、无公害检测全程可溯源。",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "冷链配送",
    desc: "全程2-8°C冷链保温，24小时内发货，确保新鲜送达您手中。",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "助农公益",
    desc: "每笔订单的1%捐助农村教育基金，购买即公益，爱心传递。",
  },
];

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ background: "var(--secondary)", color: "var(--primary)" }}
              >
                {f.icon}
              </div>
              <h3 className="mb-2" style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600 }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--muted-foreground)" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
