import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="imageContainer">
        <Image
          src={
            dark
              ? "/phone-template-dark-edges.png"
              : "/phone-template-white-edges.png"
          }
          className="pointer-events-none z-50 select-none"
          alt="phone image"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>

      <div className="absolute -z-10 inset-0 imageContainer">
        <Image
          src={imgSrc}
          className="object-cover min-w-full min-h-full"
          alt="overlaying phone image"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Phone;
