export default function Portfolio() {
  return (
    <section
      className="w-[1440px] h-[1173.53px] pt-[100px] pb-[100px] px-[100px] mx-auto flex flex-col gap-[44px] relative"
      aria-labelledby="portfolio-heading"
    >
      <header>
        <img
          src="/portfoliobutton.png"
          alt="portfolio btn img"
          className="w-[500px] h-[50px] mb-6"
        />
        <h1
          id="portfolio-heading"
          className="text-[54px] font-montserrat tracking-tight leading-tight font-thin mb-6"
        >
          Exceptional work <br />
          you deserve
        </h1>
        <div className="flex justify-end mt-[-100px] mb-11">
          <div className="w-[500px] h-[70px] max-w-[500px] pr-[80.84px] text-lg leading-tight font-montserrat">
            <p>
              From tech startups to healthcare giants, e-<br />
              commerce pioneers to edtech, we've left our <br />
              mark on diverse domains
            </p>
          </div>
        </div>
      </header>

      <ul className="grid grid-cols-3 gap-[54px] list-none">
        <li className="w-[398.66px] h-[398.85px] rounded-[25px] bg-gray-100 relative overflow-hidden">
          <img
            src="/picture1.png"
            alt="Slipery money project"
            className="w-[398.66px] h-[398.67px] absolute top-0 left-0 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 px-[40px] pb-[40px] pt-[40px] bg-opacity-80">
            <p className="text-xl font-montserrat leading-snug text-white">
              Slipery money -e- <br />
              commerce platform for high <br />
              risk industries
            </p>
          </div>
        </li>

        <li className="w-[398.66px] h-[398.85px] rounded-[25px] bg-gray-100 relative overflow-hidden">
          <img
            src="/picture2.png"
            alt="Hybrid capital"
            className="w-[398.66px] h-[398.67px] absolute top-0 left-0 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 px-[40px] pb-[40px] pt-[40px] bg-opacity-80">
            <p className="text-xl font-montserrat leading-snug text-white">
              Hybrid capital + digital <br />
              currency
            </p>
          </div>
        </li>

        <li className="w-[398.66px] h-[398.85px] rounded-[25px] bg-gray-100 relative overflow-hidden">
          <img
            src="/picture3.png"
            alt="Betero platform"
            className="w-[398.66px] h-[398.67px] absolute top-0 left-0 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 px-[40px] pb-[40px] pt-[40px] bg-opacity-80">
            <p className="text-xl font-montserrat leading-snug text-white">
              Betero - sports beting <br />
              platform
            </p>
          </div>
        </li>

        <li className="w-[398.66px] h-[398.85px] rounded-[25px] bg-gray-100 relative overflow-hidden">
          <img
            src="/picture4.png"
            alt="Exec wellness SaaS"
            className="w-[398.66px] h-[398.67px] absolute top-0 left-0 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 px-[40px] pb-[40px] pt-[40px] bg-opacity-80">
            <p className="text-xl font-montserrat leading-snug text-white">
              Exec - employees financial <br />
              wellness saas
            </p>
          </div>
        </li>

        <li className="w-[398.66px] h-[398.85px] rounded-[25px] bg-gray-100 relative overflow-hidden">
          <img
            src="/picture5.png"
            alt="Voltage energy"
            className="w-[398.66px] h-[398.67px] absolute top-0 left-0 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 px-[40px] pb-[40px] pt-[40px] bg-opacity-80">
            <p className="text-xl font-montserrat leading-snug text-white">
              Voltage - accessible clean <br />
              energy startup
            </p>
          </div>
        </li>

        <li className="w-[398.66px] h-[398.85px] rounded-[25px] bg-gray-100 relative overflow-hidden">
          <img
            src="/picture6.png"
            alt="Hyperbolic data"
            className="w-[398.66px] h-[398.67px] absolute top-0 left-0 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 px-[40px] pb-[40px] pt-[40px] bg-opacity-80">
            <p className="text-xl font-montserrat leading-snug text-white">
              Hyperbolic -a decentralized <br />
              data transmission startup
            </p>
          </div>
        </li>
      </ul>

      <img
        src="/seework.png"
        alt="See our work"
        className="w-[3000px] h-[50px] mb-20 mt-20"
      />
    </section>
  );
}

