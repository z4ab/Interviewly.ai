import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
        <div className="flex flex-col items-center justify-between p-8 bg-[url('/tech-bg.jpg')]">
          <div className="bg-black/75 width-full h-full"></div>
          <Image src="/logo.png" width={400} height={400}></Image>
          <p className="text-white">Ace your next interview</p>
      </div>
      <div className="width-full h-screen flex items-center justify-center pb-24 bg-white">
        <Button>Get started</Button>
      </div>
    </div>
  );
}
