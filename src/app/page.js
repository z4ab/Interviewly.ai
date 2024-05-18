"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from 'next/link';

export default function Home() {
  const linkclasses = `mt-32 text-xl pl-12 pr-12 bg-teal-500 block mx-auto align-text-top ${buttonVariants({ variant: "secondary" })}`;
  return (
      <div className="h-screen bg-no-repeat bg-[url('/tech-bg.jpg')]">
        <div className="flex h-screen width-screen flex-col items-center p-8 bg-black/60">
          <Image src="/logo.png" width={400} height={400}></Image>
          <p className="text-white text-xl font-bold">Ace your next interview with the help of AI</p>
          <ul className="text-white mt-32 text-center space-y-5 text-xl">
            <li> Practice answering interview questions generated using Open AI based on your desired job </li>
            <li> Get personalized interview tips and a score </li>
            <li> Login and track your progress to take your interviewing skills to the next level</li>
          </ul>
          <Link 
            href="/mainPage"
            className={linkclasses}>
            Get started
          </Link>
        </div>
      </div>
  );
}
