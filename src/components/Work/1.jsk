import { GoArrowRight } from "react-icons/go";
import workBg from "../../assets/images/work-bg.png";
import work from "../../assets/images/work.png";
import AbsoluteImage from "../shared/AbsoluteImage";
import roundOne from "../../assets/images/round-1.png";
import roundTwo from "../../assets/images/round-2.png";
import ellipseOne from "../../assets/images/ellipse-1.png";
import ellipseTwo from "../../assets/images/ellipse-2.png";
import ellipseThree from "../../assets/images/ellipse-3.png";

const Work = () => {
  return (
    <div
      className="grid grid-cols-1 items-center gap-10 px-5 pt-10 lg:grid-cols-2 lg:gap-0 lg:px-0 pb-10 lg:pb-0 bg-cover bg-center bg-no-repeat text-white relative"
      style={{
        backgroundImage: `url(${workBg})`,
      }}
    >
      <AbsoluteImage
        src={roundOne}
        alt="Round"
        className="
          top-5
          left-32.5
          w-8
          md:left-65
          md:top-8
          lg:w-auto
        "
      />

      <AbsoluteImage
        src={roundTwo}
        alt="Round"
        className="
          bottom-10
          right-20
          w-4
          md:bottom-8
          md:right-36
          lg:right-73
          lg:bottom-12
          lg:w-auto
        "
      />

      <AbsoluteImage
        src={ellipseThree}
        alt="Round"
        className="
          top-0
          left-0
        "
      />

      <AbsoluteImage
        src={ellipseTwo}
        alt="Round"
        className="
          bottom-0
          left-75
        "
      />

      <AbsoluteImage
        src={ellipseOne}
        alt="Round"
        className="
          top-0
          right-0
        "
      />

      <div className="flex h-full items-end justify-center lg:justify-start max-w-600">
        <img
          src={work}
          alt="work-image"
          className="w-full object-contain z-30"
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