import HelpCard from '@/components/HelpCard';
import VideoPlayer from '@/components/VideoPlayer';
import { helpInfo } from '@/utils/data';

export default function Help() {
  return (
    <div className="w-full flex flex-col">
      <VideoPlayer
        url="https://www.youtube.com/embed/2mDCVzruYzQ"
        customStyles="sm:w-[640px] w-full sm:h-[480px] h-80 px-2 "
      />
      <div className="red_gradient text-xl sm:w-[640px] w-full mx-auto sm:mt-5">
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
