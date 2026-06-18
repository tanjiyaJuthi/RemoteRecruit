const questions = [
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
  {
    question: "Can I pay for a whole year?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage",
  },
  {
    question: "What if I need help?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr",
  },
];


const Question = () => {
  return (
    <section className="mx-auto my-15 max-w-334 px-5 lg:my-35 lg:px-0">
      <h2 className="text-2xl font-medium md:text-4xl lg:text-[40px]">
        Common Questions
      </h2>

      <div className="mt-10 space-y-10 text-[19px] lg:mt-15">
        {questions.map((item, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-[14px] font-medium md:text-[16px]">
              {item.question}
            </h3>

            <p className="text-[14px] text-[#6D6E7A] md:text-[16px]">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-14 rounded-xl border-2 border-[#0d99ff] px-6 py-5 text-[12px] lg:text-[16px]">
        More Questions
      </button>
    </section>
  );
};

export default Question;