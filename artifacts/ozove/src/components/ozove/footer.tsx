export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-sm">
            <a href="#top" className="font-display text-3xl font-bold tracking-tighter block mb-6">
              ozove
            </a>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed">
              The AI-native production layer for agencies that refuse to cap their own growth.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 font-mono text-xs uppercase tracking-widest">
            <div className="flex flex-col gap-4">
              <div className="text-foreground font-semibold mb-2">Platform</div>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How it works
              </a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                Benefits
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-foreground font-semibold mb-2">Company</div>
              <a href="#results" className="text-muted-foreground hover:text-foreground transition-colors">
                Results
              </a>
              <a href="#fit" className="text-muted-foreground hover:text-foreground transition-colors">
                Fit
              </a>
              <button className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Talent login
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-foreground font-semibold mb-2">Action</div>
              <a href="#cta" className="text-left text-plasma hover:opacity-80 transition-opacity">
                Book a call
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/50 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <div>© 2026 Ozove. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            Brief in today. Production moving tomorrow.
          </div>
        </div>
      </div>
    </footer>
  );
}
