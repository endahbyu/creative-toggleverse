
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Code, PenTool } from "lucide-react";

// Portfolio projects data
const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    description: "Complete brand identity design for a tech startup",
    category: "Graphic Design",
    icon: PenTool,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "Full-stack e-commerce platform with custom admin dashboard",
    category: "Web Development",
    icon: Code,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Mobile App UI Design",
    description: "User interface design for a fitness tracking mobile app",
    category: "Graphic Design",
    icon: PenTool,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Responsive portfolio website for a photographer",
    category: "Web Development",
    icon: Code,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Social Media Campaign",
    description: "Visual content creation for a product launch campaign",
    category: "Graphic Design",
    icon: PenTool,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "SaaS Dashboard",
    description: "User interface and development for a SaaS analytics dashboard",
    category: "Web Development",
    icon: Code,
    image: "/placeholder.svg",
  },
];

export default function Portfolio() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">
            A showcase of my latest work and projects across web development and
            graphic design. Each project is crafted with attention to detail and a
            focus on user experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="overflow-hidden card-hover h-full glass">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full glass">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    View Project <ArrowUpRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
