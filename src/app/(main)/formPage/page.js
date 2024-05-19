
import MyForm from "@/components/form";
import Link from "next/link";
import Image from "next/image";

export default function FormPage() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-900 to-teal-600">
      <div className="absolute top-4 left-4">
        <Link href="/">
          <Image src='/sidelogo.png' width={200} height={100} alt="Logo" />
        </Link>
      </div>
      <h1 className="text-3xl font-bold typewriter text-white text-center mt-4">
        Do you want to land your dream job?
      </h1>
      <div className="w-full max-w-md mt-8">
        <MyForm />
      </div>
    </div>
  );
}
