import { poppins } from "@/app/layout";
import Image from "next/image";

export default function Heading() {
  return (
    <section id="welcome" className="w-[1346px] flex gap-[24px] my-[50px]">
      <div className="flex flex-col justify-center items-start w-[889px] h-[519px] bg-[#003366] rounded-[20px] gap-[4px] px-[80px]">
        <h2 className={`${poppins.className} w-full  text-[#FBFBFB] text-[48px] font-[600] leading-[57.6px] uppercase`}>
          Welcome to <br />
          Dickens Executive <br />
          Coaching Academy
        </h2>
        <p className="w-full text-[#FBFBFB] text-[18px] font-[400] ">
          Your resource of choice for coaching education
        </p>
        <button className="w-[185px] h-[58px] mt-[40px] bg-[#FBFBFB] px-[20px] py-[14px] rounded-[14px] text-[#003366] text-[20px] font-[400] ">
          Explore Courses
        </button>
      </div>
      <div className="w-[433px] h-[519px]">
        <Image
          src="/images/people.png"
          alt="people_image"
          width={433}
          height={519}
        />
      </div>
    </section>
  );
}
