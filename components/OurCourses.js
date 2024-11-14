import { poppins } from "@/app/layout";
import {
  arrowWhite,
  checked,
  clock,
  magazine,
  monitor,
  paper,
  star,
} from "@/utils/icons";

export default function OurCourses() {
  return (
    <section
      id="ourCourses"
      className="flex flex-col w-[1340px] mt-[60px] mb-[100px] gap-[30px]"
    >
      <h2
        className={`${poppins.className} uppercase text-[42px] text-[#003366]`}
      >
        Our courses
      </h2>
      <div className="flex flex-col w-full p-[40px] border-[2px] border-[#003366] rounded-[20px]">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-[14px]">
            <span className="flex justify-center items-center w-[60px] h-[60px] bg-[#003366] rounded-[12px] ">
              {star}
            </span>
            <p
              className={`${poppins.className} uppercase text-[24px] text-[#003366] leading-[36px]`}
            >
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

        <ul className="flex gap-[5px] mt-[35px]">
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

        <div className="flex flex-col gap-[26px] mt-[48px]">
          <h2 className="text-[20px] text-[#003366] uppercase ">
            The Three Primary Coaching Program Models:
          </h2>
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[18px]">
              Level 1 (ACC Track) Experiential Executive Coaching Program
            </h3>
            <ul className="flex flex-col gap-[7px]">
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  In-depth exploration of coaching foundations
                </p>
              </li>
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Mastery in effective communication strategies
                </p>
              </li>
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Proficiency in navigating ICF Core Competencies
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[18px]">
              Level 1 (ACC Track) Experiential Executive Coaching Program
            </h3>
            <ul className="flex flex-col gap-[7px]">
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Illustrates how coaching candidates acquire the necessary
                  skills, tips, tools, and techniques for certification
                </p>
              </li>
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Progresses from data intake to knowledge acquisition,
                  understanding, and ultimately wisdom
                </p>
              </li>
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Through practice and repetition, candidates achieve competence
                  and transcendence in their coaching abilities
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[18px]">3.The Coaching Engagement Model</h3>
            <ul className="flex flex-col gap-[7px]">
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Provides a structured framework for coaching sessions
                </p>
              </li>
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Guides coaches and clients through phases of awareness,
                  discovery, goal setting, approach determination, progress
                  tracking, and success evaluation
                </p>
              </li>
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Serves as a roadmap for the engagement, fostering clarity and
                  mutual expectations between coach and client
                </p>
              </li>
            </ul>
          </div>

          <div className="flex justify-start items-center text-[30px] text-[#003366]">
            <p className="pr-[14px] py-[14.5px] border-r-[2px] border-[#003366] uppercase font-[500]">
              Price
            </p>
            <p className="pl-[14px] font-[500]">$6 499</p>
          </div>
        </div>
        <button className="w-[216px] h-[58px] uppercase bg-[#003366] text-[#FBFBFB] text-[20px] px-[30px] py-[14px] self-start rounded-[14px] mt-[38px]">
          Join
        </button>
      </div>

      <div className="flex flex-col w-full p-[40px] border-[2px] border-[#003366] rounded-[20px]">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-[14px]">
            <span className="flex justify-center items-center w-[60px] h-[60px] bg-[#003366] rounded-[12px] ">
              {star}
            </span>
            <p
              className={`${poppins.className} uppercase text-[24px] text-[#003366] leading-[36px]`}
            >
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

        <ul className="flex gap-[5px]  mt-[35px]">
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

        <div className="flex flex-col gap-[26px] mt-[48px]">
          <h2 className="text-[20px] text-[#003366] uppercase ">
            The Three Primary Coaching Program Models:
          </h2>
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[18px]">1.The Coaching Certification Model</h3>
            <ul className="flex flex-col gap-[7px]">
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  The program offers three pathways to proficiency: coaching,
                  receiving coaching, or observing coaching sessions
                </p>
              </li>
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Emphasizes three core areas: ICF Ethics, ICF Regulations, and
                  ICF Core Competencies
                </p>
              </li>
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Candidates focus on enhancing skills in performance coaching,
                  behavioral coaching, and perceptual coaching
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[18px]">2.The Coach’s Learning Model</h3>
            <ul className="flex flex-col gap-[7px]">
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Illustrates how coaching candidates acquire the necessary
                  skills, tips, tools, and techniques for certification
                </p>
              </li>
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Progresses from data intake to knowledge acquisition,
                  understanding, and ultimately wisdom
                </p>
              </li>
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Through practice and repetition, candidates achieve competence
                  and transcendence in their coaching abilities
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[18px]">3.The Coaching Engagement Model</h3>
            <ul className="flex flex-col gap-[7px]">
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Provides a structured framework for coaching sessions
                </p>
              </li>
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Guides coaches and clients through phases of awareness,
                  discovery, goal setting, approach determination, progress
                  tracking, and success evaluation
                </p>
              </li>
              <li className="flex items-center justify-start gap-[14px]">
                <span>{checked}</span>
                <p className="text-[18px] ">
                  Serves as a roadmap for the engagement, fostering clarity and
                  mutual expectations between coach and client
                </p>
              </li>
            </ul>
          </div>
          <div className="flex justify-start items-center text-[30px] text-[#003366]">
            <p className="pr-[15px] py-[14.5px] border-r-[2px] border-[#003366] uppercase font-[500]">
              Price
            </p>
            <p className="pl-[15px] font-[500]">$8 499</p>
          </div>
        </div>
        <button className="w-[216px] h-[58px] uppercase bg-[#003366] text-[#FBFBFB] text-[20px] px-[30px] py-[14px] self-start rounded-[14px] mt-[38px]">
          Join
        </button>
      </div>
    </section>
  );
}
