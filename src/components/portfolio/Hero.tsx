import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-mono text-sm md:text-base mb-4 opacity-0 animate-fade-in-up">
              Hi, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-heading mb-4 opacity-0 animate-fade-in-up animation-delay-100">
              Zeyad Mohammed
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold gradient-text mb-6 opacity-0 animate-fade-in-up animation-delay-200">
              Backend Developer
            </h2>
            <p className="text-paragraph text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in-up animation-delay-300">
              Building scalable & secure backend systems with Node.js, NestJS, and TypeScript.
              Focused on clean architecture and modular design.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-400">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-500">
              <a 
                href="https://github.com/zeyad-mohammed-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="https://linkedin.com/in/zeyad-mohammed-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="mailto:zeyad.mohammed.dev@gmail.com"
                className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in-up animation-delay-300">
            <div className="relative animate-float-gentle">
              {/* Animated gradient glow background */}
              <div 
                className="absolute -inset-1 rounded-full blur-xl opacity-40 animate-pulse-glow"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                  backgroundSize: '200% 200%',
                  animation: 'glow-rotate 6s ease infinite, pulse-glow 3s ease-in-out infinite',
                }}
              />
              {/* Outer glow ring */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary/50 via-accent/30 to-primary/50 opacity-60 blur-sm" />
              {/* Image container with hover effect */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 transition-all duration-500 ease-out hover:scale-[1.03] hover:border-primary/50 group">
                <img 
                  src={profilePhoto} 
                  alt="Zeyad Mohammed - Backend Developer" 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
