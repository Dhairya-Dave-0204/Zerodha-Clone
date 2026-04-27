import { useState } from "react";

const accordionData = [
  {
    title: "How do I open an account?",
    content:
      "You can open an account online by completing the signup process and submitting the required documents. The process is fully digital and usually takes a few minutes.",
  },
  {
    title: "What are the brokerage charges?",
    content:
      "Equity delivery is free. Intraday and F&O trades are charged at ₹20 or 0.03% per order, whichever is lower.",
  },
  {
    title: "Is there any minimum balance required?",
    content:
      "No, there is no minimum balance required to open or maintain your account.",
  },
  {
    title: "How can I contact support?",
    content:
      "You can reach out via the support portal, raise a ticket, or browse FAQs for quick answers.",
  },
];

function RaiseTicket() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-12 mt-16 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-10 text-center sm:mb-12">
          <h2 className="text-xl font-medium md:text-2xl lg:text-3xl">
            Raise a Ticket
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Find answers to common questions or raise a support request.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-gray-200">
          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">

              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full py-5 text-left"
              >
                <span className="text-sm font-medium sm:text-base md:text-lg">
                  {item.title}
                </span>

                <i
                  className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                ></i>
              </button>

              {/* Content */}
              {openIndex === index && (
                <div className="pb-5 pr-6">
                  <p className="max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
                    {item.content}
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default RaiseTicket;