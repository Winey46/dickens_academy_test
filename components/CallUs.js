export default function CallUs() {
  return (
    <section className="w-[100%] h-[350px] bg-[#003366] flex justify-center items-center">
      <div className="flex flex-col items-start justify-center w-[670px]">
        <p className="poppins uppercase text-[42px] text-[#FBFBFB] leading-[63px] ">
          Companies, universities, directors and presidents
        </p>
        <p className="text-[18px] text-[#FBFBFB] leading-[27px]">
          If you'd like to learn more information about our work with large
          organizations, let's schedule a call.
        </p>
      </div>
      <form className="flex flex-col items-start justify-center w-[670px] gap-[25px]">
        <input
          placeholder="Name"
          name="Name"
          type="text"
          className="w-full h-[64px] border-[1px] border-[#ECECEC] bg-[#FBFBFB] rounded-[4px] placeholder:px-[14px] placeholder:text-[18px] placeholder:text-[#343434] "
        />
        <input
          placeholder="Email"
          name="Email"
          type="email"
          className="w-full h-[64px] border-[1px] border-[#ECECEC] bg-[#FBFBFB] rounded-[4px] placeholder:px-[14px] placeholder:text-[18px] placeholder:text-[#343434] "
        />
        <button className="w-[213px] h-[58px] bg-[#FBFBFB] rounded-[14px] text-[20px] poppins mt-[15px]">Schedule a call</button>
      </form>
    </section>
  );
}
