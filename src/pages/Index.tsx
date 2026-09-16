import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, BriefcaseBusiness, CheckCircle2, Code2, Database, Download,
  Github, GraduationCap, Layers3, Linkedin, Mail, MapPin, Server,
  ShieldCheck, ExternalLink,
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import Navbar, { type Language, type Theme } from "@/components/portfolio/Navbar";

type Project = {
  title: string;
  featured?: boolean;
  problem: string;
  role: string;
  solution: string;
  tech: string[];
  result: string;
  github: string;
};

const projectData: Project[] = [
  {
    title: "NEW — Personal Habit & Goal Tracker",
    featured: true,
    problem: "Managing goals, habits, study sessions, bookmarks, and daily tasks across separate tools created distraction and friction.",
    role: "Solo developer — product idea, backend, frontend integration, and desktop packaging.",
    solution: "Built an offline-first desktop application with REST APIs, habit tracking, 10-day goals, Pomodoro study tracking, OOG focus, bookmarks, and JSON backup/import.",
    tech: ["Electron", "Angular", "Node.js", "Express.js", "MongoDB", "Joi"],
    result: "An installable daily workflow that keeps key productivity tools in one place without requiring a permanent online connection.",
    github: "https://github.com/zeyad-mohammed-dev/NEW",
  },
  {
    title: "Taghreed — Arabic RTL E-Commerce",
    problem: "Build a complete Arabic-first shopping experience with customer and admin workflows.",
    role: "Full-stack project developer with a strong backend focus.",
    solution: "Implemented product browsing, cart, checkout, orders, wishlist, reviews, authentication, and admin workflows with a modular REST API.",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    result: "A full-stack e-commerce workflow with backend structure designed around reusable modules and protected APIs.",
    github: "https://github.com/zeyad-mohammed-dev/taghreed-ecommerce",
  },
  {
    title: "Washweshny — Anonymous Messaging Backend",
    problem: "Provide anonymous messaging while keeping account access, verification, and protected APIs secure.",
    role: "Backend developer.",
    solution: "Built a Node.js/Express backend with JWT + OTP authentication, authorization, validation, media uploads, centralized error handling, and operational safeguards.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Joi", "Cloudinary"],
    result: "A structured backend API with protected workflows, account management, and media support.",
    github: "https://github.com/zeyad-mohammed-dev/Washweshny-App",
  },
];

const serviceData = [
  { icon: Server, title: "REST API Development", text: "Design and build structured Node.js/Express APIs for web and application backends." },
  { icon: ShieldCheck, title: "Authentication & Security", text: "Implement authentication, authorization, validation, and practical API security patterns." },
  { icon: Database, title: "Database Integration", text: "Connect backend services with MongoDB or MySQL using clear data models and maintainable structure." },
  { icon: Layers3, title: "Backend Integration", text: "Connect frontend applications, services, storage, and backend workflows into a coherent system." },
];

const skills = {
  Backend: ["Node.js", "Express.js", "NestJS", "REST APIs", "JavaScript", "TypeScript"],
  Databases: ["MongoDB", "Mongoose", "MySQL", "Sequelize", "SQL", "NoSQL"],
  Security: ["JWT", "Refresh Tokens", "OTP", "Bcrypt", "Rate Limiting", "CORS"],
  "Dev & Cloud": ["Git", "GitHub", "Docker", "AWS", "AWS S3", "Cloudinary"],
};

const experience = [
  {
    date: "Jun 2025 – Dec 2025",
    title: "Backend Web Development Trainee",
    org: "Route Academy — Cairo, Egypt",
    bullets: [
      "Built server-side applications with Node.js and Express.js using MySQL and MongoDB.",
      "Designed RESTful APIs and applied modular backend design practices.",
      "Implemented authentication, authorization, validation, debugging, and Git/GitHub workflows.",
    ],
  },
  {
    date: "2026 — Completed",
    title: "Full-Stack Development Training",
    org: "National Telecommunication Institute (NTI)",
    bullets: [
      "Completed full-stack training with Taghreed as the graduation project.",
      "Worked across frontend, backend, APIs, authentication, and database-driven application flows.",
      "Certificate pending issuance.",
    ],
  },
  {
    date: "2026 — Ongoing",
    title: "DevOps Engineer Track",
    org: "DEPI — Digital Egypt Pioneers Initiative",
    bullets: [
      "Continuing hands-on learning in Linux, Docker, AWS, and deployment fundamentals.",
      "Expanding understanding from software development through deployment and operations.",
    ],
  },
];

