export default function Benefits() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 font-sans mt-[370px]">
      <header className="text-center mb-16">
        <img
          src="/benifitbtn.png"
          alt="benifit btn"
          className="w-[100px] block mx-auto mb-4"
        />
        <p className="text-6xl text-gray-300 font-thin">
          Unlock a world of design
          <br /> potential with us
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <article className="w-[405.66px] h-[351.75px] rounded-lg p-6 shadow">
          <img
            src="/48h.png"
            alt="Fast turnaround"
            className="w-full h-[215px] object-cover rounded-lg"
          />
          <div className="mt-6">
            <h3 className="text-xl font-light mb-2 text-white">Fast turnaround</h3>
            <p className="text-gray-600">
              Expect the first draft within 48-72 hours, from Monday to Saturday.
            </p>
          </div>
        </article>

        <article className="w-[398.66px] h-[341.75px] rounded-lg p-6 shadow">
          <img
            src="/chat1.png"
            alt="Unlimited requests"
            className="w-full h-[215px] object-cover rounded-lg"
          />
          <div className="mt-6">
            <h3 className="text-xl font-light mb-2 text-white">Unlimited requests</h3>
            <p className="text-gray-600">
              Enjoy the freedom of unlimited designs, tailored to meet your every need.
            </p>
          </div>
        </article>

        <article className="w-[398.66px] h-[341.75px] rounded-lg p-6 shadow">
          <img
            src="/chat2.png"
            alt="Always in sync"
            className="w-full h-[215px] object-cover rounded-lg"
          />
          <div className="mt-6">
            <h3 className="text-xl font-light mb-2 text-white">Always in sync</h3>
            <p className="text-gray-600">
              Stay in sync with real-time updates and seamless communication.
            </p>
          </div>
        </article>

        <article className="w-[398.66px] h-[341.75px] rounded-lg p-6 shadow">
          <img
            src="/chat3.png"
            alt="Design queue"
            className="w-full h-[215px] object-cover rounded-lg"
          />
          <div className="mt-6">
            <h3 className="text-xl font-light mb-2 text-white">Design queue</h3>
            <p className="text-gray-600">
              Track all your design requests in one organized place.
            </p>
          </div>
        </article>

        <article className="w-[398.66px] h-[341.75px] rounded-lg p-6 shadow">
          <img
            src="/chat4.png"
            alt="Expertise"
            className="w-full h-[215px] object-cover rounded-lg"
          />
          <div className="mt-6">
            <h3 className="text-xl font-light mb-2 text-white">Hello task management</h3>
            <p className="text-gray-600">
              Expertise in crafting designs that captivate and drive results.
            </p>
          </div>
        </article>

        <article className="w-[398.66px] h-[341.75px] rounded-lg p-6">
          <img
            src="/chat5.png"
            alt="Pricing"
            className="w-full h-[215px] object-cover rounded-lg"
          />
          <div className="mt-6">
            <h3 className="text-xl font-light mb-2 text-white">Worry free pricing</h3>
            <p className="text-gray-600">
              Get all your design needs covered for just $2,150/month.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
