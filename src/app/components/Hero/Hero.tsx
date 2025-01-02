
// components/HeroSection.tsx
import Link from "next/link";
import React from "react";

const HeroSection = () => {
    return (
        <div className="relative h-screen bg-cover bg-center mt-[110px]" style={{ backgroundImage: "url('/image.jpeg')" }}>
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl font-bold sm:text-6xl">Your journey to recovery starts with us</h1>
                <p className="mt-4 text-lg sm:text-xl">
                At our physiotherapy center, we are committed to guiding you every step of the way toward a healthier, pain-free life. With personalized care and expert techniques, we ensure that your healing process is effective and empowering. Together, we will help you regain strength, mobility, and confidence.
                </p>
                <Link href={"/blog"}>
                    <button className="mt-6 px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded">
                        See Blogs
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;
