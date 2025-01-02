
import Link from "next/link"
import { GrFacebookOption } from "react-icons/gr"
import { IoLogoInstagram } from "react-icons/io"
import { RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri"

const Footer = () => {
  return (
    <>
    <div className="w-full h-[1000px] lg:h-[500px] mt-[200px] flex justify-center items-center bg-lightwhite">
       <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center lg:items-start  w-[80%] gap-8 lg:gap-0 ">

            <div className="w-[250px] flex justify-center lg:justify-start ">
            <Link href={"/"}><h1 className="text-[24px]   font-[700] ">Exclusive Blog</h1></Link>
           </div>
        
           <div className="flex flex-col gap-6 w-[250px]">
            
            <h2 className="text-[16px] font-[600] text-center lg:text-left">Blogs</h2>
            <h3 className=" text-center lg:text-left">Business</h3>
            <h3 className=" text-center lg:text-left">Development</h3>
            <h3 className=" text-center lg:text-left">Technology</h3>
            <h3 className=" text-center lg:text-left">Design</h3>
            <h3 className=" text-center lg:text-left">Programming</h3>
          </div>
            









          <div className="flex flex-col gap-6 w-[250px]">
            <h2 className="text-[16px] font-[600] text-center lg:text-left">Resources</h2>
            <h3 className=" text-center lg:text-left">Career</h3>
            <h3 className=" text-center lg:text-left">Resume</h3>
            <h3 className=" text-center lg:text-left">Learning</h3>
            <h3 className=" text-center lg:text-left">Interview Preparation</h3>
            <h3 className=" text-center lg:text-left">Jobs</h3>
          </div>







          <div className="flex flex-col gap-6 w-[250px]">
            
            <h2 className="text-[16px] font-[600] text-center lg:text-left">About Us</h2>
            <h3 className=" text-center lg:text-left">Contact</h3>
            <h3 className=" text-center lg:text-left">Help/Support</h3>
            <h3 className=" text-center lg:text-left">FAQ</h3>
            <h3 className=" text-center lg:text-left">Terms and Conditions</h3>
            <h3 className=" text-center lg:text-left">Partners</h3>
          </div>










        
        
        
        
        
        
        
        
        
        
        
         </div>
         
    </div>

    <div className="w-full h-auto lg:h-[100px] flex justify-center items-center ">
              <div className="w-[80%] h-[250px] flex lg:flex-row flex-col justify-between items-center border-t border-black lg:h-24">
                <div className="flex lg:flex-row flex-col gap-5 pt-7">
                  <h2 className="text-[14px] text-center">2023 Ddsgnr. All right reserved.</h2>
                  <h2 className="text-[14px] text-center">Privacy Policy</h2>
                  <h2 className="text-[14px] text-center">Terms of Service</h2>
                  <h2 className="text-[14px] text-center">Cookies Settingse</h2>
                </div>


                  <div className="flex gap-3">
                    <GrFacebookOption className="text-[24px]"/>
                    <IoLogoInstagram className="text-[24px]"/>
                    <RiTwitterFill className="text-[24px]"/>
                    <RiLinkedinBoxFill className="text-[24px]"/>


                  </div>


              </div>

            </div>




    </>
  )
}

export default Footer