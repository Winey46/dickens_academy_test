import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-[1340px] h-[80px]  flex justify-between items-center">
      <Image
        src="/images/dickens_logo.png"
        alt="dickens_logo"
        width={48}
        height={48}
      />
      <p className="text-[#003366] ">© 2024 Dickens Consulting Group, LLC</p>
      <nav>
        <ul className="flex items-center gap-[16px] h-[44px] cursor-pointer font-[500]">
          <li className="flex items-center py-[12px] px-[8px] hover:text-[#003366] hover:border-b-[1px] hover:border-[#003366]">
            Course
          </li>
          <li className="py-[12px] px-[8px] hover:text-[#003366] hover:border-b-[1px] hover:border-[#003366]">
            About
          </li>
          <li className="py-[12px] px-[8px] hover:text-[#003366] hover:border-b-[1px] hover:border-[#003366]">
            Contact
          </li>
        </ul>
      </nav>
    </footer>
  );
}
