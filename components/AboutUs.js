import { poppins } from "@/app/layout";
import { arrowWhite } from "@/utils/icons";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="aboutUs"
      className="flex flex-col w-[1340px] py-[60px] gap-[30px]"
    >
      <div className="flex justify-between items-center w-full">
        <h2
          className={`${poppins.className} uppercase text-[42px] text-[#003366]`}
        >
          About us
        </h2>
        <button className="flex justify-center items-center gap-[10px]">
          <span className="flex justify-center items-center w-[40px] h-[40px] bg-[#003366] rounded-[50%] ">
            {arrowWhite}
          </span>
          <p className="uppercase text-[20px]">Learn more</p>
        </button>
      </div>
      <div className="flex w-full gap-[20px]">
        <Image
          src="/images/team.png"
          alt="team_image"
          width={655}
          height={575}
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col justify-start items-start w-[660px] h-[333px] bg-[#003366] rounded-[14px] px-[34px] py-[37px] gap-[20px]">
            <h2
              className={`${poppins.className} w-full  text-[#FBFBFB] text-[36px] font-[500] leading-[54px] uppercase`}
            >
              Hi, we’re Dickens Executive Coaching Academy
            </h2>
            <p className="w-full text-[#FBFBFB] text-[18px] font-[400] leading-[27px] ">
              Lorem ipsum dolor sit amet consectetur. Odio nec dictum tortor id
              proin rhoncus elit. Orci lacus pellentesque ultrices ut aliquet
              non fusce faucibus dictumst. Massa sit aliquam quam urna nam.
              Maecenas massa varius scelerisque pellentesque. Vestibulum ut
              rhoncus iaculis eleifend. Euismod cras et tortor at pellentesque
              duis cursus donec.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col justify-center items-center w-[317px] h-[211px] bg-[#003366] rounded-[14px] gap-[4px] px-[34px]">
              <h2
                className={`${poppins.className} w-full text-center text-[#FBFBFB] text-[36px] font-[500] leading-[54px] uppercase`}
              >
                5+
              </h2>
              <p className="w-full text-center text-[#FBFBFB] text-[18px] font-[400] leading-[27px] ">
                years on the <br />
                educational market
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[317px] h-[211px] bg-[#003366] rounded-[14px] gap-[4px] px-[34px]">
              <h2
                className={`${poppins.className} w-full text-center text-[#FBFBFB] text-[36px] font-[500] leading-[54px] uppercase`}
              >
                1000+
              </h2>
              <p className="w-full text-center text-[#FBFBFB] text-[18px] font-[400] leading-[27px] ">
                successful <br />
                graduates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
