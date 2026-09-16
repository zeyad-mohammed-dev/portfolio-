import { useEffect, useState } from "react";
import { Github, Menu, Moon, Sun, X, Languages } from "lucide-react";

export type Language = "en" | "ar";
export type Theme = "dark" | "light";

type Props = {
  lang: Language;
  theme: Theme;
  onLanguageChange: (lang: Language) => void;
  onThemeChange: (theme: Theme) => void;
};

const navLinks = {
  en: [
    ["Home", "#home"], ["About", "#about"], ["Education", "#education"], ["Skills", "#skills"],
    ["Experience", "#experience"], ["Services", "#services"], ["Projects", "#projects"],
    ["Achievements", "#achievements"], ["Contact", "#contact"],
  ],
  ar: [
    ["الرئيسية", "#home"], ["نبذة", "#about"], ["التعليم", "#education"], ["المهارات", "#skills"],
    ["الخبرة", "#experience"], ["الخدمات", "#services"], ["المشاريع", "#projects"],
    ["الإنجازات", "#achievements"], ["التواصل", "#contact"],
  ],
};

export default function Navbar({ lang, theme, onLanguageChange, onThemeChange }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = navLinks[lang];

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-sm" : "bg-transparent"}`}>
      <div className="section-container">
        <div className="h-16 flex items-center justify-between gap-4">
          <a href="#home" className="font-mono font-semibold text-lg shrink-0">
            <span className="text-primary">&lt;</span>z-dev<span className="text-primary">/&gt;</span>
          </a>

          <div className="hidden lg:flex items-center gap-4 xl:gap-5 min-w-0">
            <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {links.map(([label, href]) => (
                <a key={href} href={href} className="text-xs text-muted-foreground hover:text-foreground transition shrink-0">
                  {label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button onClick={() => onLanguageChange(lang === "en" ? "ar" : "en")} className="icon-btn" aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"} title={lang === "en" ? "العربية" : "English"}>
                <Languages className="h-4 w-4" />
                <span className="text-[10px] font-mono">{lang === "en" ? "AR" : "EN"}</span>
              </button>
              <button onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")} className="icon-btn" aria-label="Toggle theme" title="Toggle theme">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <a href="https://github.com/zeyad-mohammed-dev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs hover:border-primary/40 transition">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          <button className="lg:hidden p-2 rounded-md border border-border" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border/50 py-4 bg-background/95 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-2">
              {links.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-card transition">
                  {label}
                </a>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-border/50 flex gap-2">
              <button onClick={() => onLanguageChange(lang === "en" ? "ar" : "en")} className="control-btn">
                <Languages className="h-4 w-4" /> {lang === "en" ? "العربية" : "English"}
              </button>
              <button onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")} className="control-btn">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} {theme === "dark" ? "Light" : "Dark"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
