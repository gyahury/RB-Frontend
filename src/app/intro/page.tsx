"use client";

import Container from "../components/Container";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export default function Intro() {
  const { scrollYProgress } = useScroll();

  return (
    <Container>
      <div className="xl:px-64 md:px-24 sm:px-10 px-4 py-40 xl:text-4xl md:text-3xl sm:text-2xl text-xl text-center font-semibold">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-rose-500 font-semibold">부동산 매물 관리 플랫폼 R&B</span>를 통해
        </motion.div>
        <motion.div
          className="mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 ,delay: 1}}
        >
          부동산 매물을 확인해보세요.
        </motion.div>
      </div>
    </Container>
  );
}
