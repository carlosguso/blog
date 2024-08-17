import React from "react";
import Image from "next/image";

interface AboutIntroProps {
  // children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

const AboutIntro: React.FC<AboutIntroProps> = ({ imageSrc, imageAlt }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="w-full flex justify-center">
        <div className="relative group">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={300}
            height={300}
            className="rounded-lg filter grayscale transition-all duration-300 group-hover:filter-none"
          />
          <div className="absolute inset-0 bg-main-dark opacity-30 mix-blend-color rounded-lg transition-opacity duration-300 group-hover:opacity-0"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
