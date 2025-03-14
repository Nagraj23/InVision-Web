import React from "react";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Features",
      links: ["AI Assistance", "Code Generation", "Smart Learning"],
    },
    {
      title: "Working",
      links: ["How It Works", "Use Cases", "Integrations"],
    },
    {
      title: "FAQ",
      links: ["General Questions", "Pricing", "Support"],
    },
  ];

  return (
    <footer className="border-t p-6 bg-zinc-100 text-black">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:py-12">
        <motion.div
          className="flex flex-col gap-3 md:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">InVision</span>
          </div>
          <p className="text-sm text-zinc-500">
            AI-powered academic assistant for writing, coding, and learning.
          </p>
        </motion.div>
        <motion.div
          className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-sm font-medium">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container flex flex-col gap-4 py-6 md:h-16 md:flex-row md:items-center md:justify-between md:py-0">
          <p className="text-xs text-gray-700">
            © {new Date().getFullYear()} InVision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;