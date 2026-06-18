const Hero = () => {
  return (
    <div className="relative z-10 flex grow items-center justify-center pt-30 pb-65 px-5 lg:px-0">
      <div
        className="w-full max-w-4xl space-y-4 text-center"
        data-purpose="hero-copy"
      >
        {/* Main Heading */}
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          RemoteRecruit&apos;s Difference
        </h1>

        {/* Description Text */}
        <p className="mx-auto max-w-3xl text-[20px] font-medium leading-relaxed text-blue-100 md:text-xl">
          RemoteRecruit is connecting the world with an easy-to-use platform
          that lets full-time, part-time, and freelance workers showcase their
          talents to businesses that need them. With no paywalls, no fees, and
          no barriers, there&apos;s nothing but you, your talents, and the next
          step in your career.
        </p>
      </div>
    </div>
  );
};

export default Hero;