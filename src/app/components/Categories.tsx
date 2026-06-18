interface CategoriesProps {
  onSelect: (category: string) => void;
  selected: string;
}

const categories = [
  { id: "all", label: "全部", icon: "🛒" },
  { id: "vegetables", label: "时令蔬菜", icon: "🥬" },
  { id: "fruits", label: "新鲜水果", icon: "🍎" },
  { id: "grains", label: "粮油杂粮", icon: "🌾" },
  { id: "eggs", label: "蛋禽肉类", icon: "🥚" },
  { id: "mushrooms", label: "菌菇干货", icon: "🍄" },
  { id: "honey", label: "蜂蜜特产", icon: "🍯" },
];

export function Categories({ onSelect, selected }: CategoriesProps) {
  return (
    <section className="py-10 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selected === cat.id
                  ? "shadow-md scale-105"
                  : "hover:bg-secondary"
              }`}
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                background: selected === cat.id ? "var(--primary)" : "var(--secondary)",
                color: selected === cat.id ? "#fff" : "var(--foreground)",
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
