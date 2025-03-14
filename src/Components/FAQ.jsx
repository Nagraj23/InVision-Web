import React from "react"
"use client"
import { motion } from "framer-motion"

const FAQ = () => {
  const faqs = [
    {
      question: "Is InVision just for writing help?",
      answer:
        "No, InVision provides comprehensive academic assistance including writing help, code debugging, and guidance across various subjects like math, science, and humanities.",
    },
    {
      question: "Can InVision help with programming assignments?",
      answer:
        "Yes! Our code debugging feature supports multiple programming languages and can help identify bugs, optimize code, and explain complex programming concepts.",
    },
    {
      question: "Is my data secure with InVision?",
      answer:
        "Absolutely. We take data privacy seriously and employ industry-standard encryption to protect your information. We never share your data with third parties.",
    },
   
  ]

  return (
    <section
    id="faq"
    className="py-12 md:py-24 lg:py-32 bg-zinc-50 flex justify-center items-center min-h-screen"
  >
  
      <div className="container px-4 md:px-6">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="inline-block rounded-full bg-gray-200 px-3 py-1 text-20px font-medium text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            FAQ
          </motion.div>
          <motion.h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[700px] text-gray-500 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about InVision.
          </motion.p>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:gap-12"
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
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <motion.h3
                className="text-lg font-semibold text-left text-black-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                {faq.question}
              </motion.h3>
              <motion.p
                className="text-gray-500 text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                {faq.answer}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
