import FeatureSection from "../../components/shared/FeatureSection";
import profileImage from "../../assets/images/profile.png";

const Profile = () => {
  return (
    <FeatureSection
      badge="Custom Profile"
      title="Showcase Your Talents"
      description="Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates."
      image={profileImage}
      imageAlt="Custom profile showcase"
    />
  );
};

export default Profile;