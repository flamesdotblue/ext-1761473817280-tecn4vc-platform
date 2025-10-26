function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Hello World. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#home" className="text-neutral-600 hover:text-neutral-900">Home</a>
          <a href="#features" className="text-neutral-600 hover:text-neutral-900">Features</a>
          <a href="#contact" className="text-neutral-600 hover:text-neutral-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
