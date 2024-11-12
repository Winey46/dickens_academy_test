import { arrow, arrowWhite, book, lamp, rocket } from "@/utils/icons";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <header className="w-[1340px] h-[80px]  flex justify-between items-center">
        <Image
          src="/images/dickens_logo.png"
          alt="dickens_logo"
          width={48}
          height={48}
        />
        <nav>
          <ul className="flex items-center gap-[16px] h-[44px] cursor-pointer">
            <li className="py-[12px] px-[8px] hover:text-[#003366] hover:border-b-[1px] hover:border-[#003366]">
              Home
            </li>
            <li className="flex items-center py-[12px] px-[8px] hover:text-[#003366] hover:border-b-[1px] hover:border-[#003366]">
              Courses<span>{arrow}</span>
            </li>
            <li className="py-[12px] px-[8px] hover:text-[#003366] hover:border-b-[1px] hover:border-[#003366]">
              About{" "}
            </li>
            <li className="py-[12px] px-[8px] hover:text-[#003366] hover:border-b-[1px] hover:border-[#003366]">
              Contact us
            </li>
            <li>
              <button className="h-[58px] px-[30px] py-[14px] bg-[#003366] rounded-[14px] text-[#FFFFFF] text-[20px] font-[400] ">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <section className="w-[1340px] flex gap-[24px] my-[50px]">
        <div className="flex flex-col justify-center items-start w-[889px] h-[519px] bg-[#003366] rounded-[20px] gap-[4px] px-[80px]">
          <h2 className="w-full  text-[#FBFBFB] text-[48px] font-[600] leading-[57.6px] uppercase poppins">
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

      <section className="w-full flex flex-col items-center justify-center h-[560px] bg-[#E0E7EF] gap-[23.5px]">
        <h3 className="w-[1340px] bg-[#FBFBFB] px-[50px] py-[30px] rounded-[16px] poppins font-[500] text-[42px] text-[#003366] leading-[63px] uppercase ">
          advantages
        </h3>
        <div className="flex gap-[23.5px] w-[1340px] h-[274px]">
          <div className="px-[42px] w-[431px] h-[274px] flex flex-col gap-[12px] items-center justify-center rounded-[14px] bg-[#FBFBFB]">
            <span>{rocket}</span>
            <p className="uppercase text-[#003366] poppins text-[24px] leading-[36px] text-center">
              Launch Your Coaching Career
            </p>
            <p className="text-[18px] font-[400] leading-[27px] text-center">
              A comprehensive course track to ICF credentialing
            </p>
          </div>
          <div className="px-[42px] w-[431px] h-[274px] flex flex-col gap-[12px] items-center justify-center rounded-[14px] bg-[#FBFBFB]">
            <span>{lamp}</span>
            <p className="uppercase text-[#003366] poppins text-[24px] leading-[36px] text-center">
              Coaching in the workplace
            </p>
            <p className="text-[18px] font-[400] leading-[27px] text-center">
              Serve as a thought leader within your organization
            </p>
          </div>
          <div className="px-[42px] w-[431px] h-[274px] flex flex-col gap-[12px] items-center justify-center rounded-[14px] bg-[#FBFBFB]">
            <span>{book}</span>
            <p className="uppercase text-[#003366] poppins text-[24px] leading-[36px] text-center">
              Continuing Coaching Education
            </p>
            <p className="text-[18px] font-[400] leading-[27px] text-center">
              Beginner or a seasoned pro, you'll find a course right for you
            </p>
          </div>
        </div>
      </section>

      <section
        id="aboutUs"
        className="flex flex-col w-[1340px] h-[658px] py-[50px] gap-[20px]"
      >
        <div className="flex justify-between items-center w-full">
          <h2 className="poppins uppercase text-[42px] text-[#003366]">
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
            <div className="flex flex-col justify-center items-start w-full h-[333px] bg-[#003366] rounded-[14px] gap-[4px] px-[34px]">
              <h2 className="w-full  text-[#FBFBFB] text-[36px] font-[500] leading-[54px] uppercase poppins">
                Hi, we’re Dickens Executive Coaching Academy
              </h2>
              <p className="w-full text-[#FBFBFB] text-[18px] font-[400] leading-[27px] ">
                Lorem ipsum dolor sit amet consectetur. Odio nec dictum tortor
                id proin rhoncus elit. Orci lacus pellentesque ultrices ut
                aliquet non fusce faucibus dictumst. Massa sit aliquam quam urna
                nam. Maecenas massa varius scelerisque pellentesque. Vestibulum
                ut rhoncus iaculis eleifend. Euismod cras et tortor at
                pellentesque duis cursus donec.
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col justify-center items-center w-[317px] h-[211px] bg-[#003366] rounded-[14px] gap-[4px] px-[34px]">
                <h2 className="w-full text-center text-[#FBFBFB] text-[36px] font-[500] leading-[54px] uppercase poppins">
                  5+
                </h2>
                <p className="w-full text-center text-[#FBFBFB] text-[18px] font-[400] leading-[27px] ">
                  years on the <br/>educational market
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[317px] h-[211px] bg-[#003366] rounded-[14px] gap-[4px] px-[34px]">
                <h2 className="w-full text-center text-[#FBFBFB] text-[36px] font-[500] leading-[54px] uppercase poppins">
                  1000+
                </h2>
                <p className="w-full text-center text-[#FBFBFB] text-[18px] font-[400] leading-[27px] ">
                  successful <br/>graduates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
