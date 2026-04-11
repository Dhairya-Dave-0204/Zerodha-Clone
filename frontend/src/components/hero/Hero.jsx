import { homeHero } from "../../assets/assets";

function Hero() {
  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto text-center">
        <img
          src={homeHero}
          alt="Hero"
          className="w-full max-w-sm mx-auto mb-8 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl"
        />

        <div className="flex flex-col items-center gap-4">
          
          <h1 className="text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl">
            Invest in Everything
          </h1>

          <p className="max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>

          <button className="px-8 py-2 mt-2 text-sm font-medium text-white duration-500 rounded-md cursor-pointer sm:px-14 sm:py-3 sm:text-base md:text-lg bg-secondary hover:scale-105 hover:bg-primary">
            Register Now
          </button>

        </div>
      </div>
    </div>
  );
}

export default Hero;