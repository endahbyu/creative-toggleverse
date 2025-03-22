
import { motion } from "framer-motion";
import { Code, Layout, MessageSquare, Palette, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Creating visually appealing designs for brands, marketing materials, and digital products.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive, performant websites and web applications using modern technologies.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and experiences that delight users.",
  },
  {
    icon: MessageSquare,
    title: "Virtual Assistance",
    description:
      "Providing support for business operations, communication, and project management.",
  },
];

const skills = [
  { name: "React.js", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "Graphic Design", level: 88 },
  { name: "TypeScript", level: 82 },
  { name: "Adobe Creative Suite", level: 85 },
  { name: "Figma", level: 90 },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            I'm a passionate graphic designer and web developer with a focus on creating
            beautiful, functional digital experiences. I combine technical skills with
            creative thinking to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Sparkles className="w-6 h-6 mr-2 text-primary" /> My Expertise
            </h3>
            <p className="text-muted-foreground mb-6">
              With over 5 years of experience in the digital design and development field, 
              I've helped businesses of all sizes create impactful digital products and effective 
              visual communication. My approach combines technical knowledge with creative 
              problem-solving to deliver solutions that meet business objectives while delighting users.
            </p>
            <p className="text-muted-foreground">
              I'm committed to staying on top of industry trends and continuously expanding my 
              skill set to provide cutting-edge solutions for my clients. Whether you need 
              a complete brand identity, a custom website, or ongoing virtual assistance, 
              I'm here to help your business succeed in the digital landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">Services I Offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-xl text-center"
            >
              <div className="flex justify-center mb-4">
                <service.icon className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
