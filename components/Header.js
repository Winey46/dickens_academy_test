import { arrow } from "@/utils/icons";
import Image from "next/image";

export default function Header() {
  return (
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
            About
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
  );
}
