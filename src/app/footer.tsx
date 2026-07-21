export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07130A] px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Nosok VPN. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#story" className="transition hover:text-[#96EA0D]">
            О VPN
          </a>
          <a href="#features" className="transition hover:text-[#96EA0D]">
            Возможности
          </a>
          <a href="#pricing" className="transition hover:text-[#96EA0D]">
            Тарифы
          </a>
        </div>
      </div>
    </footer>
  );
}
