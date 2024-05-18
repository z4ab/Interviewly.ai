"use client";

import Head from 'next/head';
import Link from 'next/link';
import Camera from '../../../components/Camera';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import AudioRecorder from '@/components/AudioRecorder';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function MainPage() {
  const [isRecording, setRecording] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  var questions = searchParams.get("questions").slice(1,length-1).split("\\n");

  function endRecording(text) {
    console.log("done");
    // route to feedback page
  }
  return (
    <div className="w-full h-screen overflow-hidden ">
      <Head>
        <title>Camera and Audio Access Example</title>
      </Head>
      <NavigationMenu className="flex justify-center items-center list-none">
          <NavigationMenuItem className="text-center">
            <Link href="/">
              <Image src='/sidelogo.png' width={200} height={100} /> 
            </Link>
            <p className="mt-1 font-bold">Ready to ace your interview?</p>
        </NavigationMenuItem>
      </NavigationMenu>
      <main className="flex flex-col items-center w-full h-full scale-90">
        <p className='m-2 font-semibold'>{questions[0]}</p>
        <Camera isRecording={isRecording}/>
        <AudioRecorder setTimerOn={setRecording} endRecording={endRecording}/>
      </main>
    </div>
  );
}