const achievements = [
  { title: "Route Backend Diploma", text: "Back-end (Node JS) diploma — Route IT Training Center, dated 12 Jan 2026.", verified: true, href: "https://drive.google.com/file/d/1rt1da-XRRQkGCBpxUJ7ncGWUiRhGUp1l/view?usp=drive_link" },
  { title: "NTI Full-Stack Completion", text: "Completed in 2026 with Taghreed as the graduation project; certificate pending issuance.", verified: false },
  { title: "DEPI DevOps Track", text: "Ongoing development in Linux, Docker, AWS, and deployment fundamentals.", verified: false },
];

const copy = {
  en: {
    homeGreeting: "Hi, I’m Zeyad Mohammed",
    role: "Backend Developer",
    hero: "Turning ideas into reliable, scalable, and secure systems that solve real problems.",
    viewWork: "View My Work", contact: "Contact Me",
    aboutEyebrow: "01 / About", aboutTitle: "A practical, problem-solving developer", aboutIntro: "I’m a Computer Science student and Backend Developer focused on Node.js and Express.js. I enjoy taking a real problem, understanding its root cause and constraints, and turning it into a working system with clear structure, practical implementation, and reliable backend foundations. My strongest focus is REST APIs, authentication and authorization, database integration, modular backend design, and debugging.",
    aboutSecond: "My approach is centered on reliability, scalability, and security. I have built projects including NEW, an offline-first productivity desktop application, Taghreed, an Arabic RTL e-commerce platform, and Washweshny, a secure anonymous messaging backend. In 2026, I completed full-stack training with NTI and am continuing my DevOps development through DEPI in Linux, Docker, AWS, and deployment. I focus on delivering practical, documented results that solve the problem and can be maintained and extended.",
    resume: "Download Resume", educationEyebrow: "02 / Education", educationTitle: "Education", skillsEyebrow: "03 / Skills", skillsTitle: "Technical toolkit", experienceEyebrow: "04 / Experience", experienceTitle: "Experience & professional development", servicesEyebrow: "05 / Services", servicesTitle: "How I can help", projectsEyebrow: "06 / Projects", projectsTitle: "Projects", achievementsEyebrow: "07 / Achievements", achievementsTitle: "Milestones & certification", contactEyebrow: "08 / Contact", contactTitle: "Let’s talk about the problem you need solved", contactText: "Email is the fastest way to reach me. You can also review my code and professional profile before we connect.", next: "What happens next?", nextTitle: "Tell me the problem, goal, and constraints.", nextText: "I’ll use that context to understand the scope, suggest a practical backend approach, and define the next step clearly.", start: "Start a conversation", location: "Cairo, Egypt", github: "GitHub", linkedin: "LinkedIn", email: "Email", expected: "Expected 2027 · 4th year", gpa: "GPA: 3.62 / 4.00", institute: "Higher Technological Institute", degree: "Bachelor of Computer Science", routeVerified: "Verified", status: "Status", certificate: "View Certificate", problem: "Problem", roleLabel: "Your Role", solution: "Solution", result: "Result", tech: "Tools / Tech", featured: "Featured", viewCode: "View Code", footer: "Built with React",
  },
  ar: {
    homeGreeting: "مرحبًا، أنا زياد محمد",
    role: "Backend Developer",
    hero: "أحوّل الأفكار إلى أنظمة موثوقة وقابلة للتوسع وآمنة تحل مشاكل حقيقية.",
    viewWork: "شوف شغلي", contact: "تواصل معي",
    aboutEyebrow: "01 / نبذة", aboutTitle: "مطور عملي يركز على حل المشكلات", aboutIntro: "أنا طالب علوم حاسب وBackend Developer أركز على Node.js وExpress.js. أحب أخذ المشكلة الحقيقية وفهم سببها الأساسي والقيود الخاصة بها، ثم تحويلها إلى نظام شغال بهيكل واضح وتنفيذ عملي وأساس Backend موثوق. أركز بشكل أساسي على REST APIs والمصادقة والصلاحيات وتكامل قواعد البيانات وتنظيم المشروع وتصحيح الأخطاء.",
    aboutSecond: "منهجي في العمل قائم على الموثوقية وقابلية التوسع والأمان. بنيت مشاريع منها NEW، وهو تطبيق Desktop للإنتاجية يعمل بأسلوب Offline-first، وTaghreed، وهو متجر إلكتروني عربي RTL، وWashweshny، وهو Backend للمراسلة المجهولة. في 2026 أكملت تدريب Full-Stack مع NTI، وأواصل حاليًا تطوير مهارات DevOps مع DEPI في Linux وDocker وAWS وعمليات الـ Deployment. هدفي تسليم نتائج عملية وموثقة تحل المشكلة ويمكن صيانتها وتطويرها لاحقًا.",
    resume: "تحميل السيرة الذاتية", educationEyebrow: "02 / التعليم", educationTitle: "التعليم", skillsEyebrow: "03 / المهارات", skillsTitle: "التقنيات والمهارات", experienceEyebrow: "04 / الخبرة", experienceTitle: "الخبرة والتطور المهني", servicesEyebrow: "05 / الخدمات", servicesTitle: "كيف أقدر أساعدك", projectsEyebrow: "06 / المشاريع", projectsTitle: "مشاريع موضحة", achievementsEyebrow: "07 / الإنجازات", achievementsTitle: "الإنجازات والشهادات", contactEyebrow: "08 / التواصل", contactTitle: "خلينا نتكلم عن المشكلة اللي محتاجة حل", contactText: "الإيميل هو أسرع طريقة للتواصل معي، ويمكنك أيضًا مراجعة مشاريعي وحساباتي المهنية قبل التواصل.", next: "ما الخطوة التالية؟", nextTitle: "ابعتلي المشكلة والهدف والقيود الموجودة.", nextText: "سأستخدم التفاصيل لفهم نطاق العمل واقتراح طريقة Backend عملية وتحديد الخطوة التالية بوضوح.", start: "ابدأ محادثة", location: "القاهرة، مصر", github: "GitHub", linkedin: "LinkedIn", email: "البريد الإلكتروني", expected: "متوقع 2027 · السنة الرابعة", gpa: "GPA: 3.62 / 4.00", institute: "المعهد التكنولوجي العالي", degree: "بكالوريوس علوم الحاسب", routeVerified: "موثقة", status: "الحالة", certificate: "عرض الشهادة", problem: "المشكلة", roleLabel: "دوري", solution: "الحل", result: "النتيجة", tech: "التقنيات", featured: "مميز", viewCode: "عرض الكود", footer: "Built with React",
  },
} as const;

