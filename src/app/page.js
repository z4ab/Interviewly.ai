"use client";


import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from 'next/link';


export default function Home() {
  const linkclasses = `mt-32 text-xl px-12 py-4 bg-teal-500 text-white font-semibold rounded-md shadow-lg block mx-auto ${buttonVariants({ variant: "secondary" })}`;
  return (
    <div className="h-full bg-no-repeat bg-[url('/tech-bg.jpg')] font-rubik font-sans">
      <div className="flex h-full w-screen flex-col items-center p-8 bg-black/60">
        <Image src="/logo.png" width={400} height={400} alt="Logo" />
        <div className="icon-set flex h-96 w-[1500px] items-center justify-between">
          <div className="img-text-box h-96 w-full flex flex-col gap-4 items-center text-center">
            <img src="/pencil.png" className="h-80 w-70" alt="Pencil" />
            <p className="text-2xl text-white font-medium">Receive questions based on job descriptions</p>
          </div>
          <div className="img-text-box h-96 w-full flex flex-col gap-4 items-center text-center">
            <img src="/mic.png" className="h-80 w-70" alt="Audio" />
            <p className="text-2xl text-white font-medium">Practice answering the questions out loud</p>
          </div>
          <div className="img-text-box h-96 w-full flex flex-col gap-4 items-center text-center">
            <img src="/feedback.png" className="h-80 w-70" alt="Feedback" />
            <p className="text-2xl text-white font-medium">Receive feedback based on your answers</p>
          </div>
        </div>
        <Link
          href="/formPage"
          className={linkclasses}>
          Get started
        </Link>
      </div>
    </div>
  );
}

