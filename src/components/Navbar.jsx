function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 border border-white/50 shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-rose-500 to-rose-400" />
              <span className="font-semibold tracking-tight">Hello World</span>
            </div>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-700">
              <a href="#home" className="hover:text-neutral-900 transition-colors">Home</a>
              <a href="#features" className="hover:text-neutral-900 transition-colors">Features</a>
              <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
            </nav>
            <div className="sm:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
