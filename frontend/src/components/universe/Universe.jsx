import React from "react";
import {
  zerodhaFundhouse,
  sensibullLogo,
  streakLogo,
  smallcaseLogo,
  dittoLogo,
  goldenpiLogo,
} from "../../assets/assets";

function Universe() {
  return (
    <div className="px-4 py-12 mt-16 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-xl font-medium leading-tight md:text-2xl lg:text-3xl">
          The Zerodha Universe
        </h1>
        <p className="mt-4 text-sm text-gray-600 sm:text-base md:text-lg">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl lg:mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <img
            src={zerodhaFundhouse}
            alt="Fundhouse"
            className="object-contain h-10"
          />
          <p className="max-w-xs text-sm leading-relaxed text-gray-500 sm:text-base">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <img
            src={sensibullLogo}
            alt="Sensibull"
            className="object-contain h-10"
          />
          <p className="max-w-xs text-sm leading-relaxed text-gray-500 sm:text-base">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <img
            src={goldenpiLogo}
            alt="Tijori"
            className="object-contain h-10"
          />
          <p className="max-w-xs text-sm leading-relaxed text-gray-500 sm:text-base">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <img src={streakLogo} alt="Streak" className="object-contain h-10" />
          <p className="max-w-xs text-sm leading-relaxed text-gray-500 sm:text-base">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <img
            src={smallcaseLogo}
            alt="Smallcase"
            className="object-contain h-10"
          />
          <p className="max-w-xs text-sm leading-relaxed text-gray-500 sm:text-base">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <img src={dittoLogo} alt="Ditto" className="object-contain h-10" />
          <p className="max-w-xs text-sm leading-relaxed text-gray-500 sm:text-base">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-12 sm:mt-16">
        <button className="px-6 py-3 font-medium text-white duration-500 rounded-md cursor-pointer sm:text-base bg-secondary hover:scale-105 hover:bg-primary">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
