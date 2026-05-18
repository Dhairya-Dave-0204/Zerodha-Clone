import React from "react";

import {
  BarChartOutlined,
  AccountBalanceWalletOutlined,
  InsightsOutlined,
  CurrencyExchangeOutlined,
  SchoolOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

const Apps = () => {
  const appsData = [
    {
      title: "Kite",
      description:
        "Advanced trading platform with clean charts, market depth, and lightning-fast execution.",
      icon: <BarChartOutlined fontSize="large" />,
    },
    {
      title: "Console",
      description:
        "Portfolio analytics and reporting dashboard to track investments and trading performance.",
      icon: <InsightsOutlined fontSize="large" />,
    },
    {
      title: "Coin",
      description:
        "Commission-free direct mutual fund investments with seamless long-term wealth tracking.",
      icon: <AccountBalanceWalletOutlined fontSize="large" />,
    },
    {
      title: "Varsity",
      description:
        "Learn trading and investing through structured educational modules and market lessons.",
      icon: <SchoolOutlined fontSize="large" />,
    },
    {
      title: "Connect",
      description:
        "Powerful APIs for developers to build trading platforms and investment applications.",
      icon: <CurrencyExchangeOutlined fontSize="large" />,
    },
    {
      title: "Kill Switch",
      description:
        "Risk management tools to instantly disable trading segments and control exposure.",
      icon: <SecurityOutlined fontSize="large" />,
    },
  ];

  return (
    <div className="w-full">
      <div className="mb-10">
        <h1 className="text-3xl font-normal text-gray-700">Apps</h1>

        <p className="max-w-2xl mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
          Explore the ecosystem of trading, investing, analytics, and
          educational tools designed to simplify your financial journey.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {appsData.map((app, index) => (
          <div
            key={index}
            className="p-6 transition-all duration-200 bg-white border border-gray-200 cursor-pointer group hover:border-gray-300"
          >
            <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-gray-50 text-primary">
              {app.icon}
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-medium text-gray-700">{app.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {app.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-6">
              <button className="text-sm font-medium cursor-pointer text-primary hover:underline">
                Open App
              </button>

              <i className="text-lg text-gray-400 duration-200 cursor-pointer ri-arrow-right-line group-hover:text-primary"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
