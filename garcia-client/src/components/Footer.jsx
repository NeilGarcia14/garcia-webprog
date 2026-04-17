const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8 bg-gradient-to-t from-slate-900 to-zinc-900">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-zinc-400 text-sm">
          © 2026 Neil Chester Mari N. Garcia. All rights reserved.
        </p>
        <p className="mt-2 text-zinc-500 text-xs">
          Built with ❤️ using React & Tailwind CSS
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-zinc-400 hover:text-lime-400 transition-colors">
            GitHub
          </a>
          <a href="#" className="text-zinc-400 hover:text-lime-400 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-zinc-400 hover:text-lime-400 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
