import React from "react";
"use client"
import { motion } from "framer-motion"
import logo from "../assets/working.png"

const Working = () => {
  const steps = [
    {
      step: 1,
      title: "Ask Your Question",
      description: "Type your question, upload your code, or describe your assignment in natural language.",
    },
    {
      step: 2,
      title: "Get Instant Answers",
      description: "Our AI analyzes your request and provides detailed, accurate responses in seconds.",
    },
    {
      step: 3,
      title: "Learn & Improve",
      description: "Understand concepts better with explanations tailored to your learning style.",
    },
  ]

  return (
    <div className="flex items-center justify-center min-h-screen">
      <section id="how-it-works" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <motion.div
                className="inline-block rounded-lg bg-zinc-200 px-3 py-1 text-20px text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                How It Works
              </motion.div>
              <motion.h2
                className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Simple, Powerful, Effective
              </motion.h2>
              <motion.p
                className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                InVision makes getting academic help easier than ever before.
              </motion.p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:gap-12">
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[300px] w-full">
                <img
                  src={logo}
                  alt="InVision in action"
                  className="object-contain w-full h-full"
                />
              </div>
            </motion.div>
            <motion.div
              className="space-y-6"
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
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <motion.div
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {step.step}
                  </motion.div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Working;
