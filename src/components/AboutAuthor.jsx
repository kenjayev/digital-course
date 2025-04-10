import React from "react";

const AboutAuthor = () => {
  const bgGradient = "bg-gradient-to-r from-[#242633] to-[#2c2d2d]";
  return (
    <div className="max-w-[1280px] m-auto p-2 sm:p-5 text-white">
      <div className="flex gap-5 items-center md:items-end justify-center flex-col md:flex-row">
        <div
          className={`${bgGradient} max-w-[470px] md:max-w-[560px] w-full p-5 py-7 md:p-7 flex-[1.2] rounded-[30px]`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-1 sm:mb-2">
            Latifov Izzatbek
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg uppercase mb-4 sm:mb-6 lg:mb-10"
            style={{ letterSpacing: "4px" }}
          >
            Professional Targetolog
          </p>
          <div className="flex gap-2 items-center mb-4 lg:mb-10">
            <span className="text-xl text-gold">Loyihalar</span>
            <div className="flex-1 border-gold border-1"></div>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-4 md:gap-5 lg:gap-10">
            <div className="flex items-center gap-2 md:gap-3">
              <img
                className="w-[40px] sm:w-[50px] lg:w-[60px] h-[40px] sm:h-[50px] lg:h-[60px] overflow-hidden rounded-full"
                src="/img/project_logo__1.jpg"
                alt=""
              />
              <span className="text-sm sm:text-base lg:text-xl font-semi00000bold">
                Anhorpark
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <img
                className="w-[40px] sm:w-[50px] lg:w-[60px] h-[40px] sm:h-[50px] lg:h-[60px] overflow-hidden rounded-full"
                src="/img/project_logo__1.jpg"
                alt=""
              />
              <span className="text-sm sm:text-base lg:text-xl font-semi00000bold">
                Cosmo Aesthet
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <img
                className="w-[40px] sm:w-[50px] lg:w-[60px] h-[40px] sm:h-[50px] lg:h-[60px] overflow-hidden rounded-full"
                src="/img/project_logo__1.jpg"
                alt=""
              />
              <span className="text-sm sm:text-base lg:text-xl font-semi00000bold">
                Ahad Qayum
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <img
                className="w-[40px] sm:w-[50px] lg:w-[60px] h-[40px] sm:h-[50px] lg:h-[60px] overflow-hidden rounded-full"
                src="/img/project_logo__1.jpg"
                alt=""
              />
              <span className="text-sm sm:text-base lg:text-xl font-semi00000bold">
                dermatology.uz
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <img
                className="w-[40px] sm:w-[50px] lg:w-[60px] h-[40px] sm:h-[50px] lg:h-[60px] overflow-hidden rounded-full"
                src="/img/project_logo__1.jpg"
                alt=""
              />
              <span className="text-sm sm:text-base lg:text-xl font-semi00000bold">
                Apple Nasiya
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <img
                className="w-[40px] sm:w-[50px] lg:w-[60px] h-[40px] sm:h-[50px] lg:h-[60px] overflow-hidden rounded-full"
                src="/img/project_logo__1.jpg"
                alt=""
              />
              <span className="text-sm sm:text-base lg:text-xl font-semi00000bold">
                Anhorpark
              </span>
            </div>

            <div></div>
          </div>
        </div>
        <div className="flex-1 relative max-w-[490px] lg:max-w-[550px] m-auto lg:m-0 rounded-[30px] overflow-hidden">
          <img className="opacity-50" src="/img/izzat_2.jpg" alt="" />
          <div className="w-[90%] absolute bottom-4 right-2">
            <p className="mb-2 font-semibold text-lg lg:text-xl lg:leading-none lg:mb-4">
              <img
                className="inline-block mb-1 mr-[10px] w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              3 yildan ortiq tajriba
            </p>
            <p className="mb-2 font-semibold text-lg lg:text-xl lg:leading-none lg:mb-4">
              <img
                className="inline-block mb-1 mr-[10px] w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              Applenasiya uzb ga 1 oyda 150,000$ savdo
            </p>
            <p className="mb-2 font-semibold text-lg lg:text-xl lg:leading-none lg:mb-4">
              <img
                className="inline-block mb-1 mr-[10px] w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              $300K reklamaga sarflangan byudjet
            </p>
            <p className="mb-2 font-semibold text-lg lg:text-xl lg:leading-none lg:mb-4">
              <img
                className="inline-block mb-1 mr-[10px] w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              50 dan ortiq proyektlar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
