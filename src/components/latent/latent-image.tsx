import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils"; // Assuming a cn utility exists, otherwise standard classes

export function LatentImage({ className, alt, src, ...props }: ImageProps) {
  // Global colour grade: desaturated, slightly warm, higher contrast for editorial feel
  const colourGrade = "saturate-[0.85] sepia-[0.10] contrast-[1.05] brightness-[0.95]";
  
  return (
    <Image
      src={src}
      alt={alt || ""}
      className={cn(colourGrade, className)}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" // generic gray blur
      {...props}
    />
  );
}
