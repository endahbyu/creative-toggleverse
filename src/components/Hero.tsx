
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 md:py-32"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
          >
            Virtual Assistant • Graphic Designer • Web Developer
          </motion.div>

          <motion.h1
            className="hero-text max-w-4xl mx-auto text-balance mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Creating <span className="text-primary">Digital Experiences</span> That Make a Difference
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I help businesses transform ideas into engaging digital products
            with elegant design and efficient development solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button className="button-primary" asChild>
              <a href="#portfolio">View Portfolio</a>
            </Button>
            <Button variant="outline" className="button-secondary" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.9,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <a href="#portfolio" aria-label="Scroll to portfolio section">
          <ArrowDownCircle className="w-10 h-10 text-primary opacity-70 hover:opacity-100 transition-opacity" />
        </a>
      </motion.div>
    </section>
  );
}
