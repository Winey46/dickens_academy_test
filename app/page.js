import {
  arrow,
  arrowWhite,
  book,
  checked,
  clock,
  lamp,
  magazine,
  monitor,
  paper,
  rocket,
  star,
} from "@/utils/icons";
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

      <section id="welcome" className="w-[1340px] flex gap-[24px] my-[50px]">
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

      <section
        id="advantages"
        className="w-full flex flex-col items-center justify-center h-[560px] bg-[#E0E7EF] gap-[23.5px]"
      >
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
        className="flex flex-col w-[1340px] py-[50px] gap-[20px]"
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
                  years on the <br />
                  educational market
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[317px] h-[211px] bg-[#003366] rounded-[14px] gap-[4px] px-[34px]">
                <h2 className="w-full text-center text-[#FBFBFB] text-[36px] font-[500] leading-[54px] uppercase poppins">
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

      <section
        id="ourCourses"
        className="flex flex-col w-[1340px] pt-[50px] pb-[100px] gap-[50px]"
      >
        <h2 className="poppins uppercase text-[42px] text-[#003366]">
          Our courses
        </h2>
        <div className="flex flex-col w-full p-[40px] border-[2px] border-[#003366] rounded-[20px] gap-[40px]">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-[14px]">
              <span className="flex justify-center items-center w-[60px] h-[60px] bg-[#003366] rounded-[12px] ">
                {star}
              </span>
              <p className="uppercase poppins text-[24px] text-[#003366] leading-[36px]">
                Level 1 (ACC Track) Experiential Executive Coaching Program
              </p>
            </div>
            <button className="flex justify-center items-center gap-[10px]">
              <span className="flex justify-center items-center w-[40px] h-[40px] bg-[#003366] rounded-[50%] ">
                {arrowWhite}
              </span>
              <p className="uppercase text-[20px]">Details</p>
            </button>
          </div>

          <ul className="flex gap-[10px]">
            <li className="flex justify-center items-center gap-[5px] w-[128px] h-[47px] rounded-[45px] bg-[#EFF3F7] px-[16px] text-[18px]">
              <span>{clock}</span>
              60-hour
            </li>
            <li className="flex justify-center items-center gap-[5px] w-[128px] h-[47px] rounded-[45px] bg-[#EFF3F7] px-[16px] text-[18px]">
              <span>{monitor}</span>
              Online
            </li>
            <li className="flex justify-center items-center gap-[5px] w-[128px] h-[47px] rounded-[45px] bg-[#EFF3F7] px-[16px] text-[18px]">
              <span>{magazine}</span>
              English
            </li>
          </ul>

          <div className="flex flex-col gap-[24px]">
            <h2 className="text-[20px] text-[#003366] uppercase ">
              The Three Primary Coaching Program Models:
            </h2>
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[18px]">
                Level 1 (ACC Track) Experiential Executive Coaching Program
              </h3>
              <ul className="flex flex-col gap-[4px]">
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    In-depth exploration of coaching foundations
                  </p>
                </li>
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    Mastery in effective communication strategies
                  </p>
                </li>
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    Proficiency in navigating ICF Core Competencies
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[18px]">
                Level 1 (ACC Track) Experiential Executive Coaching Program
              </h3>
              <ul className="flex flex-col gap-[4px]">
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    Illustrates how coaching candidates acquire the necessary
                    skills, tips, tools, and techniques for certification
                  </p>
                </li>
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    Progresses from data intake to knowledge acquisition,
                    understanding, and ultimately wisdom
                  </p>
                </li>
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    Through practice and repetition, candidates achieve
                    competence and transcendence in their coaching abilities
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[18px]">3.The Coaching Engagement Model</h3>
              <ul className="flex flex-col gap-[4px]">
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    Provides a structured framework for coaching sessions
                  </p>
                </li>
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    Guides coaches and clients through phases of awareness,
                    discovery, goal setting, approach determination, progress
                    tracking, and success evaluation
                  </p>
                </li>
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    Serves as a roadmap for the engagement, fostering clarity
                    and mutual expectations between coach and client
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex justify-start items-center text-[30px] text-[#003366]">
              <p className="pr-[8px] py-[14.5px] border-r-[2px] border-[#003366] uppercase">
                Price
              </p>
              <p className="pl-[8px]">$6 499</p>
            </div>
          </div>
          <button className="w-[216px] h-[58px] uppercase bg-[#003366] text-[#FBFBFB] text-[20px] px-[30px] py-[14px] self-start rounded-[14px] ">
            Join
          </button>
        </div>
        <div className="flex flex-col w-full p-[40px] border-[2px] border-[#003366] rounded-[20px] gap-[40px]">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-[14px]">
              <span className="flex justify-center items-center w-[60px] h-[60px] bg-[#003366] rounded-[12px] ">
                {star}
              </span>
              <p className="uppercase poppins text-[24px] text-[#003366] leading-[36px]">
                Level 2 (PCC Track) Experiential Executive Coaching Program
              </p>
            </div>
            <button className="flex justify-center items-center gap-[10px]">
              <span className="flex justify-center items-center w-[40px] h-[40px] bg-[#003366] rounded-[50%] ">
                {arrowWhite}
              </span>
              <p className="uppercase text-[20px]">Details</p>
            </button>
          </div>

          <ul className="flex gap-[10px]">
            <li className="flex justify-center items-center gap-[5px] h-[47px] rounded-[45px] bg-[#EFF3F7] px-[16px] text-[18px]">
              <span>{clock}</span>
              125 hours
            </li>
            <li className="flex justify-center items-center gap-[5px] h-[47px] rounded-[45px] bg-[#EFF3F7] px-[16px] text-[18px]">
              <span>{paper}</span>9 modules
            </li>
            <li className="flex justify-center items-center gap-[5px] w-[128px] h-[47px] rounded-[45px] bg-[#EFF3F7] px-[16px] text-[18px]">
              <span>{monitor}</span>
              Online
            </li>
            <li className="flex justify-center items-center gap-[5px] w-[128px] h-[47px] rounded-[45px] bg-[#EFF3F7] px-[16px] text-[18px]">
              <span>{magazine}</span>
              English
            </li>
          </ul>

          <div className="flex flex-col gap-[24px]">
            <h2 className="text-[20px] text-[#003366] uppercase ">
              The Three Primary Coaching Program Models:
            </h2>
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[18px]">
                1.The Coaching Certification Model
              </h3>
              <ul className="flex flex-col gap-[4px]">
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    The program offers three pathways to proficiency: coaching,
                    receiving coaching, or observing coaching sessions
                  </p>
                </li>
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    Emphasizes three core areas: ICF Ethics, ICF Regulations,
                    and ICF Core Competencies
                  </p>
                </li>
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    Candidates focus on enhancing skills in performance
                    coaching, behavioral coaching, and perceptual coaching
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[18px]">
              2.The Coach’s Learning Model
              </h3>
              <ul className="flex flex-col gap-[4px]">
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                  Illustrates how coaching candidates acquire the necessary skills, tips, tools, and techniques for certification
                  </p>
                </li>
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                  Progresses from data intake to knowledge acquisition, understanding, and ultimately wisdom
                  </p>
                </li>
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    Through practice and repetition, candidates achieve
                    competence and transcendence in their coaching abilities
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[18px]">3.The Coaching Engagement Model</h3>
              <ul className="flex flex-col gap-[4px]">
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    Provides a structured framework for coaching sessions
                  </p>
                </li>
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    Guides coaches and clients through phases of awareness,
                    discovery, goal setting, approach determination, progress
                    tracking, and success evaluation
                  </p>
                </li>
                <li className="flex items-center justify-start gap-[10px]">
                  <span>{checked}</span>
                  <p className="text-[18px] ">
                    Serves as a roadmap for the engagement, fostering clarity
                    and mutual expectations between coach and client
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex justify-start items-center text-[30px] text-[#003366]">
              <p className="pr-[8px] py-[14.5px] border-r-[2px] border-[#003366] uppercase">
                Price
              </p>
              <p className="pl-[8px]">$8 499</p>
            </div>
          </div>
          <button className="w-[216px] h-[58px] uppercase bg-[#003366] text-[#FBFBFB] text-[20px] px-[30px] py-[14px] self-start rounded-[14px] ">
            Join
          </button>
        </div>
      </section>
    </>
  );
}
