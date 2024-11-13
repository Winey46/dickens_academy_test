import { starYellow, whiteArrow } from "@/utils/icons";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="flex flex-col w-[1340px] py-[50px] gap-[20px]"
    >
      <h2 className="poppins uppercase text-[42px] text-[#003366]">About us</h2>
      <div className="flex gap-[24px]">
        <div className="flex items-center w-[658px] h-[265px] border-[1px] border-[#003366] rounded-[12px] p-[20px] gap-[20px]">
          <Image
            src="/images/girl.png"
            alt="girl_image"
            width={200}
            height={225}
          />
          <div className="flex flex-col w-[340px] h-fit gap-[10px]">
            <p className="poppins text-[20px] font-[500]">Name</p>
            <p className="text-[#6B6B6B]">Role Here</p>
            <div className="flex">
              <span>{starYellow}</span>
              <span>{starYellow}</span>
              <span>{starYellow}</span>
              <span>{starYellow}</span>
              <span>{starYellow}</span>
            </div>
            <p className="leading-[24px]">
              Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec
              ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit
              posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu
              odio vitae egestas. Porttitor urna.
            </p>
          </div>
        </div>
        <div className="flex items-center w-[658px] h-[265px] border-[1px] border-[#003366] rounded-[12px] p-[20px] gap-[20px]">
          <Image
            src="/images/man.png"
            alt="man_image"
            width={200}
            height={225}
          />
          <div className="flex flex-col w-[340px] h-fit gap-[10px]">
            <p className="poppins text-[20px] font-[500]">Name</p>
            <p className="text-[#6B6B6B]">Role Here</p>
            <div className="flex">
              <span>{starYellow}</span>
              <span>{starYellow}</span>
              <span>{starYellow}</span>
              <span>{starYellow}</span>
              <span>{starYellow}</span>
            </div>
            <p className="leading-[24px]">
              Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec
              ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit
              posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu
              odio vitae egestas. Porttitor urna.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-[14px] py-[12px] w-[221px] h-[56px] border-[1px] border-[#BFCCD8] self-center rounded-[100px]">
        <button className="flex justify-center items-center w-[32px] h-[32px] bg-[#C2D1E0] rounded-[50%] rotate-90">
          {whiteArrow}
        </button>
        <div className="flex gap-[2px]">
          <span className="w-[13px] h-[4px] bg-[#C2D1E0] rounded-[20px]"></span>
          <span className="w-[24px] h-[4px] bg-[#003366] rounded-[20px]"></span>
          <span className="w-[13px] h-[4px] bg-[#C2D1E0] rounded-[20px]"></span>
          <span className="w-[13px] h-[4px] bg-[#C2D1E0] rounded-[20px]"></span>
        </div>
        <button className="flex justify-center items-center w-[32px] h-[32px] bg-[#003366] rounded-[50%] -rotate-90">
          {whiteArrow}
        </button>
      </div>
    </section>
  );
}
