import {
  Github,
  Linkedin,
  Mail,
  Send,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  const whatsappMessage = "Hi Zeyad, I saw your portfolio!";

  const whatsappUrl = `https://wa.me/201016994927?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const contactLinks = [
    {
      icon: Phone,
      label: "Phone",
      value: "+20 101 699 4927",
      href: "tel:+201016994927",
    },
    {
      icon: MessageCircle,
      label: "Phone / WhatsApp",
      value: "+20 101 699 4927",
      href: whatsappUrl,
    },
    {
      icon: Mail,
      label: "Email",
      value: "zeyad.mohammed.dev@gmail.com",
      href: "mailto:zeyad.mohammed.dev@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "zeyad-mohammed-dev",
      href: "https://github.com/zeyad-mohammed-dev",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "zeyad-mohammed-dev",
      href: "https://linkedin.com/in/zeyad-mohammed-dev",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="section-container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Open to collaboration, open-source projects, and backend development opportunities
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold text-heading mb-6">Let's Connect</h3>
                <p className="text-paragraph mb-8">
                  Whether you have a project in mind, want to collaborate on open-source, 
                  or just want to say hi — I'd love to hear from you!
                </p>
                
                <div className="space-y-6">
                  {contactLinks.map((link) => (
                    <a 
                      key={link.label}
                      href={link.href}
                      target={
  link.href.startsWith("tel:") || link.href.startsWith("mailto:")
    ? undefined
    : "_blank"
}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{link.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* CTA Card */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-border/50">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-heading text-center mb-4">
                    Ready to collaborate?
                  </h4>
                  <p className="text-paragraph text-center mb-6">
                    Looking for a backend developer to join your team or work on your next project.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <a href="mailto:zeyad.mohammed.dev@gmail.com">
                        <Mail className="w-5 h-5" />
                        Send Email
                      </a>
                    </Button>
                    <Button variant="heroOutline" size="lg" className="w-full" asChild>
                      <a href="https://github.com/zeyad-mohammed-dev" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                        View GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
