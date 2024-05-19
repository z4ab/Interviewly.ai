"use client";

import Feedback from "@/components/Feedback";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import { useRouter, useSearchParams } from 'next/navigation';


export default function FeedbackPage() {
  const searchParams = useSearchParams();
  const response = searchParams.get("response").slice(0,searchParams.get("response").length-1).split("\\n");
  console.log(response);
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-900 to-teal-600">
      <h1 className="text-3xl font-bold typewriter1 text-white">
        You are a superstar! Here is some feedback on your interview!
      </h1>
      <Feedback text={response} />
      <div className="mt-6 flex justify-around">
        <button
          onClick={() => router.push('/formPage')}
          className="px-10 py-2 bg-teal-500 text-white rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        >
          Apply to More Jobs!
        </button>
      </div>


    </div>
  );
}
