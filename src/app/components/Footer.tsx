import { Leaf, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "#1e2a14", color: "rgba(255,255,255,0.85)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 700, fontSize: "1.2rem", color: "#a8d678" }}>
                田间直送
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(255,255,255,0.6)" }}>
              让农产品从田间直达餐桌，让农民获得公平的收益，让消费者吃上最新鲜的食材。
            </p>
            <div className="flex gap-3">
              {["微博", "微信", "抖音"].map((s) => (
                <span key={s} className="px-3 py-1 rounded-full text-xs cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ background: "rgba(255,255,255,0.1)", fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4" style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, color: "#fff" }}>
              快速导航
            </h4>
            <ul className="flex flex-col gap-2">
              {["首页", "农产品商城", "农户故事", "产地直供", "关于我们", "加入我们"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm hover:text-white transition-colors"
                    style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(255,255,255,0.6)" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4" style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, color: "#fff" }}>
              用户服务
            </h4>
            <ul className="flex flex-col gap-2">
              {["新手指南", "配送说明", "退换货政策", "质量保障", "发票服务", "投诉建议"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm hover:text-white transition-colors"
                    style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(255,255,255,0.6)" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4" style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, color: "#fff" }}>
              联系我们
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(255,255,255,0.6)" }}>
                <Phone className="w-4 h-4 flex-shrink-0" />
                400-888-0618（工作日 9:00-18:00）
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(255,255,255,0.6)" }}>
                <Mail className="w-4 h-4 flex-shrink-0" />
                service@tianjianzhisong.cn
              </div>
              <div className="flex items-start gap-2 text-sm" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(255,255,255,0.6)" }}>
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                北京市朝阳区农业展览馆路 18 号
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs"
          style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(255,255,255,0.4)" }}>
          <span>© 2024 田间直送 版权所有 | 京ICP备2024XXXXXX号</span>
          <span>助农惠民 · 绿色健康 · 诚信经营</span>
        </div>
      </div>
    </footer>
  );
}
