"use client";

import Head from 'next/head';
import Link from 'next/link';
import Camera from '../../../components/Camera';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import AudioRecorder from '@/components/AudioRecorder';
import { useState } from 'react';

export default function MainPage() {
  const [isRecording, setRecording] = useState(false);
  return (
    <div className="w-full h-screen overflow-hidden">
      <Head>
        <title>Camera and Audio Access Example</title>
      </Head>
      <NavigationMenu className="flex justify-center items-center">
        <NavigationMenuItem className="text-center">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Main Page
            </NavigationMenuLink>
          </Link>
          <p className="mt-2">Ready to ace your interview?</p>
        </NavigationMenuItem>
      </NavigationMenu>
      <main className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
        <Camera isRecording={isRecording}/>
        <AudioRecorder setTimerOn={setRecording}/>
      </main>
    </div>
  );
}