const translateProject = (p: Project, lang: Language): Project => {
  if (lang === "en") return p;
  const map: Record<string, Partial<Project>> = {
    "NEW — Personal Habit & Goal Tracker": {
      title: "NEW — تطبيق تنظيم الأهداف والعادات",
      problem: "إدارة الأهداف والعادات وجلسات المذاكرة والروابط والمهام اليومية عبر أدوات منفصلة كانت تسبب تشتتًا واحتكاكًا مستمرًا.",
      role: "مطور منفرد — فكرة المنتج، الـBackend، دمج الـFrontend، وتحويل المشروع إلى Desktop App.",
      solution: "بنيت تطبيق Desktop يعمل بأسلوب Offline-first مع REST APIs وتتبع للعادات وأهداف لمدة 10 أيام وPomodoro وOOG والروابط ونسخ واستيراد البيانات بصيغة JSON.",
      result: "تجربة استخدام يومية قابلة للتثبيت تجمع أدوات الإنتاجية الأساسية في مكان واحد بدون الحاجة لاتصال دائم بالإنترنت.",
    },
    "Taghreed — Arabic RTL E-Commerce": {
      title: "Taghreed — متجر إلكتروني عربي RTL",
      problem: "بناء تجربة شراء عربية متكاملة تشمل مسارات العميل والإدارة.", role: "مطور Full-Stack مع تركيز أساسي على الـBackend.",
      solution: "نفذت تصفح المنتجات والسلة والـCheckout والطلبات والـWishlist والمراجعات والمصادقة ولوحة الإدارة من خلال REST API منظمة.", result: "منظومة تجارة إلكترونية متكاملة بهيكل Backend منظم وواجهات محمية وقابلة لإعادة الاستخدام.",
    },
    "Washweshny — Anonymous Messaging Backend": {
      title: "Washweshny — Backend للمراسلة المجهولة",
      problem: "توفير مراسلة مجهولة مع الحفاظ على أمان الحسابات والتحقق والـAPIs المحمية.", role: "Backend Developer.",
      solution: "بنيت Backend باستخدام Node.js وExpress مع JWT وOTP والصلاحيات والتحقق ورفع الملفات ومعالجة الأخطاء بشكل مركزي وحواجز تشغيلية.", result: "Backend منظم يحتوي على مسارات محمية وإدارة للحسابات ودعم للوسائط.",
    },
  };
  return { ...p, ...(map[p.title] || {}) } as Project;
};

