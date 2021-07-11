import Head from "next/head";
import Image from "next/image";
import logo from "../public/img/logo.png";

export default function Home() {
  return (
    <div className="dark:bg-gray-700 flex justify-center">
      <Head>
        <title>Roadside Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container flex flex-col items-center justify-center h-screen mt-[-30px]">
        <Image
          src={logo}
          alt="Roadside Coder Logo"
          className="object-contain drop-shadow-md"
        />
        <span className="capitalize sm:text-2xl text-xl font-mono">
          Evolving the way web is taught
        </span>
      </div>
    </div>
  );
}
