import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="ml-[650px] mt-7 h-[650px] w-[300px] border-2 border-gray-300 pt-[440px] pl-6">
      <h1 className="text-2xl font-bold">Welcome to PopX</h1>
      <p className="text-gray-500">
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="bg-purple-700 text-white px-4 py-2 rounded-md mt-4 w-[250px] text-center">
      <Link href="/account" >Create account</Link>
      </div>
      <div className="bg-purple-300 text-black px-4 py-2 rounded-md mt-1 w-[250px] text-center">
      <Link href="/login" >Already Registered?Login</Link>
      </div>
    </div>
  );
}
