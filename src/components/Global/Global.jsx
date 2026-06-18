import FeatureSection from "../../components/shared/FeatureSection";
import globalImage from "../../assets/images/global.png";

const Global = () => {
  return (
    <FeatureSection
      badge="Global Reach"
      title="The First Fully Global Job Board, Anywhere, Ever"
      description="RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be."
      image={globalImage}
      imageAlt="Global reach overview"
      className="pt-10 lg:pt-0"
    />
  );
};

export default Global;