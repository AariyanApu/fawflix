import HelpCard from "@/components/HelpCard";
import { helpInfo } from "@/utils/data";

export default function Help() {
  return (
    <div className="flex w-full flex-col">
      <div className="red_gradient mx-auto w-full text-xl sm:mt-5 sm:w-[640px]">
        {/* All help Card */}
        {helpInfo?.map((item, index) => (
          <HelpCard
            key={index}
            url={item.url}
            customStyles={item.customStyles}
            imageLink={item.imageLink}
            altText={item.altText}
            linkInfo={item.linkInfo}
          />
        ))}
      </div>
    </div>
  );
}
