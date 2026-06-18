import FeatureSection from "../../components/shared/FeatureSection";
import membershipFee from "../../assets/images/membership-fee.png";

const Membership = () => {
  return (
    <FeatureSection
      badge="Actually Fee Free"
      title="Fee-Free Forever"
      description="We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved."
      image={membershipFee}
      imageAlt="Membership fee free"
      reverse={true}
    />
  );
};

export default Membership;