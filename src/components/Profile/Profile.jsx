import profile from "../../assets/images/profile.png";

const Profile = () => {
    return (
        <div className="max-w-334  mx-auto global-reach-wrapper grid grid-cols-1 lg:grid-cols-2 lg:gap-29 px-5 lg:px-0 items-center">
            <div className="global-reach-content max-w-[500px] space-y-9">
                <p className="text-[12px] bg-[#c2eeff] rounded-full py-5 px-4.5 inline-block">Custom Profile</p>

                <h2 className="text-2xl md:text-4xl">
                    Showcase Your Talents
                </h2>

                <p className="text-[15px] md:text-[20px] text-[#11142D]/64">Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.</p>
            </div>

            <div className="global-reach-img">
                <img src={profile} alt="Global reach overview" />
            </div>
        </div>
    );
};

export default Profile;