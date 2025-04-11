import React from "react";

const Header = () => {
  return (
    <div className="bg-black text-white w-full">
      {/* Container */}
      <div className="w-full max-w-[1280px] m-auto">
        {/* icon service */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full flex-[1.2] lg:pl-8">
            <div className="w-full mb-6 flex lg:gap-10 lg:justify-start justify-around md:from-transparent md:to-transparent bg-gradient-to-r from-[#242633] to-[#2c2d2d]">
              <div className="p-5 pr-3 md:px-[13px] ml-4 lg:ml-0 w-full max-w-[220px] md:max-w-[210px] rounded-md text-customWhite relative md:from-[#242633] md:to-[#2c2d2d] bg-gradient-to-r from-transparent to-transparent">
                <img
                  className="absolute top-[30%] left-[-15px] border border-[#aaa] rounded-[10px] p-[7px] md:p-8px w-[32px] md:w-[36px] h-[32px] md:h-[36px] bg-gradient-to-r from-[#242633] to-[#2c2d2d]"
                  src="/img/icon/data.svg"
                  alt=""
                />
                <p className="text-[12px] sm:text-[16px] md:text-[18px] ml-2 md:ml-4">
                  Individual{" "}
                  <span className="font-semibold">Target online</span> kursi
                </p>
              </div>
              <div className="p-5 pr-3 md:px-[13px] ml-3 w-full max-w-[200px] md:max-w-[230px] rounded-md text-customWhite relative md:from-[#242633] md:to-[#2c2d2d] bg-gradient-to-r from-transparent to-transparent">
                <img
                  className="absolute top-[30%] left-[-15px] border border-[#aaa] rounded-[10px] p-[7px] md:p-8px w-[32px] md:w-[36px] h-[32px] md:h-[36px] bg-gradient-to-r from-[#242633] to-[#2c2d2d]"
                  src="/img/icon/data.svg"
                  alt=""
                />
                <p className="text-[12px] sm:text-[16px] md:text-[18px] ml-2 md:ml-4">
                  Kurs boshlanishi sanasi{" "}
                  <span className="font-semibold">30-may</span>
                </p>
              </div>
            </div>
            <div className="max-w-[550px] m-auto w-full text-center md:text-start md:max-w-none md:px-6 lg:px-0 px-2">
              <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl mb-2 font-semibold">
                Targeting <span className="underline">0 dan pro</span>{" "}
                darajagacha
              </h1>
              <p className="text-gold text-xl md:text-3xl mb-6">
                Onlayn + Individual kurs
              </p>
              <p
                style={{ letterSpacing: "2px" }}
                className="line-through text-lg md:text-2xl tracking-[3px]"
              >
                2,000,000 so'm
              </p>
              <p className="text-3xl md:text-4xl font-semibold mb-6">
                400,000 so'm
              </p>
              <div className="hidden sm:flex flex-col items-center md:items-start">
                <a
                  href="#coursePlan"
                  className="max-w-[60%] w-full rounded-lg mb-2 m-auto md:mx-0 p-4 md:max-w-[77%] lg:max-w-[60%] text-base md:text-lg lg:text-xl text-center font-semibold uppercase bg-gold cursor-pointer"
                >
                  Ro'yhatdan o'tish
                </a>
                <p className="text-sm lg:text-base max-w-[450px] md:max-w-[77%] lg:max-w-[60%] px-4 md:px-1 md:mx-0 w-full m-auto text-center">
                  Ma’lumotlaringizni qoldirganingizdan so’ng mutaxasisslarimiz
                  siz bilan bog'lanishadi
                </p>
              </div>
            </div>
          </div>
          <div className="relative max-w-[550px] m-auto md:max-w-none flex-1">
            <img
              className="w-full block opacity-50"
              src="/img/izzat_2.jpg"
              alt=""
            />
            <div className="absolute bottom-1 w-full text-center">
              <h3 className="text-2xl sm:text-3xl font-bold uppercase">
                Latifov Izzatbek
              </h3>
              <p className="text-sm sm:text-lg mb-5 uppercase">
                Professional Targetolog
              </p>
              <div className="mb-5 flex flex-col sm:hidden">
                <a
                  href="#coursePlan"
                  className="max-w-[50%] min-w-[190px] w-full rounded-lg mb-1 m-auto p-3 text-sm font-semibold uppercase bg-gold text-black"
                >
                  Ro'yhatdan o'tish
                </a>
                <p className="px-4 text-sm max-w-[450px] w-full m-auto">
                  Ma’lumotlaringizni qoldirganingizdan so’ng mutaxasisslarimiz
                  siz bilan bog'lanishadi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
