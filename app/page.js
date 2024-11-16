// import Image from "next/image";

import Fleets from "./fleets/page";
import Link from "next/link";
import Image from "next/image";
import Contact from "./contact/page";
import SignUp from "./signin/page";
import Services from "./Services/page";
import AboutUs from "./AboutUs/page";




export default function Home() {
  return (
   
    <div className="mx-140">
      <nav className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 min-h-screen py-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
         

          
          <Fleets />
          <Image />
          
         
        </div>
      </nav>
    </div>
    

  );
}


