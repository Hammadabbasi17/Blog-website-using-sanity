import { GoChevronLeft } from "react-icons/go";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface BlogDetail {
  imageUrl?: string;
  heading: string;
  paragraph: any;
}

interface BlogDetailPageProps{
  params: { slug: string };
  
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } =  params;

  const data: BlogDetail | null = await client.fetch(
    `*[_type == "herosection" && slug.current == $slug][0]{
      heading,
      paragraph,
      "imageUrl": blogimage.asset->url
    }`,
    { slug }
  );

  if (!data) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <div className="w-full h-28  mt-28 flex justify-center items-center">
        <div className="w-[80%] h-auto ">
          <Link href={"/blog"}>
            <h3 className=" text-xl flex items-center"><GoChevronLeft className="text-xl"/>Back</h3>

          </Link>

        </div>

      </div>
      <div className="w-full h-auto flex justify-center items-center mt-[50px] ">
        <div className="w-[90%] h-auto flex flex-col justify-center items-center">
          <h1 className="text-[30px] font-bold mb-7">{data.heading}</h1>
          {data.imageUrl && (
            <Image
              src={data.imageUrl}
              alt={data.heading}
              width={800}
              height={600}
            />
          )}
          <section className="text-[16px] mt-8 ">
            <PortableText value={data.paragraph} />
          </section>
        </div>
      </div>
    </div>
  );
}
