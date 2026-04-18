function Footer() {
  const linkColumns = [
    {
      heading: "Account",
      links: [
        {
          label: "Open demat account",
          href: "https://zerodha.com/open-account/",
        },
        {
          label: "Minor demat account",
          href: "https://zerodha.com/open-account/minor/",
        },
        {
          label: "NRI demat account",
          href: "https://zerodha.com/open-account/nri/",
        },
        {
          label: "HUF demat account",
          href: "https://zerodha.com/open-account/huf/",
        },
        { label: "Commodity", href: "https://zerodha.com/commodities/" },
        {
          label: "Dematerialisation",
          href: "https://zerodha.com/dematerialise/",
        },
        { label: "Fund transfer", href: "https://zerodha.com/fund-transfer/" },
        { label: "MTF", href: "https://zerodha.com/mtf/" },
      ],
    },
    {
      heading: "Support",
      links: [
        { label: "Contact us", href: "https://zerodha.com/contact/" },
        { label: "Support portal", href: "https://support.zerodha.com" },
        { label: "How to file a complaint?", href: "#" },
        { label: "Status of your complaints", href: "#" },
        {
          label: "Bulletin",
          href: "https://zerodha.com/marketintel/bulletin/",
        },
        {
          label: "Circular",
          href: "https://zerodha.com/marketintel/circulars/",
        },
        { label: "Z-Connect blog", href: "https://zerodha.com/z-connect/" },
        { label: "Downloads", href: "https://zerodha.com/resources/" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "https://zerodha.com/about/" },
        { label: "Philosophy", href: "https://zerodha.com/about/philosophy/" },
        { label: "Press & media", href: "https://zerodha.com/media/" },
        { label: "Careers", href: "https://careers.zerodha.com/" },
        { label: "Zerodha Cares (CSR)", href: "https://zerodha.com/cares/" },
        { label: "Zerodha.tech", href: "https://zerodha.tech/" },
        { label: "Open source", href: "https://zerodha.com/open-source/" },
        { label: "Referral program", href: "https://zerodha.com/refer/" },
      ],
    },
    {
      heading: "Quick links",
      links: [
        { label: "Upcoming IPOs", href: "https://zerodha.com/ipo/" },
        { label: "Brokerage charges", href: "https://zerodha.com/charges/" },
        {
          label: "Market holidays",
          href: "https://zerodha.com/marketintel/holiday-calendar/",
        },
        {
          label: "Economic calendar",
          href: "https://zerodha.com/markets/calendar/",
        },
        { label: "Calculators", href: "https://zerodha.com/calculators/" },
        { label: "Markets", href: "https://zerodha.com/markets/stocks/" },
        { label: "Sectors", href: "https://zerodha.com/markets/sector/" },
        { label: "Gift Nifty", href: "https://zerodha.com/market/giftnifty/" },
      ],
    },
  ];

  const bottomLinks = [
    { label: "NSE", href: "https://nseindia.com" },
    { label: "BSE", href: "https://www.bseindia.com/" },
    { label: "MCX", href: "https://www.mcxindia.com/" },
    {
      label: "Terms & conditions",
      href: "https://zerodha.com/terms-and-conditions/",
    },
    {
      label: "Policies & procedures",
      href: "https://zerodha.com/policies-and-procedures/",
    },
    { label: "Privacy policy", href: "https://zerodha.com/privacy-policy/" },
    { label: "Disclosure", href: "https://zerodha.com/disclosure/" },
    {
      label: "For investor's attention",
      href: "https://zerodha.com/investor-attention/",
    },
    {
      label: "Investor charter",
      href: "https://zerodha.com/tos/investor-charter/",
    },
  ];

  return (
    <footer className="mt-20 text-sm text-gray-600 bg-white border-t border-gray-200 lg:mt-24">
      <div className="px-6 py-12 mx-auto max-w-7xl md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <img
              src="https://zerodha.com/static/images/logo.svg"
              alt="Zerodha"
              className="w-28"
            />

            <p className="text-xs leading-relaxed text-gray-500">
              © 2010 – 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://x.com/zerodha"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
              >
                <img
                  src="https://zerodha.com/static/images/x-twitter.svg"
                  alt="X"
                  className="w-5 h-5 duration-200 opacity-60 hover:opacity-100"
                />
              </a>
              <a
                href="https://www.youtube.com/@zerodhaonline"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <img
                  src="https://zerodha.com/static/images/youtube.svg"
                  alt="YouTube"
                  className="w-5 h-5 duration-200 opacity-60 hover:opacity-100"
                />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <img
                  src="https://zerodha.com/static/images/whatsapp-logo.svg"
                  alt="WhatsApp"
                  className="w-5 h-5 duration-200 opacity-60 hover:opacity-100"
                />
              </a>
            </div>
          </div>

          {linkColumns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h3 className="mb-1 text-sm font-semibold text-gray-900">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs leading-relaxed text-gray-500 duration-200 hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-8 mx-auto space-y-4 text-xs leading-relaxed text-gray-400 max-w-7xl md:px-10 lg:px-16">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE, MCX &amp; MSEI – SEBI
          Registration no.: INZ000031633 CDSL/NSDL: Depository services through
          Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
          Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
          Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
          560078, Karnataka, India. For any complaints pertaining to securities
          broking please write to{" "}
          <a
            href="mailto:complaints@zerodha.com"
            className="duration-200 hover:text-primary"
          >
            complaints@zerodha.com
          </a>
          , for DP related to{" "}
          <a
            href="mailto:dp@zerodha.com"
            className="duration-200 hover:text-primary"
          >
            dp@zerodha.com
          </a>
          . Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on{" "}
          <a
            href="https://scores.sebi.gov.in/"
            target="_blank"
            rel="noreferrer"
            className="duration-200 hover:text-primary"
          >
            SEBI SCORES
          </a>
          : Register on SCORES portal. Mandatory details for filing complaints
          on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
          Effective Communication, Speedy redressal of the grievances.
        </p>

        <p>
          <a
            href="https://smartodr.in/"
            target="_blank"
            rel="noreferrer"
            className="duration-200 hover:text-primary"
          >
            Smart Online Dispute Resolution
          </a>
          {" | "}
          <a
            href="https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/Smart%20ODR%20info.pdf"
            target="_blank"
            rel="noreferrer"
            className="duration-200 hover:text-primary"
          >
            Grievances Redressal Mechanism
          </a>
        </p>

        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p>
          India's largest broker based on networth as per NSE.{" "}
          <a
            href="https://enit.nseindia.com/MemDirWeb/brokerDetailPage_Beta?memID=2516&h_MemType=members&memName=ZERODHA%20BROKING%20LIMITED"
            target="_blank"
            rel="noreferrer"
            className="duration-200 hover:text-primary"
          >
            NSE broker factsheet
          </a>
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please{" "}
          <a
            href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-place-a-complaint-at-zerodha"
            target="_blank"
            rel="noreferrer"
            className="duration-200 hover:text-primary"
          >
            create a ticket here
          </a>
          .
        </p>

        <p>
          *Customers availing insurance advisory services offered by Ditto
          (Tacterial Consulting Private Limited | IRDAI Registered Corporate
          Agent (Composite) License No CA0738) will not have access to the
          exchange investor grievance redressal forum, SEBI SCORES/ODR, or
          arbitration mechanism for such products.
        </p>

        <p>
          Fixed deposit products offered on this platform are third-party
          products (TPP) and are not Exchange traded products. Zerodha Broking
          Limited (SEBI Registration No.: INZ000031633) is acting solely as a
          distributor for these products. Any disputes arising with respect to
          such distribution activity will not have access to SEBI SCORES/ODR,
          Exchange Investor Grievance Redressal Forum, or Arbitration mechanism.
          Fixed deposits are regulated by the Reserve Bank of India (RBI).
        </p>
      </div>

      <div className="border-t border-gray-200" />

      <div className="px-6 py-5 mx-auto max-w-7xl md:px-10 lg:px-16">
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {bottomLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-400 duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
