const socials = [
  { label: 'github', href: 'https://github.com/silvestrev' },
  { label: 'linkedin', href: 'https://linkedin.com/in/victorsfo' },
  { label: 'instagram', href: 'https://instagram.com/vsilvestreh' },
];

export const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-2xl px-6">
      <div className="flex items-center justify-between gap-4 border-t border-white/10 py-8">
        <p className="font-mono text-xs text-white/40">
          <span className="sm:hidden">© {new Date().getFullYear()}</span>
          <span className="hidden sm:inline">© {new Date().getFullYear()} - Victor Silvestre</span>
        </p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest text-white/40 transition-colors hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
