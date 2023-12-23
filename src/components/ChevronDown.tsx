"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

import { Button } from "./ui/button";

export const ChevronDown = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="w-32">
      <Button
        asChild={true}
        className={`w-full animate__animated animate__fadeInDown ${
          isClicked ? "animate__fadeOutUp hidden" : ""
        }`}
      >
        <div
          className="flex items-center space-x-2"
          onClick={() => {
            if (typeof window === "undefined") {
              return;
            }
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
            setIsClicked(true);
          }}
        >
          <ChevronDownIcon className="w-6 h-6" />
          <Label>Scroll</Label>
        </div>
      </Button>
    </div>
  );
};
