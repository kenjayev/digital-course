const ContactForm = () => {
  return (
    <div className="pt-[70px] pb-5">
      <div className="max-w-[1280px] w-[80%] m-auto p-5 min-h-[500px] rounded-[10px] relative text-center text-white bg-gradient-to-r from-[#242633] to-[#2c2d2d]">
        <h2 className="font-semibold uppercase mb-2 md:mb-3 lg:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[42px]">
          Savollaringiz bormi
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mb-10">
          Ma’lumotlaringiz qoldiring, tez orada siz bilan bog’lanamiz
        </p>

        <form className="w-full text-start sm:w-[80%] md:w-[60%] lg:w-[45%] m-auto">
          <label className="mb-5 block">
            <span className="block text-base font-semibold mb-2 uppercase">
              Ism:
            </span>
            <input
              type="text"
              placeholder="Ismingiz"
              className="block w-full border-1 border-[#ccc] px-4 py-3 rounded-sm outline-none"
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
                className="w-full rounded-sm outline-none"
                placeholder="(94) 123-45-67"
              />
            </div>
          </label>
          <label className="mb-5 block">
            <span className="block text-base font-semibold mb-2 uppercase">
              Tarifni tanlang:
            </span>
            <select
              className="text-lg font-semibold block w-full border-1 border-[#ccc] px-4 py-3 rounded-sm outline-none"
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