const sectionCopy = {
  en: {
    serviceTexts: serviceData,
    experience: experience,
    skills: skills,
    achievements: achievements,
  },
  ar: {
    serviceTexts: [
      { icon: Server, title: "تطوير REST APIs", text: "تصميم وبناء APIs منظمة باستخدام Node.js وExpress لتطبيقات الويب والـBackend." },
      { icon: ShieldCheck, title: "المصادقة والأمان", text: "تنفيذ المصادقة والصلاحيات والتحقق من البيانات وأنماط أمان عملية للـAPIs." },
      { icon: Database, title: "تكامل قواعد البيانات", text: "ربط خدمات الـBackend مع MongoDB أو MySQL باستخدام نماذج بيانات واضحة وهيكل قابل للصيانة." },
      { icon: Layers3, title: "دمج الـBackend", text: "ربط تطبيقات الـFrontend والخدمات والتخزين ومسارات الـBackend داخل نظام متكامل." },
    ],
    experience: [
      { date: "يونيو 2025 – ديسمبر 2025", title: "متدرب Backend Web Development", org: "Route Academy — القاهرة، مصر", bullets: ["بناء تطبيقات Server-side باستخدام Node.js وExpress مع MySQL وMongoDB.", "تصميم REST APIs وتطبيق مبادئ Modular Backend Design.", "تنفيذ المصادقة والصلاحيات والتحقق وتصحيح الأخطاء والعمل باستخدام Git/GitHub."] },
      { date: "2026 — مكتمل", title: "تدريب Full-Stack Development", org: "المعهد القومي للاتصالات NTI", bullets: ["إكمال تدريب Full-Stack وكان Taghreed مشروع التخرج.", "العمل على Frontend وBackend وAPIs والمصادقة وتدفقات التطبيقات المعتمدة على قواعد البيانات.", "الشهادة قيد الإصدار."] },
      { date: "2026 — مستمر", title: "مسار DevOps Engineer", org: "DEPI — Digital Egypt Pioneers Initiative", bullets: ["مواصلة التعلم العملي في Linux وDocker وAWS وأساسيات الـDeployment.", "توسيع الفهم من تطوير البرمجيات إلى النشر والعمليات."] },
    ],
    skills: { Backend: ["Node.js", "Express.js", "NestJS", "REST APIs", "JavaScript", "TypeScript"], Databases: ["MongoDB", "Mongoose", "MySQL", "Sequelize", "SQL", "NoSQL"], Security: ["JWT", "Refresh Tokens", "OTP", "Bcrypt", "Rate Limiting", "CORS"], "Dev & Cloud": ["Git", "GitHub", "Docker", "AWS", "AWS S3", "Cloudinary"] },
    achievements: [
      { title: "شهادة Route في Backend", text: "دبلومة Back-end (Node JS) من Route IT Training Center بتاريخ 12 يناير 2026.", verified: true, href: "https://drive.google.com/file/d/1rt1da-XRRQkGCBpxUJ7ncGWUiRhGUp1l/view?usp=drive_link" },
      { title: "إتمام تدريب NTI Full-Stack", text: "أكملت التدريب في 2026 وكان Taghreed مشروع التخرج؛ الشهادة قيد الإصدار.", verified: false },
      { title: "مسار DEPI DevOps", text: "تطوير مستمر في Linux وDocker وAWS وأساسيات الـDeployment.", verified: false },
    ],
  },
};

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <motion.div className="mb-10" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="text-primary font-mono text-sm uppercase tracking-[0.25em] mb-3">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-subtitle max-w-3xl !mb-0">{text}</p>}
    </motion.div>
  );
}

