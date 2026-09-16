import { Code2, Database, Server, Terminal, Download } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    { icon: Server, label: "Scalable Systems" },
    { icon: Database, label: "Database Design" },
    { icon: Code2, label: "Clean Architecture" },
    { icon: Terminal, label: "REST APIs" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="section-container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Backend Developer focused on building scalable & secure backend systems
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-paragraph text-lg leading-relaxed">
              I'm a Computer Science student from Sohag, Egypt 🇪🇬 with a strong focus on 
              backend development and API architecture. Building real-world backend systems 
              using Node.js, Express, and NestJS with TypeScript.
            </p>
            <p className="text-paragraph text-lg leading-relaxed">
              Strong focus on security, authentication, and scalable project structure. 
              Open to collaborating on backend-focused open source projects.
            </p>
            
            {/* Download Resume CTA */}
            <div className="mt-8 flex flex-col items-start gap-2">
              <a 
                href="/Zeyad_Mohammed_Backend_Developer_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                download="Zeyad_Mohammed_Backend_Developer_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 text-foreground font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5 text-primary" />
                Download Resume
              </a>
              <span className="text-muted-foreground text-sm">PDF • Updated 2025</span>
            </div>
          </motion.div>
          
          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div 
                key={item.label}
                className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-foreground font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
