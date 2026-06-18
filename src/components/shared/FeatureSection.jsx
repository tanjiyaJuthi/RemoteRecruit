import Animation from "../shared/Animation";

const FeatureSection = ({
  badge,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  className = "",
}) => {
  return (
    <div
      className={`
        mx-auto grid max-w-334 grid-cols-1 items-center gap-10 
        px-5 lg:grid-cols-2 lg:gap-29 lg:px-0 
        ${className}
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      <Animation direction={reverse ? "right" : "left"}>
        <div className="w-full space-y-3 lg:max-w-125 lg:space-y-9">
          <p className="inline-block rounded-full bg-[#c2eeff] px-4.5 py-3 text-[12px] font-semibold lg:py-5">
            {badge}
          </p>

          <h2 className="text-2xl font-medium md:text-4xl">
            {title}
          </h2>

          <p className="text-[15px] text-[#11142D]/64 md:text-[20px]">
            {description}
          </p>
        </div>
      </Animation>


      <Animation direction={reverse ? "left" : "right"}>
        <div>
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="w-full"
          />
        </div>
      </Animation>
    </div>
  );
};

export default FeatureSection;