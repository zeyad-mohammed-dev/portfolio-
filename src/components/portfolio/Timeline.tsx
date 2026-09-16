import { Code, Palette, Server, Rocket } from "lucide-react";
import { motion } from "framer-motion";
interface TimelineEvent {
  year: string;
  title: string;
  description: string[];
  icon: React.ElementType;
  color: "primary" | "accent";
}
const timelineEvents: TimelineEvent[] = [{
  year: "2023",
  title: "Started Programming",
  description: ["Began programming journey", "Practiced problem solving with C++", "Built strong logic & algorithmic thinking", "Learned Object-Oriented Programming with Python"],
  icon: Code,
  color: "accent"
}, {
  year: "2024",
  title: "Explored Web Development",
  description: ["Learned frontend basics (HTML & CSS)", "Discovered passion for backend development"],
  icon: Palette,
  color: "primary"
}, {
  year: "2025",
  title: "Backend Mastery",
  description: ["Focused on backend development", "Built production-ready APIs with Node.js & NestJS", "Applied clean architecture & security best practices", "Mastered MongoDB, MySQL & cloud file storage"],
  icon: Server,
  color: "accent"
}];
const Timeline = () => {
  return <section id="journey" className="py-24 relative">
      <div className="section-container">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <h2 className="section-title">Development Journey</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            My path from beginner to backend developer
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <motion.div className="absolute left-8 md:left-1/2 top-0 bottom-16 w-px bg-gradient-to-b from-primary via-accent to-primary" initial={{
          scaleY: 0
        }} whileInView={{
          scaleY: 1
        }} viewport={{
          once: true,
          margin: "-80px"
        }} transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1]
        }} style={{
          transformOrigin: "top"
        }} />
          
          {timelineEvents.map((event, index) => <motion.div key={event.year} className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`} initial={{
          opacity: 0,
          x: index % 2 === 0 ? 30 : -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-80px"
        }} transition={{
          duration: 0.9,
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1]
        }}>
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className={`glass-card p-6 ml-16 md:ml-0 hover:border-${event.color}/50 transition-all duration-300`}>
                  <span className={`inline-block px-3 py-1 text-sm font-mono ${event.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'} rounded-md mb-3`}>
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold text-heading mb-3">{event.title}</h3>
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {event.description.map((item, i) => <li key={i} className="text-paragraph flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${event.color === 'primary' ? 'bg-primary' : 'bg-accent'} ${index % 2 === 0 ? 'md:order-2' : ''}`} />
                        {item}
                      </li>)}
                  </ul>
                </div>
              </div>
              
              {/* Icon */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex-shrink-0">
                <div className={`w-10 h-10 rounded-full ${event.color === 'primary' ? 'bg-primary' : 'bg-accent'} flex items-center justify-center shadow-lg`}>
                  <event.icon className="w-5 h-5 text-foreground" />
                </div>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>)}
          
          {/* Future indicator */}
          <motion.div className="relative flex flex-col items-center gap-3" initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8,
          delay: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg animate-pulse-glow">
              <Rocket className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-muted-foreground font-mono whitespace-nowrap text-center">More to come...</span>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Timeline;