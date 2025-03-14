import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import Brain from '../assets/b2.png';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="p-8 md:py-8 lg:py-16 bg-zinc-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* Left Column: Text Content */}
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.4, // Increased stagger delay
                },
              },
            }}
          >
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
              }}
              className="inline-block text-left rounded-lg bg-zinc-200 px-3 py-1 text-sm text-primary"
            >
              AI-Powered Student Assistant
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
              }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
            >
              Your Academic Success, {" "}
              <span className="text-primary relative inline-block">
                Reimagined
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 1.2, ease: "easeInOut" }}
                  style={{ originX: 0 }}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
              }}
              className="max-w-[600px] text-muted-foreground md:text-xl"
            >
              InVision helps students excel with AI-powered writing assistance,
              code debugging, and assignment help. Get more done in less time.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
              }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <button
                className="relative px-6 py-2.5 text-white font-semibold rounded-lg overflow-hidden bg-black hover:bg-zinc-800 transition-transform duration-300 group" onClick={() => navigate("/register")}
              >
                <span className="relative z-10 flex items-center" onClick={() => navigate("/login")}>
                  Start for Free
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 4,
                      duration: 1.5,
                    }}
                  >
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </motion.span>
                </span>
                <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              </button>
              <button
                className="px-6 py-2.5 font-semibold rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  See How It Works
                </span>
              </button>
            </motion.div>

            {/* No Credit Card Required */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
              }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>No credit card required</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative h-[350px] w-full md:h-[350px] lg:h-[420px]">
              <motion.img
                src={Brain}
                alt="InVision AI Assistant"
                className="object-contain w-full h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
