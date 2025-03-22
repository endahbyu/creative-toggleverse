
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { ThemeProvider } from "@/context/ThemeContext";

const Index = () => {
  useEffect(() => {
    // Smooth scroll to section when URL has hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Hero />
            <Portfolio />
            <About />
            <Contact />
            <footer className="py-10 text-center text-muted-foreground">
              <div className="max-w-7xl mx-auto px-6">
                <p>&copy; {new Date().getFullYear()} Portfolio. All Rights Reserved.</p>
              </div>
            </footer>
          </main>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Index;
