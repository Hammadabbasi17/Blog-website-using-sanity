
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"















import { LuMenu } from "react-icons/lu";

import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full h-[72px] flex justify-between items-center fixed top-0 bg-slate-100 z-50">
      <div className="ml-[40px]">
      <Link href={"/"}><h1 className="text-[24px]  sm:ml-[20px]   font-[700] ">Exclusive Blog</h1></Link>


      </div>
      <ul className="hidden lg:block lg:flex gap-[32px]">
      <Link href={"/"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-500" >Home</li></Link>
      <Link href={"/blog"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-500"  >Blog</li></Link>
      <Link href={"/Contact"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-500" >Contact</li></Link>
      <Link href={"/serverside"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-500" >About</li></Link>
      
      </ul>


      <div className="hidden lg:block flex mr-[40px] ">
        <button className="mr-3 border border-black w-[95px] h-[40px] rounded-[5px] bg-transparent hover:bg-black hover:text-white transition-all duration-[0.5s]">Login</button>
        <button className="mr-3 border border-black w-[95px] h-[40px] rounded-[5px] bg-black hover:bg-transparent text-white hover:text-black transition-all duration-[0.5s]">Sign Up</button>
      </div>

      <div className="block lg:hidden mr-[25px] text-[30px]">





        <Sheet>
          <SheetTrigger><LuMenu/></SheetTrigger>
          <SheetContent>

          <div className="">
          <Link href={"/"}><h1 className="text-[24px]   font-[700] ">Exclusive Blog</h1></Link>


           </div>
         <ul className="flex flex-col justify-center items-center gap-[32px] h-[70%]">
            <Link href={"/"}> <li className="hover:text-orange-600 cursor-pointer  transition-all duration-500" >Home</li></Link>
            <Link href={"/blog"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-500"  >Blog</li></Link>
            <Link href={"/Contact"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-500" >Contact</li></Link>
            <Link href={"/serverside"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-500" >About</li></Link>
         </ul>


                    <div className=" flex flex-col gap-5 justify-center items-center">
                        <button className="mr-3 border border-black w-[120px] h-[40px] rounded-[5px] bg-transparent hover:bg-black hover:text-white transition-all duration-[0.5s]">Login</button>
                        <button className="mr-3 border border-black w-[120px] h-[40px] rounded-[5px] bg-black hover:bg-transparent text-white hover:text-black transition-all duration-[0.5s]">Sign Up</button>
                    </div>












            
            {/* <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription>
            </SheetHeader> */}

          </SheetContent>
        </Sheet>













      </div>

    </div>
  )
}
