import { Database, Server, Shield, Wrench, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon?: string;
}

interface TechCategory {
  title: string;
  icon: React.ElementType;
  items: TechItem[];
  color: string;
}

const techCategories: TechCategory[] = [
  {
    title: "Backend",
    icon: Server,
    color: "primary",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "NestJS" },
      { name: "TypeScript" },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "accent",
    items: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Sequelize" },
      { name: "Mongoose" },
    ],
  },
  {
    title: "Auth & APIs",
    icon: Shield,
    color: "primary",
    items: [
      { name: "JWT" },
      { name: "OTP Auth" },
      { name: "RBAC" },
      { name: "OpenAPI" },
      { name: "Postman" },
    ],
  },
  {
    title: "Dev Tools",
    icon: Wrench,
    color: "accent",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "NPM" },
      { name: "VS Code" },
      { name: "GitHub Copilot" },
      { name: "ChatGPT" },
    ],
  },
  {
    title: "Cloud & Storage",
    icon: BookOpen,
    color: "primary",
    items: [
      { name: "AWS S3" },
      { name: "Cloudinary" },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 relative">
      <div className="section-container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Technologies and tools I use to build scalable backend applications
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              className={`glass-card p-6 hover:border-${category.color}/50 transition-all duration-300 hover:-translate-y-1 ${
                categoryIndex === techCategories.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center`}>
                  <category.icon className={`w-5 h-5 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-xl font-semibold text-heading">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span 
                    key={item.name}
                    className="px-3 py-1.5 text-sm font-medium bg-secondary/50 text-foreground rounded-lg border border-border/50 hover:border-primary/30 hover:bg-secondary transition-colors"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
