import { CaretRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Resume = async () => {
  return (
    // 真ん中に表示する
    <Card className=" mx-auto bg-slate-50 rounded-xl shadow-md max-lg:max-w-3xl w-full md:p-10 p-1 max-md:mt-10 max-sm:mt-20">
      <CardContent>
        <div className="flex-1 w-full flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col items-center">tmp</div>
        </div>
        <div className="flex-1 w-full flex flex-col items-center">
          <div className="w-1/4 max-md:w-1/2">
            <Button asChild={true} className="mt-4 w-full">
              <Link href="/">
                Back
                <CaretRightIcon className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default Resume;
