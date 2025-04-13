import React, { useState } from "react";

export default function FrequentlyAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const frequentlyAQList = [
    {
      question: "Bo'lib to'lash bormi?",
      answer: 'Faqat PREMIUM" tarifida mavjud',
    },
    {
      question: "Qanday ko'nikmalarga ega bo'lasiz?",
      answer:
        "Targetingni 0 dan mustaqil daromad qiladigan darajada o'rganasiz",
    },
    {
      question: "O'quvchilar qanday natijalarga erishishadi?",
      answer:
        "A nuqta Targetda hech qanday bilim mavjud emas B nuqta mustaqil daromad qilish",
    },
    {
      question: "Qanday kafolat berasiz?",
      answer: "FKursdan sizga ma’qul kelmay qolsa pulingiz 100% qaytariladi",
    },
  ];
  const openQuestion = (indx) => {
    if (openIndex === indx) return setOpenIndex(-1);
    setOpenIndex(indx);
  };
  const myClasses = {
    hiddenAnswer: "opacity-50 max-h-0 transition-all duration-250 ease-linear",
    openAnswer:
      "opacity-100 max-h-10 sm:max-h-12 md:max-h-13 xl:max-h- transition-all duration-250 ease-linear",
  };
  return (
    <div className="pt-[70px] pb-[50px] text-white">
      <h2 className="font-semibold text-center uppercase mb-6 sm:mb-6 md:mb-7 lg:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-[42px]">
        Tez tez beriladigan savollar
      </h2>
      <div className="max-w-[1280px] w-[90%] sm:w-[80%] md:w-[65%] lg:w-[55%] m-auto border-t-1 border-white">
        {frequentlyAQList.map((item, indx) => (
          <div
            key={item.question}
            className="py-2 pb-3 border-b-1 border-white"
          >
            <div
              className="flex justify-between items-center gap-5 pt-3 pb-2 px-2 cursor-pointer"
              onClick={() => openQuestion(indx)}
            >
              <p className="text-xl sm:text-2xl md:text-[27px] lg:text-[30px] font-semibold inline">
                {item.question}
              </p>
              {/* To'g'irlash kerak bo'lgan joy */}
              <p
                className={`min-w-4  w-4 h-4 min-h-4 sm:min-w-5 sm:min-h-5 md:w-7 md:h-7 origin-center transition-all duration-250 ease-linear text-3xl md:text-4xl ${
                  openIndex === indx ? "rotate-135" : "rotate-0"
                }`}
              >
                <img
                  className="min-w-4 min-h-4 sm:min-w-5 sm:min-h-5 md:w-7 md:h-7"
                  src="/img/icon/plus.svg"
                  alt=""
                />
              </p>
            </div>
            <p
              className={`px-2 text-customWhite text-sm sm:text-base md:text-xl overflow-hidden transition-all duration-250 ease-linear ${
                openIndex === indx
                  ? myClasses.openAnswer
                  : myClasses.hiddenAnswer
              }`}
            >
              - {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
