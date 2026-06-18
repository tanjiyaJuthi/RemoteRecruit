import globalImage from "../../assets/images/global.png";

const Global = () => {
    return (
        <div className="max-w-334  mx-auto global-reach-wrapper grid grid-cols-1 lg:grid-cols-2 lg:gap-29 px-5 lg:px-0 py-25 items-center">
            <div className="global-reach-content max-w-[500px] space-y-9">
                <p className="text-[12px] bg-[#c2eeff] rounded-full py-5 px-4.5 inline-block">Global Reach</p>

                <h2 className="text-2xl md:text-4xl">
                    The First Fully Global Job Board, Anywhere, Ever
                </h2>

                <p className="text-[15px] md:text-[20px] text-[#11142D]/64">RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.</p>
            </div>

            <div className="global-reach-img">
                <img src={globalImage} alt="Global reach overview" />
            </div>
        </div>
    );
};

export default Global;