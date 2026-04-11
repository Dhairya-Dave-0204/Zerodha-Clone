function Pricing() {
  return (
    <div className="px-4 py-12 mt-20 sm:px-6 md:px-10 lg:px-16">
      <div className="grid items-center grid-cols-1 gap-10 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Unbeatable pricing
          </h1>

          <p className="max-w-lg mx-auto text-sm text-gray-600 sm:text-base md:text-lg lg:mx-0">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <p className="mt-2 text-sm sm:text-base md:text-lg">
            See pricing
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 lg:justify-between">
          <div className="flex items-center gap-3 min-w-37.5">
            <i className="text-6xl ri-user-add-line sm:text-7xl text-secondary"></i>
            <p className="text-sm text-gray-600 sm:text-base">
              Free account opening
            </p>
          </div>

          <div className="flex items-center gap-3 min-w-37.5">
            <i className="text-6xl ri-exchange-line sm:text-7xl text-secondary"></i>
            <p className="text-sm text-gray-600 sm:text-base">
              ₹0 brokerage on delivery
            </p>
          </div>

          <div className="flex items-center gap-3 min-w-37.5">
            <i className="text-6xl ri-money-rupee-circle-line sm:text-7xl text-secondary"></i>
            <p className="text-sm text-gray-600 sm:text-base">
              Flat ₹20 for intraday
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;