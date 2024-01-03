import { Button } from "@/components/ui/button";
import { iconData } from "@/config/iconData";
import { Config } from "@/types/configType";

export const HomeLinks = ({ links }: { links: Config["links"] }) => {
  return (
    <>
      <ul className="mt-4 flex flex-wrap justify-center items-center gap-4">
        {[...links].reverse().map(({ url, name, icon }) => {
          const Icon = iconData[icon[0]];
          return (
            <li
              className="flex items-center w-36 animate__animated animate__fadeInUp"
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
      </ul>
    </>
  );
};
