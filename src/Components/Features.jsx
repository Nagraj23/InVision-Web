import React from 'react'
"use client"
import { motion } from "framer-motion"
import { FileText, Code, Sparkles } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Writing Assistant",
      description: "Get help with essays, research papers, and creative writing. Improve grammar, style, and clarity.",
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Code Debugging",
      description: "Fix bugs, optimize code, and understand complex programming concepts across multiple languages.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Assignment Help",
      description: "Step-by-step guidance for solving problems in math, science, humanities, and more.",
    },
  ]

  return (
    <section
      id="features"
      className="flex items-center justify-center min-h-screen bg-zinc-50 py-12 md:py-24 lg:py-22"
    >
      <div className="container px-4 self-center md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-lg bg-zinc-200  px-3 py-1 text-lg text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Features
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Everything You Need to Excel
            </motion.h2>
            <motion.p
              className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              InVision combines powerful AI with intuitive design to help you tackle any academic challenge.
            </motion.p>
          </div>
        </div>
        <motion.div
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col w-auto items-center space-y-4 rounded-lg  bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="rounded-full bg-zinc-200 p-3"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "var(--primary)",
                  color: "white",
                  transition: { duration: 0.2 },
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
