import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const sendMessage = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const token = "7922668080:AAEUM61mCz7R_pAAtf8mSi00g3xHNXtnAoM";
    const chat_ID = "617030856";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // console.log(e.target.firstName.value);
    const firstName = e.target.firstName.value;
    const telNumber = e.target.telNumber.value;
    const option = e.target.tarif.value;
    if (option === "default") return toast.error("Tarifni ham tanlang");

    const text = `<b>${option}</b>: \n <b>Ismi:</b> ${firstName} \n <b>Tel:</b> <u>+${telNumber}</u> `;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_ID,
        text: text,
        parse_mode: "HTML",
      },
    })
      .then((res) => {
        toast.success("Xabaringiz yuborildi");
      })
      .catch((error) => {
        toast.error("Yuborishda xatolik");
      })
      .finally(() => {
        setIsLoading(false);
      });

    e.target.reset();
  };
  return (
    <div className="pt-[70px] pb-5">
      <div className="max-w-[1280px] w-[80%] m-auto p-5 min-h-[500px] rounded-[10px] relative text-center text-white bg-gradient-to-r from-[#242633] to-[#2c2d2d]">
        <h2 className="font-semibold uppercase mb-2 md:mb-3 lg:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[42px]">
          Savollaringiz bormi
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mb-10">
          Ma’lumotlaringiz qoldiring, tez orada siz bilan bog’lanamiz
        </p>

        <form
          onSubmit={sendMessage}
          className="w-full text-start sm:w-[80%] md:w-[60%] lg:w-[45%] m-auto"
        >
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
          <label className="mb-5 block">
            <span className="block text-base font-semibold mb-2 uppercase">
              Tarifni tanlang:
            </span>
            <select
              name="tarif"
              id="tarif"
              className="text-lg font-semibold block w-full border-1 border-[#ccc] px-4 py-3 rounded-sm outline-none"
              defaultValue={"default"}
              required
            >
              <option
                className="text-black font-semibold font-lg"
                disabled
                value="default"
              >
                Tarifni tanlang
              </option>
              <option
                className="text-black font-semibold font-lg"
                value="standart"
              >
                Standart
              </option>
              <option
                className="text-black font-semibold font-lg"
                value="premium"
              >
                Premium
              </option>
            </select>
          </label>
          <button className="block w-full rounded-sm md:text-lg p-4 text-base text-center font-semibold uppercase bg-gold text-black cursor-pointer">
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
