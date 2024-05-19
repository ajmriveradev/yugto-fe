"use client"

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-zinc-50 h-full w-full justify-center">
      <div className="flex flex-row justify-center mb-10">
        <h3 className="text-8xl font-bold mt-5 orelegaOne text-sky-900">Yugto</h3>
      </div>
      <div className="flex flex-row justify-center items-center">
        <button 
          className="text-xl font-large w-32 h-12 px-5 py-2.5 rounded-2xl drop-shadow-xl text-slate-50 mx-3 bg-sky-800 
          hover:bg-sky-600 
          focus:ring-4 focus:ring-sky-300 
          dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          onClick={ () => { 
            console.log("CLICKED LOG IN");
            router.push("/login");
          }}
        >
          Log in
        </button>
        <button 
          className="text-xl font-large w-32 h-12 px-5 py-2.5 rounded-2xl drop-shadow-xl text-slate-50 mx-3 bg-sky-800 
          hover:bg-sky-600 
          focus:ring-4 focus:ring-sky-300 
          dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          onClick={ () => { 
            console.log("CLICKED SIGN UP");
            router.push("/signup");
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Home;