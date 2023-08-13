"use client";

import Image from "next/image";
import Container from "../components/Container";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function Intro() {
  const router = useRouter();

  return (
    <Container>
      <div className="xl:px-52 md:px-24 sm:px-10 px-4 pt-40 xl:text-4xl md:text-3xl sm:text-2xl text-xl text-center font-semibold">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-rose-500 font-semibold">부동산 매물 관리 플랫폼 R&B</span>를 통해
        </motion.div>
        <motion.div className="mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 ,delay: 1}}
        >
          부동산 매물을 확인해보세요.
        </motion.div>
        <motion.div className="flex flex-row items-center gap-8 mt-48"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 ,delay: 2 }}
        >
            <div className="flex-1">
                <Image
                    alt="intro1"
                    className=""
                    width="800"
                    height="500"
                    src="/images/intro-1.jpg"
                    placeholder="blur"
                    blurDataURL="data:..."
                />
            </div>
            <div className="flex-1 lg:text-lg sm:text-sm md:text-md text-xs">
                R&B는 <span className="text-rose-500">부동산 매물 중계 플랫폼</span>입니다.
            </div>
        </motion.div>
        <motion.div className="flex flex-row items-center gap-8 mt-20"  
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 ,delay: 3 }}
        >
            <div className="flex-1 text-lg">
                회원가입 후 <span className="text-rose-500">매물을 등록하거나 매물을 확인</span>해보세요 !
            </div>
            <div className="flex-1">
                <Image
                    alt="intro2"
                    className=""
                    width="800"
                    height="500"
                    src="/images/intro-2.jpg"
                    placeholder="blur"
                    blurDataURL="data:..."
                />
            </div>
        </motion.div>
        <motion.div className="mt-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 ,delay: 3.5}}
        >
          <Button 
            label="매물 확인하러 가기"
            onClick={() => router.push('/')}
          />
        </motion.div>
      </div>
    </Container>
  );
}
