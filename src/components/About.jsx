const About = () => {
  const aboutList = [
    {
      img: "https://izzatbek-digital-kurs.uz/assets/1-min-B86QVSei.png",
      title: "Maqsadli auditoriyani segmentatsiyalash",
      desc: "Istalgan biznes uchun maqsadli auditoriyani yaratish, mijoz portretini tuzish va segmentlarga ajratish",
    },
    {
      img: "https://izzatbek-digital-kurs.uz/assets/1-min-B86QVSei.png",
      title: "Noyob savdo taklifini yaratish",
      desc: "Biznes uchun noyob savdo taklifini yaratish va segmentlarga ajratish",
    },
    {
      img: "https://izzatbek-digital-kurs.uz/assets/1-min-B86QVSei.png",
      title: "Shaxsiy tajribaga asoslangan",
      desc: "Bitta kursda 2 yillik tajribani qo'lga kiritasiz va shaxsiy keyslarga ega bo'lasiz",
    },
    {
      img: "https://izzatbek-digital-kurs.uz/assets/1-min-B86QVSei.png",
      title: "Facebookda professional target",
      desc: "Business manager va Facebook Ads Manager orqali target reklamani professional ishga tushirish",
    },
    {
      img: "https://izzatbek-digital-kurs.uz/assets/1-min-B86QVSei.png",
      title: "Sayt tayyorlash va SMM darsliklari",
      desc: "Target uchun zarur bo’lgan fundamental bilimlar va natijani yaxshilash uchun instrumentlar",
    },
    {
      img: "https://izzatbek-digital-kurs.uz/assets/1-min-B86QVSei.png",
      title: "Xizmatlarni sotish",
      desc: "Targeting xizmatlaringizni mijozlarga sotish orqali daromad topish",
    },
  ];
  return (
    <div className="mt-18 pb-15">
      <h2 className="text-center text-white font-semibold uppercase mb-6 md:mb-8 lg:mb-10 text-2xl sm:text-3xl md:text-4xl">
        Kursda nimalarni o'rganasiz
      </h2>
      <div className="mb-10 max-w-[1280px] m-auto flex xl:grid grid-cols-3 flex-wrap justify-center gap-5 sm:gap-8 lg:gap-10 px-4 text-white">
        {aboutList.map(({ img, title, desc }) => (
          <div className="max-w-[250px] md:max-w-[325px] xl:max-w-[400px] w-full p-4 xl:p-5 border-[#6c6c6c] border-2 rounded-[10px] bg-gradient-to-r from-[#242633] to-[#2c2d2d]">
            <div className="w-[60px] sm:w-[70px] xl:w-[80px] h-[60px] sm:h-[70px] xl:h-[80px] flex justify-center items-center bg-gold rounded-[10px] mb-7 md:mb-8">
              <img src={img} alt="" />
            </div>
            <h5 className="uppercase font-semibold text-sm sm:text-[15] md:text-xl xl:text-2xl mb-2">
              {title}
            </h5>
            <p className="text-xs md:text-base">{desc}</p>
          </div>
        ))}
      </div>
      <a
        href="#coursePlan"
        className="block max-w-[300px] h-60px w-full rounded-lg m-auto md:text-lg p-4 text-lg text-center font-semibold uppercase bg-gold text-white cursor-pointer"
      >
        Kursga Yozilish
      </a>
    </div>
  );
};

export default About;
