import { GoArrowRight } from "react-icons/go";
import workBg from "../../assets/images/work-bg.png";
import work from "../../assets/images/work.png";
import AbsoluteImage from "../shared/AbsoluteImage";
import Animation from "../shared/Animation";

import roundOne from "../../assets/images/round-1.png";
import roundTwo from "../../assets/images/round-2.png";
import ellipseOne from "../../assets/images/ellipse-1.png";
import ellipseTwo from "../../assets/images/ellipse-2.png";
import ellipseThree from "../../assets/images/ellipse-3.png";

const Work = () => {
  return (
    <div
      className="
        relative
        grid
        grid-cols-1
        items-center
        gap-10
        overflow-hidden
        pt-10
        pb-10
        lg:grid-cols-2
        lg:gap-0
        lg:pb-0
        bg-cover
        bg-center
        bg-no-repeat
        text-white
      "
      style={{
        backgroundImage: `url(${workBg})`,
      }}
    >

      <AbsoluteImage
        src={roundOne}
        alt=""
        className="top-5 left-32.5 w-8 md:left-65 md:top-8 lg:w-auto"
      />

      <AbsoluteImage
        src={roundTwo}
        alt=""
        className="bottom-10 right-20 w-4 md:bottom-8 md:right-36 lg:right-73 lg:bottom-12 lg:w-auto"
      />

      <AbsoluteImage
        src={ellipseThree}
        alt=""
        className="top-0 left-0"
      />

      <AbsoluteImage
        src={ellipseTwo}
        alt=""
        className="bottom-0 lg:left-75"
      />

      <AbsoluteImage
        src={ellipseOne}
        alt=""
        className="top-0 right-0"
      />


      {/* Image Animation */}
      <Animation direction="left">
        <div className="flex h-full items-end justify-center lg:justify-start">
          <img
            src={work}
            alt="Remote work illustration"
            className="z-30 w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Animation>


      {/* Content Animation */}
      <Animation direction="right">
        <div className="space-y-3 px-5 lg:max-w-125 lg:px-0">

          <p className="text-[12px] font-semibold text-[#1E3E85]">
            Are you ready?
          </p>

          <h2 className="text-2xl font-semibold text-[#11142D] md:text-5xl">
            Help is only a few clicks away!
          </h2>

          <p className="my-7 text-[15px] text-[#767784] md:text-[18px]">
            Click Below to get set up super quickly and find help now!
          </p>


          <p
            className="
              group
              inline-block
              cursor-pointer
              rounded-full
              bg-[#d0e0f7]
              p-1.5
              text-[12px]
              text-[#1E3E85]
              transition-all
              duration-300
              hover:bg-[#52B4DA]
              hover:shadow-lg
              lg:p-2.5
              lg:text-[16px]
            "
          >
            <span className="flex items-center gap-2">

              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#52B4DA]
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:bg-[#1E3E85]
                "
              >
                <GoArrowRight
                  className="
                    text-2xl
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </span>

              Get Started

            </span>
          </p>

        </div>
      </Animation>

    </div>
  );
};

export default Work;