import membershipFee from "../../assets/images/membership-fee.png";

const Membership = () => {
    return (
        <div className="max-w-334  mx-auto membership-wrapper grid grid-cols-1 lg:grid-cols-2 lg:gap-29 px-5 lg:px-0 items-center">
            <div className="membership-img">
                <img src={membershipFee} alt="Global reach overview" />
            </div>
            
            <div className="membership-content max-w-[500px] space-y-9">
                <p className="text-[12px] bg-[#c2eeff] rounded-full py-5 px-4.5 inline-block">Actually Fee Free</p>

                <h2 className="text-2xl md:text-4xl">
                    Fee-Free Forever
                </h2>

                <p className="text-[15px] md:text-[20px] text-[#11142D]/64">We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved.</p>
            </div>
        </div>
    );
};

export default Membership;