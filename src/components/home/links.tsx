import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { iconData } from "@/config/iconData";
import type { Profile } from "@/types/profileType";

export const HomeLinks = ({ links }: { links: Profile["links"] }) => {
  return (
    <>
      <ul className="mt-4 flex flex-wrap justify-center items-center gap-3">
        {[...links].reverse().map(({ url, name, icon }) => {
          const Icon = iconData[icon[0]];
          return (
            <li
              className="flex items-center w-40 animate__animated animate__fadeInUp"
              key={url}
            >
              <Button asChild={true} className="w-full">
                <a href={url} rel="noopener noreferrer" target="_blank">
                  <div className="relative w-full">
                    <div className="w-full flex items-center justify-center">
                      <div className="w-4/12">
                        <div className="w-full flex justify-center items-center">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <span className="text-sm text-white w-8/12 text-center">
                        {name}
                      </span>
                    </div>
                  </div>
                </a>
              </Button>
            </li>
          );
        })}
        <div className="w-full flex gap-3 justify-center items-center">
          {process.env.RESUME_FEATURE === "true" && (
            <div className="w-40 md:w-52">
              <Button asChild={true} className="w-full">
                <Link href="/resume">
                  <CaretLeftIcon className="w-5 h-5" />
                  Resume
                </Link>
              </Button>
            </div>
          )}
          <div className="w-40 md:w-52">
            <Button asChild={true} className="w-full">
              <Link href="/works">
                <CaretRightIcon className="w-5 h-5" />
                Works
              </Link>
            </Button>
          </div>
        </div>
      </ul>
    </>
  );
};
