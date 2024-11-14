// import Image from "next/image";

import Fleets from "./fleets/page";
import Link from "next/link";
import Image from "next/image";

import SignUp from "./signin/page";




export default function Home() {
  return (
   
    <div className="mx-140">
      <nav className="bg-gray-600 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
         

          
          <Fleets />
          <Image />
          
          
         
          {/* <DisplayVehicles /> */}
          
         

          
          
      


        </div>
      </nav>
    </div>
    

  );
}


