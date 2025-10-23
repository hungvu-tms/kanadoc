"use client";

import { cn } from "@/lib/utils"; // optional helper for className merge (hoặc bỏ nếu không dùng)
import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ImageFallbackProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  showSkeleton?: boolean;
}

export default function ImageFallback({
  src,
  alt,
  fallbackSrc = "/images/noimage.png",
  className,
  showSkeleton = true,
  ...props
}: ImageFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative flex justify-center">
      {isLoading && showSkeleton && (
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] rounded-md"></div>
      )}
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => setImgSrc(fallbackSrc)}
        className={cn(
          "duration-500 ease-in-out block",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
      />
    </div>
  );
}
