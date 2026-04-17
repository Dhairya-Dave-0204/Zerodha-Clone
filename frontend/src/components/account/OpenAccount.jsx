function OpenAccount() {
  return (
    <div className="px-4 py-8 mt-20 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl">
            Open a Zerodha account
          </h1>

          <p className="max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>

          <button className="px-8 py-2 mt-2 text-sm font-medium text-white duration-500 rounded-md cursor-pointer sm:px-14 sm:py-3 sm:text-base md:text-lg bg-secondary hover:scale-105 hover:bg-primary">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
