import checkIcon from "../../assets/images/check.png";
import crossIcon from "../../assets/images/cross.png";
import premiumImage from "../../assets/images/premium.png";

const plans = [
  {
    type: "Free",
    subtitle: "Basic",
    price: null,
    features: [
      { text: "1 Active Job", active: true },
      { text: "Basic List Placement", active: true },
      { text: "Unlimited Job Applicants", active: false },
      { text: "Invite Anyone to Apply to Your Jobs", active: false },
    ],
    button: "Get Started",
  },
  {
    type: "Premium",
    subtitle: "Per Month",
    price: "$79.99",
    features: [
      { text: "Unlimited Job Posts", active: true },
      { text: "Instant Job Post Approval", active: true },
      { text: "Premium List Placement", active: true },
      { text: "Unlimited Job Applicants", active: true },
    ],
    button: "Get Started",
    premium: true,
  },
];

const PricingCard = ({ plan }) => {
  return (
    <article
      className={`flex flex-1 flex-col rounded-4xl border border-slate-100 bg-white p-5 shadow-xl md:p-8 ${
        plan.premium ? "shadow-2xl" : ""
      }`}
    >
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start">

        {/* Price Box */}
        <div className="relative flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-2xl bg-blue-50 text-center">
          {plan.premium && (
            <div
              className="absolute -top-4 left-1/2 h-8 w-24 -translate-x-1/2 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${premiumImage})`,
              }}
            />
          )}

          {plan.price ? (
            <>
              <span className="bg-linear-to-r from-[#52B4DA] to-[#1E3E85] bg-clip-text text-3xl font-bold text-transparent">
                {plan.price}
              </span>
              <span className="text-xs font-medium text-slate-400">
                {plan.subtitle}
              </span>
            </>
          ) : (
            <>
              <span className="text-3xl font-bold text-[#52b4da]">
                {plan.type}
              </span>
              <span className="font-medium text-slate-400">
                {plan.subtitle}
              </span>
            </>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-4 pt-2">
          {plan.features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 font-medium ${
                feature.active ? "text-slate-700" : "text-slate-400"
              }`}
            >
              <img
                src={feature.active ? checkIcon : crossIcon}
                alt=""
                className="h-5 w-5 shrink-0"
              />

              <span>{feature.text}</span>
            </li>
          ))}
        </ul>

      </div>

      {/* Button */}
      {plan.premium ? (
        <button className="mt-auto w-full rounded-2xl bg-linear-to-r from-[#52B4DA] to-[#1E3E85] py-4 font-bold text-white shadow-lg">
          {plan.button}
        </button>
      ) : (
        <div className="mt-auto rounded-2xl bg-linear-to-r from-[#52B4DA] to-[#1E3E85] p-0.5">
          <button className="w-full rounded-2xl bg-white py-4 font-bold text-[#1E3E85]">
            {plan.button}
          </button>
        </div>
      )}
    </article>
  );
};

const Help = () => {
  return (
    <section
      className="
        mx-auto 
        max-w-334 
        px-5 
        lg:px-0
        relative
        lg:absolute 
        lg:-top-35 
        lg:left-0 
        lg:right-0
      "
    > 
      <h2 className="text-center text-2xl font-semibold lg:text-4xl">
        Help Is One Click Away
      </h2>

      <div className="mt-12 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default Help;