import React from "react";
import { nithinKamath } from "../../assets/assets";

function Teams() {
  return (
    <div className="px-4 py-12 mt-16 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-xl font-medium leading-tight md:text-2xl lg:text-3xl">
          Our Team
        </h1>
      </div>

      <div className="grid items-center grid-cols-1 gap-12 mt-16 sm:mt-20 lg:grid-cols-2 lg:gap-16 lg:max-w-5xl lg:mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <img
            src={nithinKamath}
            alt="Nithin Kamath"
            className="w-40 rounded-full sm:w-52 md:w-60 lg:w-64"
          />

          <div className="flex flex-col gap-1">
            <p className="text-base font-medium sm:text-lg">Nithin Kamath</p>
            <p className="text-sm text-gray-500 sm:text-base">Founder, CEO</p>
          </div>
        </div>

        <div className="flex flex-col max-w-xl gap-5 mx-auto text-sm leading-relaxed text-center text-gray-500 sm:text-base md:text-lg lg:mx-0 lg:text-left">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
        </div>
      </div>
    </div>
  );
}

export default Teams;
