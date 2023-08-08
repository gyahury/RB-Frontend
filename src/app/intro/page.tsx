"use client";

import Container from "../components/Container";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro() {
  return (
    <Container>
      <div className="pt-24 text-center">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            부동산 매물을 확인해보세요.
          </motion.div>
        </AnimatePresence>
      </div>
    </Container>
  );
}
