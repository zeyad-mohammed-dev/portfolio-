import { ExternalLink, Github, Server, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "E-Commerce Backend API",
    description: "Production-ready NestJS e-commerce backend with modular architecture and clean design patterns.",
    techStack: ["NestJS", "TypeScript", "MongoDB", "Mongoose"],
    highlights: [
      "Modular NestJS architecture with clean design patterns",
      "JWT authentication + OTP email confirmation",
      "Role-based authorization (User / Admin)",
    ],
    githubUrl: "https://github.com/zeyad-mohammed-dev/nestjs-ecommerce-api",
    featured: true,
  },
  {
    title: "Social Media Backend API",
    description: "Full-featured social media REST API with posts, comments, likes, and friend system.",
    techStack: ["Node.js", "TypeScript", "Express", "AWS S3"],
    highlights: [
      "Posts, comments, likes, and friend system",
      "AWS S3 media uploads with pre-signed URLs",
      "Centralized error handling & validation",
    ],
    githubUrl: "https://github.com/zeyad-mohammed-dev/SocialApp",
    featured: true,
  },
  {
    title: "Saraha - Anonymous Messaging",
    description: "Secure anonymous messaging platform with JWT + OTP authentication and Cloudinary file uploads.",
    techStack: ["Node.js", "Express", "MongoDB", "Cloudinary"],
    highlights: [
      "Anonymous message delivery system",
      "JWT + OTP authentication",
      "Account freeze & soft delete features",
    ],
    githubUrl: "https://github.com/zeyad-mohammed-dev/Saraha-App",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="section-container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Backend applications I've built to solve real-world problems
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className={`glass-card p-8 relative overflow-hidden ${project.featured ? 'border-primary/30' : ''}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {project.featured && (
                <div className="absolute top-0 right-0 bg-primary text-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Featured
                </div>
              )}
              
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-heading mb-3">{project.title}</h3>
                  <p className="text-paragraph text-lg mb-6">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm font-mono bg-primary/10 text-primary rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        {index === 0 && <Server className="w-4 h-4 text-primary flex-shrink-0" />}
                        {index === 1 && <Users className="w-4 h-4 text-primary flex-shrink-0" />}
                        {index === 2 && <Shield className="w-4 h-4 text-primary flex-shrink-0" />}
                        <span className="text-paragraph">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-4">
                    <Button variant="hero" size="default" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Code Preview Visual */}
                <div className="lg:w-72 flex-shrink-0">
                  <div className="bg-background rounded-lg border border-border p-4 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <code className="text-muted-foreground">
                      <span className="text-accent">const</span> app = <span className="text-primary">express</span>();<br/>
                      <br/>
                      app.<span className="text-primary">post</span>(<span className="text-green-400">'/message'</span>,<br/>
                      &nbsp;&nbsp;asyncHandler);<br/>
                      <br/>
                      app.<span className="text-primary">listen</span>(<span className="text-accent">3000</span>);
                    </code>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
