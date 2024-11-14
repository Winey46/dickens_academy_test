import { poppins } from "@/app/layout";
import { book, lamp, rocket } from "@/utils/icons";

export default function Advantages() {
  return (
    <section
      id="advantages"
      className="w-full flex flex-col items-center justify-center h-[560px] bg-[#E0E7EF] gap-[18px]"
    >
      <h3
        className={`${poppins.className} w-[1340px] bg-[#FBFBFB] px-[50px] py-[30px] rounded-[16px] font-[500] text-[42px] text-[#003366] leading-[63px] uppercase`}
      >
        advantages
      </h3>

      <div className="flex gap-[23.5px] w-[1340px] h-[274px]">
        <div className="px-[42px] w-[431px] h-[274px] flex flex-col gap-[12px] items-center justify-center rounded-[14px] bg-[#FBFBFB]">
          <span>{rocket}</span>
          <p className={`${poppins.className} uppercase text-[#003366] text-[24px] leading-[36px] text-center`}>
            Launch Your Coaching Career
          </p>
          <p className="text-[18px] font-[400] leading-[27px] text-center">
            A comprehensive course track to ICF credentialing
          </p>
        </div>

        <div className="px-[42px] w-[431px] h-[274px] flex flex-col gap-[12px] items-center justify-center rounded-[14px] bg-[#FBFBFB]">
          <span>{lamp}</span>
          <p className={`${poppins.className} uppercase text-[#003366] text-[24px] leading-[36px] text-center`}>
            Coaching in the workplace
          </p>
          <p className="text-[18px] font-[400] leading-[27px] text-center">
            Serve as a thought leader within your organization
          </p>
        </div>

        <div className="px-[42px] w-[431px] h-[274px] flex flex-col gap-[12px] items-center justify-center rounded-[14px] bg-[#FBFBFB]">
          <span>{book}</span>
          <p className={`${poppins.className} uppercase text-[#003366] text-[24px] leading-[36px] text-center`}>
            Continuing Coaching Education
          </p>
          <p className="text-[18px] font-[400] leading-[27px] text-center">
            Beginner or a seasoned pro, you'll find a course right for you
          </p>
        </div>
      </div>
    </section>
  );
}
