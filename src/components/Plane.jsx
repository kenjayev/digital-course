import { useState } from "react";
import Modal from "./Modal";

const Plane = () => {
  const [modalPlane, setModalPlane] = useState("premium");
  const bgGradient = "bg-gradient-to-r from-[#242633] to-[#2c2d2d]";
  return (
    <div className="pt-[40px]" id="coursePlan">
      {modalPlane && <Modal plan={modalPlane} closeModal={setModalPlane} />}
      <h2 className="text-center text-white font-semibold uppercase mb-6 md:mb-8 lg:mb-10 text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
        Ta'riflar
      </h2>
      <div className="max-w-[1100px] m-auto flex flex-wrap justify-center md:justify-between gap-5 sm:gap-7 md:gap-10 pt-16 px-10 md:px-12">
        <div className="relative flex flex-col justify-between w-full flex-1 min-w-[250px] sm:min-w-[250px] max-w-[350px] md:max-w-[380px] lg:max-w-[430px] lg:mx-8 p-5 md:px-8 mb-10 sm:mb-0 rounded-[20px] bg-white">
          <span
            style={{ letterSpacing: "2.5px" }}
            className={`absolute top-0 left-[50%] translate-y-[-50%] translate-x-[-50%] w-[70%] sm:w-[75%] md:-[80%] rounded-[10px] py-6 md:py-8 ${bgGradient} z-10 uppercase text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center`}
          >
            Standart
          </span>
          <div className="mt-[50px] mb-7">
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mb-1 mr-[10px] lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              Target online darsliklar
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mb-1 mr-[10px] lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              Kurator yordami
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mb-1 mr-[10px] lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              Yopiq guruhda savol-javoblar
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mb-1 mr-[10px] lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              Haftada 1 marta zoom uchrashuv
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mb-1 mr-[10px] lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              Eng yaxshi <span className="font-semibold">7 kishiga</span> loyiha
              beriladi
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mb-1 mr-[10px] lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              Eng yaxshi <span className="font-semibold">1 kishi</span> jamoaga
              olinadi
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mb-1 mr-[10px] lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              Kurs oxirida individual masterklass
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mr-2 mb-1 lg:w-[18px] lg:h-[18px]  "
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />{" "}
              <span className="font-semibold">BONUS</span> SMM instrumentlari va
              Tildada sayt tayyorlash
            </p>
          </div>
          <div className="text-center">
            <p className="line-through text-xl md:text-2xl lg:text-[25px] tracking-[3px]">
              2,000,000 so'm
            </p>
            <p className="text-3xl md:text-4xl font-semibold mb-4">
              400,000 so'm
            </p>
            <button
              onClick={() => setModalPlane("standart")}
              className="py-4 mb-3 block max-w-[300px] min-w-[210px] w-[80%] rounded-lg m-auto text-sm sm:text-base md:text-lg font-semibold uppercase bg-gold hover:bg-goldH hover:opacity-90 transition-all duration-150 text-white cursor-pointer"
            >
              standartni tanlash
            </button>
            <p className="uppercase text-lg">Onlayn: 300 ta joy</p>
          </div>
        </div>

        <div className="relative flex flex-col justify-between w-full flex-1 min-w-[250px] sm:min-w-[250px] max-w-[350px] md:max-w-[380px] lg:max-w-[430px] lg:mx-8 p-5 md:px-8 rounded-[20px] bg-white">
          <span
            style={{ letterSpacing: "2.5px" }}
            className={`flex justify-center items-center gap-[10px] absolute top-0 left-[50%] translate-y-[-50%] translate-x-[-50%] w-[70%] sm:w-[75%] md:-[80%] rounded-[10px] py-6 md:py-8 ${bgGradient} z-10 uppercase text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center`}
          >
            <img
              className="w-5 h-5 md:w-6 md:h-6 lg:w-[30px] lg:h-[30px]"
              src="/img/icon/premium.svg"
              alt="icon| premium icon"
            />
            Premium
          </span>
          <div className="mt-[50px] mb-7">
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mb-1 mr-[10px] lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              Target online darsliklar
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mb-1 mr-[10px] lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              Kurator yordami
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mb-1 mr-[10px] lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              Yopiq guruhda savol-javoblar
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mb-1 mr-[10px] lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              <span className="font-semibold">Izzatbek Targetolog</span> bilan
              offlayn dars
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mb-1 mr-[10px] lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              Muvaffaqqiyatli yakunlagan barchaga loyiha beriladi
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mb-1 mr-[10px] lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              Eng yaxshi <span className="font-semibold">3 kishi</span> jamoaga
              olinadi
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mb-1 mr-[10px] lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />
              Natijaga chiqishga <span className="font-semibold">100%</span>{" "}
              kafolat
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mr-2 mb-1 lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />{" "}
              <span className="font-semibold">BONUS</span> SMM instrumentlari va
              Tildada sayt tayyorlash
            </p>
            <p className="mb-2 md:text-lg lg:text-xl lg:leading-none md:mb-3 lg:mb-5">
              <img
                className="inline-block mr-2 mb-1 lg:w-[18px] lg:h-[18px]"
                src="/img/icon/tick.svg"
                alt="icon| tick✅"
              />{" "}
              <span className="font-semibold">Izzatbek Targetologdan</span>{" "}
              individual yordam
            </p>
          </div>
          <div className="text-center">
            <p className="line-through text-xl md:text-2xl lg:text-[25px] tracking-[3px]">
              3,000,000 so'm
            </p>
            <p className="text-3xl md:text-4xl font-semibold mb-4">
              1,000,000 so'm
            </p>
            <button
              onClick={() => setModalPlane("premium")}
              className="py-4 mb-3 block max-w-[300px] min-w-[210px] w-[80%] rounded-lg m-auto text-sm sm:text-base md:text-lg font-semibold uppercase bg-[#9163e7] text-white cursor-pointer"
            >
              Premiumni tanlash
            </button>
            <p className="uppercase text-lg">Onlayn: 20 ta joy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plane;
