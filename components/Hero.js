export default function Hero({ partial = false }) {
  return (
    <section
      className={`${
        partial ? "" : "bg-black/20 "
      } text-white flex flex-col justify-center items-center gap-4 text-center px-4`}
    >
      <div className="border border-white rounded-2xl p-2 inline-block">
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="font-semibold">5.0</span>
          <img src="/Container.png" alt="stars" className="h-4 w-auto" />
          <span className="text-xs text-gray-300">11 reviews</span>
        </div>
      </div>

      <h1 className="text-lg md:text-6xl leading-tight font-montserrat font-medium">
        Partner with a Full-Service <br />
        Design Team for All Your <br />
        Creative Needs
      </h1>

      <p className="text-sm text-gray-300 mt-2">
        Skip the hassle of finding the perfect full-time designer or studio
      </p>

      <img
        src="/contact.png"
        alt="Connect us"
        className="h-12 w-auto cursor-pointer mt-4"
      />
    </section>
  );
}





