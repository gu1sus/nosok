const navItems = [
  { label: "О VPN", href: "#story" },
  { label: "Возможности", href: "#features" },
  { label: "Тарифы", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07130A]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#hero" className="text-sm font-semibold tracking-[0.35em] text-white uppercase">
          Nosok
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-[#96EA0D]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="inline-flex items-center justify-center rounded-full bg-[#96EA0D] px-5 py-2.5 text-sm font-semibold text-[#07130A] transition hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(150,234,13,0.25)]"
        >
          Скачать
        </a>
      </div>
    </header>
  );
}
