import { education } from "../../assets/assets";

function Education() {
  return (
    <div className="px-4 py-12 mt-10 sm:mt-16 sm:px-6 md:px-10 lg:px-16">
      <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-328 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="flex justify-center order-2 lg:order-1">
          <img
            src={education}
            alt="Awards"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col order-1 gap-6 text-center lg:text-left lg:order-2">

          <h1 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Free and open market education
          </h1>

          <p className="max-w-xl mx-auto text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg lg:mx-0">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <p className="text-sm font-medium cursor-pointer text-secondary sm:text-base hover:underline">
            Varsity
          </p>

          <p className="max-w-xl mx-auto text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg lg:mx-0">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <p className="text-sm font-medium cursor-pointer text-secondary sm:text-base hover:underline">
            TradingQ&A
          </p>

        </div>
      </div>
    </div>
  );
}

export default Education;