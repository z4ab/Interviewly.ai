import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Head>
        <title>Dream Job</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-4xl font-bold text-center text-blue-600 animate-fadeInDown">
        Do you want to land your dream job?
      </h1>
    </div>
  );
}