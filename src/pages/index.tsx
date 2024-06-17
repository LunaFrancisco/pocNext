import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = useState("");
  //fetch data go to the api helllo.ts
  const fetchApi = async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    if (res.ok) {
      setName(data.name);
    }
    console.log(data);
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}
    >
      <button
        className="bg-white text-black px-4 py-2 rounded-xl"
        onClick={() => fetchApi()}
      >
        Fetch
      </button>
      {name && <h1>Hola, {name}</h1>}
    </main>
  );
}
