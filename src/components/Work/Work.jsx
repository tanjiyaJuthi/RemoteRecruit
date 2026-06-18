import { GoArrowRight } from "react-icons/go";
import workBg from "../../assets/images/work-bg.png";
import work from "../../assets/images/work.png";

const Work = () => {
  return (
    <div
      className="grid grid-cols-1 items-center gap-10 px-5 py-16 lg:min-h-screen lg:grid-cols-2 lg:gap-29 lg:px-0 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${workBg})`,
      }}
    >
      {/* Image */}
      <div className="flex justify-center lg:justify-start">
        <img
          src={work}
          alt="work-image"
          className="w-full max-w-200 object-contain"
        />
      </div>

      {/* Content */}
      <div className="lg:max-w-125 space-y-3">
        <p className="text-[12px] font-semibold text-[#1E3E85]">
          Are you ready?
        </p>

        <h2 className="text-2xl md:text-5xl text-[#11142D] font-semibold">
          Help is only a few clicks away!
        </h2>

        <p className="my-7 text-[15px] text-[#767784] md:text-[18px] ">
          Click Below to get set up super quickly and find help now!
        </p>

        <p className="inline-block rounded-full bg-[#d0e0f7] p-1.5 lg:p-2.5 text-[#1E3E85] text-[12px] lg:text-[16px]">
            <span className="flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#52B4DA]">
                <GoArrowRight className="text-2xl text-white" />
                </span>
                Get Started
            </span>
        </p>
      </div>
    </div>
  );
};

export default Work;