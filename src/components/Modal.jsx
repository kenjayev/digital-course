import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Modal = ({ plan, closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [allSended, setAllSended] = useState(false);
  const [allData, setAllData] = useState({});

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!allData.telNumber && !allData.firstName) {
      return setAllData({
        telNumber: e.target.telNumber.value,
        firstName: e.target.firstName.value,
      });
    }
    setIsLoading(true);

    const file = e.target.screenPay.files[0];
    const token = "7922668080:AAEUM61mCz7R_pAAtf8mSi00g3xHNXtnAoM";
    const chat_ID = "617030856";
    const url = `https://api.telegram.org/bot${token}/sendPhoto`;

    const formData = new FormData();
    formData.append("chat_id", chat_ID);
    formData.append(
      "caption",
      `<b>${plan.toLowerCase()}:</b> \n<b>Ismi:</b> ${
        allData.firstName
      } \n<b>Tel:</b> <u>+998${allData.telNumber}</u>`
    );
    formData.append("parse_mode", "HTML");
    formData.append("photo", file);

    axios({
      url: url,
      method: "POST",
      data: formData,
    })
      .then(() => {
        toast.success("Xabaringiz yuborildi");
        setAllSended(true);
      })
      .catch(() => {
        toast.error("Yuborishda xatolik");
      })
      .finally(() => {
        setIsLoading(false);
      });
    e.target.reset();
  };

  const closeModalHandler = () => {
    closeModal(null);
  };

  return (
    <div className="fixed z-99 top-0 left-0 bottom-0 right-0 bg-transparent flex items-center justify-center">
      <div
        onClick={closeModalHandler}
        className="absolute top-0 left-0 bottom-0 right-0 bg-[#000000cf]"
      >
        <p
          className={`absolute top-7 right-7 min-w-4  w-4 h-4 min-h-4 sm:min-w-5 sm:min-h-5 md:w-7 md:h-7 origin-center text-3xl md:text-4xl rotate-45 cursor-pointer`}
        >
          <img
            className="min-w-4 min-h-4 sm:min-w-5 sm:min-h-5 md:w-7 md:h-7"
            src="/img/icon/plus.svg"
            alt=""
          />
        </p>
      </div>

      <div className="w-[90%] sm:w-[80%] md:w-[80%] lg:w-[60%] max-w-[610px] m-auto p-8 rounded-[10px] relative text-center text-white bg-gradient-to-r from-[#242633] to-[#2c2d2d]">
        {allSended ? (
          <>
            <p className="text-lg sm:text-xl lg:text-2xl mb-10">
              Kartalardan biriga to'lov qilib bo'lgan bo'lsangiz Adminga
              yozishingiz mumkin
            </p>
            <a
              href="https://t.me/kenjayevAzizbek"
              target="_blank"
              onClick={closeModalHandler}
              className="block w-full rounded-sm md:text-lg p-4 text-base text-center font-semibold uppercase bg-gold hover:bg-goldH hover:opacity-90 transition-all duration-150 text-black cursor-pointer"
            >
              Adminga yozish
            </a>
          </>
        ) : (
          <>
            <h2 className="font-semibold uppercase mb-2 md:mb-3 lg:mb-4 text-2xl sm:text-3xl">
              {plan} tarifini tanladingiz
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mb-10">
              Ma’lumotlaringizni qoldirganingizdan so’ng yopiq telegram kanalga
              a’zo bo’lasiz
            </p>
            <form
              onSubmit={sendMessage}
              className="w-full md:w-[85%] text-start m-auto"
            >
              {!allData.firstName ? (
                <SendUserData />
              ) : (
                <SendPayPhoto isLoading={isLoading} />
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;

const SendUserData = () => {
  return (
    <>
      <label className="mb-5 block">
        <span className="block text-base font-semibold mb-2 uppercase">
          Ism:
        </span>
        <input
          type="text"
          placeholder="Ismingiz"
          name="firstName"
          id="firstName"
          className="block w-full border-1 border-[#ccc] px-4 py-3 rounded-sm outline-none"
          required
        />
      </label>
      <label className="mb-5 block">
        <span className="block text-base font-semibold mb-2 uppercase">
          Telefon raqam:
        </span>
        <div className="flex gap-1 items-center w-full border-1 border-[#ccc] px-4 py-3 rounded-sm">
          <img
            className="w-[45px] mr-3 h-[30px]"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/UZ.svg"
            alt=""
          />
          <span>+998</span>
          <input
            type="number"
            name="telNumber"
            id="telNumber"
            className="w-full rounded-sm outline-none"
            placeholder="(94) 123-45-67"
            required
          />
        </div>
      </label>
      <button className="block w-full rounded-sm md:text-lg p-4 text-base text-center font-semibold uppercase bg-gold hover:bg-goldH hover:opacity-90 transition-all duration-150 text-black cursor-pointer">
        Keyingi qadam
      </button>
    </>
  );
};

const SendPayPhoto = ({ isLoading }) => {
  const [cardType, setCardType] = useState("humo");
  const changeCard = (e) => {
    setCardType(e.target.value);
  };
  return (
    <>
      <label className="mb-5 block">
        <span className="block text-base font-semibold mb-2 uppercase">
          Karta raqam:
        </span>
        <select
          name="cardType"
          id="cardType"
          onChange={changeCard}
          className="text-lg font-semibold block w-full border-1 border-[#ccc] px-4 py-3 mb-8 rounded-sm outline-none"
          defaultValue={"humo"}
          required
        >
          <option className="text-black font-semibold font-lg" value="humo">
            Humo
          </option>
          <option className="text-black font-semibold font-lg" value="uzcard">
            Uzcard
          </option>
        </select>
        <div className="mb-9">
          <div className="mb-2 flex justify-between items-center text-lg sm:text-xl md:text-3xl block w-full border-1 border-[#ccc] px-4 py-3 rounded-sm">
            <span>
              {cardType === "humo" && "9860246601489635"}
              {cardType === "uzcard" && "8600030426257592"}
            </span>
            <img src="/img/icon/chanel.svg" alt="" />
          </div>
          <p>Latifov Izzatbek</p>
        </div>
      </label>

      <label className="mb-5 block">
        <span className="block text-base font-semibold mb-2 uppercase">
          Pul o'tkazilganligi skrenshotini joylang:
        </span>
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          name="screenPay"
          id="screenPay"
          className="block w-full border-1 border-[#ccc] px-4 py-3 rounded-sm outline-none"
          required
        />
      </label>
      <button
        disabled={isLoading}
        className={`block w-full rounded-sm md:text-lg p-4 text-base text-center font-semibold uppercase bg-gold hover:bg-goldH hover:opacity-90 transition-all duration-150 text-black ${
          isLoading ? "cursor-wait" : "cursor-pointer"
        } `}
      >
        {isLoading ? "Loading..." : "Yuborish"}
      </button>
    </>
  );
};
