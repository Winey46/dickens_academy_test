export default function Faq() {
  return (
    <section id="faq" className="flex flex-col w-[1340px] py-[50px] gap-[20px]">
      <h2 className="poppins uppercase text-[42px] text-[#003366]">FAQ</h2>
      <div className="flex justify-between">
        <div className="flex flex-col gap-[20px]">
          <div className="w-[772px] p-[40px] flex justify-between border-[1px] border-[#003366] rounded-[16px]">
            <div className="w-[612px] flex flex-col">
              <p className="text-[20px] pb-[15px] font-[500] border-b-[1px] border-[#003366]">
                Lorem ipsum dolor sit amet consectetur. Bibendum proin
              </p>
              <p className="text-[18px] pt-[15px] leading-[27px]">
                Lorem ipsum dolor sit amet consectetur. Ipsum lacus nulla in
                eget sit. Lacus iaculis sed mollis mi massa tortor scelerisque
                sed amet. Turpis et sit tincidunt eget. Dolor nisl fermentum
                cras erat nisl facilisis. Et.
              </p>
            </div>
            <div className="flex justify-center items-center justify-self-center w-[40px] h-[40px] bg-[#003366] rounded-[50%]">
              <span className="w-[16px] h-[2px] rounded-md bg-[#FBFBFB]"></span>
            </div>
          </div>

          <div className="w-[772px] p-[40px] flex justify-between items-center border-[1px] border-[#003366] rounded-[16px]">
            <p className="text-[20px] font-[500]">
              Lorem ipsum dolor sit amet consectetur. Bibendum proin
            </p>
            <div className="flex justify-center items-center justify-self-center w-[40px] h-[40px] bg-[#003366] rounded-[50%]">
              <span className="w-[16px] h-[2px] rounded-md bg-[#FBFBFB] relative left-[8px]"></span>
              <span className="w-[16px] h-[2px] rounded-md bg-[#FBFBFB] rotate-90 relative right-[8px]"></span>
            </div>
          </div>

          <div className="w-[772px] p-[40px] flex justify-between items-center border-[1px] border-[#003366] rounded-[16px]">
            <p className="text-[20px] font-[500]">
              Lorem ipsum dolor sit amet consectetur. Bibendum proin
            </p>
            <div className="flex justify-center items-center justify-self-center w-[40px] h-[40px] bg-[#003366] rounded-[50%]">
              <span className="w-[16px] h-[2px] rounded-md bg-[#FBFBFB] relative left-[8px]"></span>
              <span className="w-[16px] h-[2px] rounded-md bg-[#FBFBFB] rotate-90 relative right-[8px]"></span>
            </div>
          </div>

          <div className="w-[772px] p-[40px] flex justify-between items-center border-[1px] border-[#003366] rounded-[16px]">
            <p className="text-[20px] font-[500]">
              Lorem ipsum dolor sit amet consectetur. Bibendum proin
            </p>
            <div className="flex justify-center items-center justify-self-center w-[40px] h-[40px] bg-[#003366] rounded-[50%]">
              <span className="w-[16px] h-[2px] rounded-md bg-[#FBFBFB] relative left-[8px]"></span>
              <span className="w-[16px] h-[2px] rounded-md bg-[#FBFBFB] rotate-90 relative right-[8px]"></span>
            </div>
          </div>
        </div>
        <form className="flex flex-col items-center justify-center w-[544px] bg-[#003366] rounded-[14px] p-[60px]">
          <h3 className="uppercase text-[#FBFBFB] text-[24px] poppins mb-[40px]">
            Ask your question
          </h3>
          <div className="flex flex-col gap-[12px] w-full py-[30px] border-t-[1px] border-[#FBFBFB]">
            <input
              className="w-full h-[54px] border-[1px] border-[#ECECEC] rounded-[4px] placeholder:text-[18px] placeholder:text-[#343434] p-[14px]"
              type="text"
              name="Name"
              placeholder="Name"
            />
            <input
              className="w-full h-[54px] border-[1px] border-[#ECECEC] rounded-[4px] placeholder:text-[18px] placeholder:text-[#343434] p-[14px]"
              type="email"
              name="Email"
              placeholder="Email"
            />
            <textarea
              className="w-full min-h-[114px] max-h-[114px] border-[1px] border-[#ECECEC] rounded-[4px] placeholder:text-[18px] placeholder:text-[#343434] p-[14px] resize-none"
              type="text"
              name="Name"
              placeholder="Name"
            />
          </div>
          <button className="bg-[#FBFBFB] text-[20px] text-[#003366] rounded-[14px] w-[235px] h-[58px]">
            Send your message
          </button>
        </form>
      </div>
    </section>
  );
}