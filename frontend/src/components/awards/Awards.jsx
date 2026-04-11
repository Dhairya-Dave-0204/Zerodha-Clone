import { largestBroker, pressLogos } from "../../assets/assets";

function Awards() {
  return (
    <div className="px-4 py-12 mt-10 sm:mt-24 sm:px-6 md:px-10 lg:px-16">
      <div className="grid items-center grid-cols-1 gap-10 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-16">
        
        <div className="flex justify-center order-2 lg:order-1">
          <img
            src={largestBroker}
            alt="Awards"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full"
          />
        </div>

        <div className="flex flex-col order-1 gap-5 text-center lg:text-left lg:order-2">
          
          <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Largest stock broker in India
          </h1>

          <p className="text-sm text-gray-600 sm:text-base md:text-lg">
            2+ Million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 sm:text-base">
            <ul className="space-y-2 list-disc list-inside">
              <li>Futures and Options</li>
              <li>Commodity Derivatives</li>
              <li>Currency Derivatives</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Stocks and IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Government Securities</li>
            </ul>
          </div>

          <div className="flex justify-center mt-4 lg:justify-start">
            <img
              src={pressLogos}
              alt="Press Logos"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Awards;