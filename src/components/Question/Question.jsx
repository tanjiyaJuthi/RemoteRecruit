const Question = () => {
    return (
        <div className="mx-auto max-w-334 py-35">
            <h2 className="text-[30px] lg:text-[40px] font-medium">Common Questions</h2>

            <div className="mt-15 space-y-10 text-[19px]">
                <div className="space-y-3">
                    <h3 className="font-medium">Do I have to sign a long-term contract?</h3>
                    <p className="text-[#6D6E7A]">Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party</p>
                </div>

                <div className="space-y-3">
                    <h3 className="font-medium">Can I pay for a whole year?</h3>
                    <p className="text-[#6D6E7A]">Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage</p>
                </div>

                <div className="space-y-3">
                    <h3 className="font-medium">What if I need help?</h3>
                    <p className="text-[#6D6E7A]">Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr</p>
                </div>
            </div>

            <button class="border-2 border-[#0d99ff] py-5 px-6 rounded-xl text-[12px] lg:text-[16px] mt-14">More Questions</button>
        </div>
    );
};

export default Question;