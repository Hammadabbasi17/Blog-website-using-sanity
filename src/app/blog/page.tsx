import Image from 'next/image'

import { client } from "@/sanity/lib/client";
import Link from 'next/link';
import { PortableText } from 'next-sanity';
interface tip {
    imageUrl?:string;
  heading: string;
  content:string
  paragraph: any[];
  slug:string;

}


   const  page = async () => {
    
      const data: tip[] = await client.fetch(`*[_type == "herosection"]{
  heading,
   paragraph,
   content,
  "imageUrl":blogimage.asset->url,
  "slug": slug.current
}`);
      console.log(data);
    return (
        <div >
            <div className="mt-[140px] w-full  sm:h-[150px] flex items-center flex-col ">
                <div className="w-[90%] flex flex-col sm:flex-row ">
                    <div className="flex gap-2 items-center">
                        <div className="w-[20px] h-[40px] sm:ml-[36px]  bg-black"></div>
                        <h2 className="text-[24px] sm:text-[32px] font-[600] text-oranges"> Blog</h2>

                    </div>
                </div>
            </div>







            <div className="w-full h-auto flex justify-center items-center  mt-[70px] ">
                <div className="w-full sm:w-[95%] h-auto flex flex-wrap  justify-center items-center gap-10 ">
                    {data.map((items, index) => (
                        


                        <div key={index} className="flex  flex-wrap justify-center items-center " >
                            <div className="w-[300px] sm:w-[350px] h-auto bg-slate-200  pb-6 rounded-md">
                                <div className="flex justify-center items-center overflow-hidden">
                                    {items.imageUrl && (<Image src={items.imageUrl} alt={items.heading} width={330} height={300}/>)}  
                                </div>

                                <div className="text-left pt-6 text-[20px] font-[600] pl-3">
                                    <h1>{items.heading}</h1>
                                </div>

                                <div className="pl-3 pt-6  text-[14px] ">
                                    {items.content.slice(0,110)}...
                                </div>

                               
                           

                                <div className=" ml-4 ">
                                    <Link href={`blog/${items.slug}`}>

                                    <button className="w-[100px] h-[40px] text-[14px] mt-5 border bg-black border-black rounded-[5px] hover:bg-transparent hover:text-black transition-all duration-[0.5s] text-white">Read more</button>
                                    </Link>

                                </div>


                            </div>




                        </div>




                          

                    ))}


                </div>

            </div>

        </div>
    )
}

export default page