export default function Index() {
  const [lang, setLang] = useState<Language>(() => (localStorage.getItem("portfolio-lang") as Language) || "en");
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem("portfolio-theme") as Theme) || "dark");
  const t = copy[lang];
  const localized = sectionCopy[lang];
  const projects = projectData.map(p => translateProject(p, lang));

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("portfolio-lang", lang);
    localStorage.setItem("portfolio-theme", theme);
  }, [lang, theme]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar lang={lang} theme={theme} onLanguageChange={setLang} onThemeChange={setTheme} />

      <main>
        <section id="home" className="hero-section relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 pointer-events-none" />
          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          <div className="section-container relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,.8fr)]">
            <div className="min-w-0">
              <p className="text-primary font-mono text-base md:text-lg mb-4">{lang === "en" ? "Hi, I'm" : "مرحبًا، أنا"}</p>
              <h1 className="hero-title font-bold leading-[1.02] tracking-tight mb-4">
                Zeyad Mohammed
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold gradient-text mb-6">{t.role}</h2>
              <p className="max-w-2xl text-base md:text-lg lg:text-xl text-paragraph leading-relaxed">{t.hero}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
                  {t.viewWork} <ArrowRight className="h-5 w-5" />
                </a>
                <a href="mailto:zeyad.mohammed.dev@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 px-6 py-3 font-semibold transition hover:border-primary hover:bg-primary/10">
                  <Mail className="h-5 w-5" /> {t.contact}
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a href="https://github.com/zeyad-mohammed-dev" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/in/zeyad-mohammed-dev" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:zeyad.mohammed.dev@gmail.com" aria-label="Email" className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative hero-photo-wrap">
                <div className="absolute -inset-6 rounded-full bg-primary/10 blur-2xl" />
                <img src={profilePhoto} alt="Zeyad Mohammed" className="relative h-64 w-64 md:h-80 md:w-80 lg:h-[22rem] lg:w-[22rem] rounded-full object-cover border border-primary/30 shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="section-container">
            <SectionTitle eyebrow={t.aboutEyebrow} title={t.aboutTitle} />
            <div className="max-w-4xl space-y-5 text-lg text-paragraph">
              <p>{t.aboutIntro}</p>
              <p>{t.aboutSecond}</p>
            </div>
            <a href="/Zeyad_Mohammed_Backend_Developer_Resume.pdf" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 font-medium hover:border-primary/50 transition">
              <Download className="h-5 w-5 text-primary" /> {t.resume}
            </a>
          </div>
        </section>

        <section id="education" className="py-20 bg-card/20">
          <div className="section-container">
            <SectionTitle eyebrow={t.educationEyebrow} title={t.educationTitle} />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="glass-card p-7">
                <GraduationCap className="h-7 w-7 text-primary mb-4" />
                <h3 className="text-2xl font-semibold">{t.institute}</h3>
                <p className="text-paragraph mt-2">{t.degree}</p>
                <p className="text-paragraph mt-3">{t.expected}</p>
                <p className="text-paragraph mt-3">{t.gpa}</p>
              </div>
              <div className="glass-card p-7 flex flex-col justify-between">
                <div>
                  <Code2 className="h-7 w-7 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold">{lang === "en" ? "Current Direction" : "المسار الحالي"}</h3>
                  <p className="text-paragraph mt-3">{lang === "en" ? "Backend development with expanding full-stack and deployment knowledge." : "تطوير Backend مع توسيع المعرفة بالـFull-Stack والـDeployment."}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-primary"><span className="chip">Node.js</span><span className="chip">Angular</span><span className="chip">Docker</span><span className="chip">AWS</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="section-container">
            <SectionTitle eyebrow={t.skillsEyebrow} title={t.skillsTitle} text={lang === "en" ? "Technologies I use in current projects and areas I’m actively developing." : "تقنيات أستخدمها حاليًا ومجالات أواصل تطويرها."} />
            <div className="grid gap-6 md:grid-cols-2">
              {Object.entries(localized.skills).map(([name, items]) => <div key={name} className="glass-card p-6"><h3 className="text-xl font-semibold mb-5">{name}</h3><div className="flex flex-wrap gap-2">{items.map(x => <span key={x} className="chip">{x}</span>)}</div></div>)}
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-card/20">
          <div className="section-container">
            <SectionTitle eyebrow={t.experienceEyebrow} title={t.experienceTitle} text={lang === "en" ? "Evidence-based experience from training and ongoing professional development." : "خبرة مبنية على التدريب والتطبيق والتطور المهني المستمر."} />
            <div className="space-y-5">
              {localized.experience.map(item => <div key={item.title} className="glass-card p-6 md:p-8"><div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4"><div><p className="text-primary font-mono text-sm">{item.date}</p><h3 className="text-2xl font-semibold mt-1">{item.title}</h3><p className="text-paragraph mt-1">{item.org}</p></div><BriefcaseBusiness className="h-7 w-7 text-primary"/></div><ul className="mt-5 space-y-2 text-paragraph">{item.bullets.map(b => <li key={b} className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5"/>{b}</li>)}</ul></div>)}
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="section-container">
            <SectionTitle eyebrow={t.servicesEyebrow} title={t.servicesTitle} text={lang === "en" ? "Client-facing services translated from my actual skills and project experience." : "خدمات واضحة مبنية على مهاراتي وتجربتي الفعلية في المشاريع."} />
            <div className="grid gap-6 md:grid-cols-2">
              {localized.serviceTexts.map(({ icon: Icon, title, text }) => <div key={title} className="glass-card p-6 hover:border-primary/40 transition"><Icon className="h-7 w-7 text-primary mb-4"/><h3 className="text-xl font-semibold mb-2">{title}</h3><p className="text-paragraph">{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-card/20">
          <div className="section-container">
            <SectionTitle eyebrow={t.projectsEyebrow} title={t.projectsTitle} text={t.projectsText} />
            <div className="space-y-6">
              {projects.map(p => <article key={p.title} className={`glass-card p-7 md:p-8 ${p.featured ? "border-primary/40 shadow-lg shadow-primary/5" : ""}`}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div><div className="flex flex-wrap items-center gap-3"><h3 className="text-2xl font-semibold">{p.title}</h3>{p.featured && <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{t.featured}</span>}</div><p className="text-paragraph mt-3 max-w-3xl">{p.problem}</p></div>
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-medium hover:border-primary/50 transition"><Github className="h-4 w-4"/> {t.viewCode}</a>
                </div>
                <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {[[t.problem, p.problem], [t.roleLabel, p.role], [t.solution, p.solution], [t.result, p.result]].map(([k,v]) => <div key={k} className="rounded-xl border border-border/70 bg-background/60 p-5"><p className="text-xs font-mono uppercase tracking-widest text-primary">{k}</p><p className="mt-2 text-sm text-paragraph">{v}</p></div>)}
                </div>
                <div className="mt-6"><p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{t.tech}</p><div className="flex flex-wrap gap-2">{p.tech.map(x => <span key={x} className="chip">{x}</span>)}</div></div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="achievements" className="py-20">
          <div className="section-container">
            <SectionTitle eyebrow={t.achievementsEyebrow} title={t.achievementsTitle} text={lang === "en" ? "Verified credentials are separated from completed learning that is still awaiting formal certification." : "أفصل بين الشهادات الموثقة والتدريب المكتمل الذي ما زالت شهادته قيد الإصدار."} />
            <div className="grid gap-6 md:grid-cols-3">
              {localized.achievements.map(a => <div key={a.title} className="glass-card p-6"><div className="flex items-center gap-2 mb-4">{a.verified ? <CheckCircle2 className="h-6 w-6 text-primary"/> : <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/30"><span className="h-2 w-2 rounded-full bg-primary"/></span>}<span className="text-sm font-mono text-primary">{a.verified ? t.routeVerified : t.status}</span></div><h3 className="text-xl font-semibold">{a.title}</h3><p className="mt-3 text-paragraph">{a.text}</p>{"href" in a && a.href && <a href={a.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{t.certificate} <ExternalLink className="h-4 w-4" /></a>}</div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-card/20">
          <div className="section-container">
            <SectionTitle eyebrow={t.contactEyebrow} title={t.contactTitle} text={t.contactText} />
            <div className="grid gap-6 lg:grid-cols-[1fr_.8fr]">
              <div className="glass-card p-8"><div className="space-y-5">
                <a href="mailto:zeyad.mohammed.dev@gmail.com" className="flex items-center gap-4"><Mail className="h-6 w-6 text-primary"/><div><p className="text-sm text-muted-foreground">{t.email}</p><p className="font-medium break-all">zeyad.mohammed.dev@gmail.com</p></div></a>
                <a href="https://linkedin.com/in/zeyad-mohammed-dev" target="_blank" rel="noreferrer" className="flex items-center gap-4"><Linkedin className="h-6 w-6 text-primary"/><div><p className="text-sm text-muted-foreground">{t.linkedin}</p><p className="font-medium break-all">linkedin.com/in/zeyad-mohammed-dev</p></div></a>
                <a href="https://github.com/zeyad-mohammed-dev" target="_blank" rel="noreferrer" className="flex items-center gap-4"><Github className="h-6 w-6 text-primary"/><div><p className="text-sm text-muted-foreground">{t.github}</p><p className="font-medium break-all">github.com/zeyad-mohammed-dev</p></div></a>
                <div className="flex items-center gap-4"><MapPin className="h-6 w-6 text-primary"/><div><p className="text-sm text-muted-foreground">{lang === "en" ? "Location" : "الموقع"}</p><p className="font-medium">{t.location}</p></div></div>
              </div></div>
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-8"><p className="font-mono text-primary text-sm">{t.next}</p><h3 className="text-2xl font-semibold mt-3">{t.nextTitle}</h3><p className="text-paragraph mt-4">{t.nextText}</p><a href="mailto:zeyad.mohammed.dev@gmail.com" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground">{t.start} <ArrowRight className="h-5 w-5"/></a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-8">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p><span className="text-primary font-mono">&lt;z-dev/&gt;</span> · Zeyad Mohammed</p>
          <div className="flex items-center gap-4"><a href="https://github.com/zeyad-mohammed-dev" target="_blank" rel="noreferrer" className="hover:text-primary"><Github className="h-5 w-5"/></a><a href="https://linkedin.com/in/zeyad-mohammed-dev" target="_blank" rel="noreferrer" className="hover:text-primary"><Linkedin className="h-5 w-5"/></a><a href="mailto:zeyad.mohammed.dev@gmail.com" className="hover:text-primary"><Mail className="h-5 w-5"/></a></div>
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
