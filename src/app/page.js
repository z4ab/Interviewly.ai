import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from 'next/link';

export default function Home() {
  const linkClasses = `mt-32 text-xl px-12 py-4 bg-teal-500 text-white font-semibold rounded-md shadow-lg block mx-auto overflow-hidden ${buttonVariants({ variant: "secondary" })}`;
  
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-[url('/tech-bg.jpg')] font-rubik">
      <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-black/60">
        <Image src="/logo.png" width={400} height={400} alt="Logo" priority />
        <div className="flex w-full max-w-7xl items-center justify-between px-4 py-8">
          <div className="flex flex-col items-center text-center gap-4">
            <img src="/pencil.png" className="h-20 w-auto" alt="Pencil" />
            <p className="text-2xl text-white font-medium">Receive questions based on job descriptions</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <img src="/mic.png" className="h-20 w-auto" alt="Audio" />
            <p className="text-2xl text-white font-medium">Practice answering the questions out loud</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <img src="/feedback.png" className="h-20 w-auto" alt="Feedback" />
            <p className="text-2xl text-white font-medium">Receive feedback based on your answers</p>
          </div>
        </div>
        <Link href="/formPage" className={linkClasses}>
          Get started
        </Link>
      </div>
    </div>
  );
}
