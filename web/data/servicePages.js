// Detail pages for the highest-intent services. Copy is general and factual: no prices,
// guarantees or fixed deadlines (those change by year and by case).
// `module` must match a title in HUB_CATEGORIES (data/categories.js); `listed` is the matching
// entry in that module's services list, used to link from the module page.
export const SERVICE_PAGES = [
  {
    slug: "gst-registration",
    name: "GST Registration",
    h1: "GST Registration in Kolkata",
    module: "GST Compliance",
    listed: "GST Registration",
    metaTitle: "GST Registration in Kolkata | Income N Filing",
    metaDescription:
      "GST registration in Kolkata for traders, service providers, e-commerce sellers and companies, including the 3-day simplified route where you qualify. We prepare the application and track it until your GSTIN is issued.",
    intro:
      "We handle GST registration from application to GSTIN. One person prepares the application and another checks it before it is submitted. Where you qualify, we also use the simplified Rule 14A route, which targets registration within three working days.",
    whoNeeds: [
      "Businesses whose turnover crosses the registration limit",
      "Anyone supplying goods or services to another state",
      "Sellers on e-commerce platforms",
      "Businesses that must register for other reasons, such as paying tax under reverse charge",
      "Anyone who wants to register voluntarily, for example to claim input tax credit or to sell to larger buyers",
    ],
    sections: [
      { h: "Simplified registration under Rule 14A", text: "Rule 14A is an optional scheme for small taxpayers, in force since 1 November 2025.", items: [
        "It is for businesses whose monthly output tax liability on supplies to registered persons will not exceed ₹2.5 lakh.",
        "If you qualify, registration is granted electronically within three working days of the application reference number (ARN), after successful Aadhaar authentication.",
        "Aadhaar authentication is needed for the primary authorised signatory and at least one promoter or partner.",
        "If you do not qualify, your application goes through the regular route. That can take longer and can involve queries from the officer.",
        "You can withdraw from the scheme later, but only after meeting the return-filing conditions. We explain these before you opt in.",
        "It is not a composition scheme and it does not lower your tax rate.",
      ], note: "We check whether you qualify and tell you before we apply." },
      { h: "Documents to keep ready", items: [
        "PAN and Aadhaar of the owner, partners or directors",
        "Passport-size photographs",
        "Proof of business address (electricity bill, rent agreement or property papers)",
        "Bank account proof (cancelled cheque or statement)",
        "Constitution proof: partnership deed, or incorporation certificate for a company or LLP",
        "Authorisation letter and ID of the authorised signatory, where it applies",
        "A mobile number and email you control, because the OTPs go there",
      ] },
      { h: "How it works", ordered: true, items: [
        "You share documents on WhatsApp or the form.",
        "We confirm the scope in writing and check whether you qualify for Rule 14A.",
        "One person prepares the application and a second person checks it.",
        "You approve it, and we submit it on the GST portal with OTP verification and Aadhaar authentication.",
        "We track the application, reply to any query from the officer, and send you the GSTIN and certificate.",
      ] },
      { h: "Timeline", items: [
        "Rule 14A cases: up to three working days after Aadhaar authentication.",
        "Other cases: it depends on your documents and on whether the officer raises a query or asks for a physical verification.",
        "We give you the expected date when we confirm the scope.",
      ] },
      { h: "What affects the fee", items: [
        "The type of entity: proprietor, partnership, company or LLP",
        "The number of places of business",
        "Whether your address documents are in order",
        "Any query or notice during the process",
      ], note: "The fee is fixed and quoted in writing before we start. The government does not charge for GST registration." },
      { h: "Common mistakes to avoid", items: [
        "Address proof that does not match the business address",
        "Name differences between PAN, Aadhaar and bank records",
        "Choosing the wrong business activity or HSN/SAC code",
        "Giving a mobile number or email you do not control",
        "Choosing the simplified route without checking your expected monthly tax liability",
        "Ignoring an officer's query within the reply time",
        "Not registering in time after crossing the limit",
      ] },
      { h: "After registration", text: "You must file GST returns on time, even when there are no sales. We also offer monthly GST return filing and bookkeeping; see the related services below." },
      { h: "In Kolkata", text: "We are based in Kasba, Kolkata and register businesses across West Bengal and India. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00." },
    ],
    faqs: [
      { q: "Is GST registration mandatory for me?", a: "It depends on your turnover, what you supply and where you supply it. Send us your details and we will tell you." },
      { q: "Can I register voluntarily?", a: "Yes, even if you are below the limit. Some businesses do this to claim input tax credit or to work with larger buyers." },
      { q: "What is Rule 14A and do I qualify?", a: "It is an optional simplified route for businesses whose monthly output tax liability on supplies to registered persons will not exceed ₹2.5 lakh. It needs Aadhaar authentication, and eligible applicants can be registered within three working days. We check this before applying." },
      { q: "How long does registration take?", a: "Up to three working days for eligible Rule 14A applicants after Aadhaar authentication. Other applications depend on documents and officer queries. We give you an expected date at the start." },
      { q: "What is a GSTIN?", a: "It is the 15-digit number issued to every registered business." },
      { q: "Do I need a separate registration for each state?", a: "Yes. A business needs a registration in each state where it operates." },
      { q: "Can I use my home as the business address?", a: "Often yes, with proof of address and the owner's consent. We check your documents." },
      { q: "What if the officer raises a query or rejects my application?", a: "We help you reply within the allowed time." },
      { q: "What if you make a mistake?", a: "We tell you, fix it, and cover any penalty or late fee that arises from our error, provided you gave accurate documents on time. Terms apply." },
    ],
  },
  {
    slug: "gst-return-filing",
    name: "GST Return Filing (GSTR-1 & GSTR-3B)",
    h1: "GST Return Filing in Kolkata",
    module: "GST Compliance",
    listed: "GSTR-3B Filing",
    metaTitle: "GST Return Filing in Kolkata | Income N Filing",
    metaDescription:
      "GST return filing in Kolkata: GSTR-1, GSTR-3B, QRMP, composition and annual returns. We reconcile your data, one person prepares and another checks, and we file before the due date.",
    intro:
      "We prepare and file GST returns for traders, manufacturers, service providers and e-commerce sellers. We match your sales and purchase records with the GST portal, one person prepares the return and another checks it, and we file before the due date.",
    whoNeeds: [
      "Every GST-registered business, including those with no sales in a month",
      "Businesses that want to avoid late fees and interest",
      "Businesses behind on returns that want to catch up",
      "Sellers whose buyers depend on timely filing to claim input tax credit",
      "Businesses with several GST registrations or states",
    ],
    sections: [
      { h: "Which returns you file", items: [
        "GSTR-1: details of your sales. Monthly, or quarterly under QRMP.",
        "GSTR-3B: summary return and tax payment. Monthly, or quarterly under QRMP.",
        "IFF: optional invoice upload for QRMP filers in the first two months of a quarter.",
        "PMT-06: monthly tax payment for QRMP filers.",
        "CMP-08 and GSTR-4: quarterly statement and annual return for composition taxpayers.",
        "GSTR-9 and GSTR-9C: the annual return and reconciliation statement. Whether they are required depends on your turnover.",
      ], note: "Filing is required even when there is no business activity. We tell you which returns apply to you. Due dates and thresholds can change by notification, so we check the portal before filing." },
      { h: "Usual due dates", items: [
        "GSTR-1, monthly: 11th of the next month",
        "GSTR-3B, monthly: 20th of the next month",
        "GSTR-1, QRMP: 13th of the month after the quarter",
        "GSTR-3B, QRMP: 22nd or 24th of the month after the quarter, depending on your state",
      ], note: "The government sometimes extends these dates. We follow the notifications and tell you the date that applies." },
      { h: "Monthly or quarterly: the QRMP scheme", items: [
        "QRMP means you file returns quarterly and pay tax monthly.",
        "It is open to taxpayers with aggregate turnover up to ₹5 crore who have filed their last due GSTR-3B.",
        "It reduces the number of filings, but you still pay tax every month.",
        "We help you decide whether to opt in, and handle the monthly payments.",
      ] },
      { h: "Documents and data to keep ready", items: [
        "Sales invoices, including credit and debit notes",
        "Purchase invoices and the GSTR-2B statement from the portal",
        "Bank statements for the period",
        "E-way bill and e-commerce statements, where they apply",
        "Details of any advance received, exports or reverse charge items",
        "Previous returns, if we are taking over from another consultant",
      ] },
      { h: "How it works", ordered: true, items: [
        "You share your sales and purchase data on WhatsApp, in Tally or in Excel.",
        "We confirm the scope and the returns that apply, in writing.",
        "One person prepares the returns and reconciles your input tax credit with GSTR-2B.",
        "A second person checks the figures before filing, and you approve them.",
        "We help you pay the tax, file on the portal, and send you the acknowledgement.",
      ] },
      { h: "Timeline", text: "We file within the due date, provided your data reaches us in time. For regular monthly clients we agree a fixed date each month for sending data. For clients behind on returns, we give a catch-up plan when we confirm the scope." },
      { h: "What affects the fee", items: [
        "The number of invoices and transactions each month",
        "Monthly or quarterly filing",
        "The number of GST registrations",
        "Whether your books are ready or need cleaning up first",
        "The number of pending returns, if you are behind",
      ], note: "The fee is fixed and quoted in writing before we start. Government charges, such as late fees and interest, are separate." },
      { h: "Late fee and interest", items: [
        "The usual late fee for GSTR-1 and GSTR-3B is ₹50 per day, or ₹20 per day for a nil return, up to a cap.",
        "Interest is charged at 18% a year on tax paid late.",
        "Late fee and interest are two separate charges.",
        "Continued non-filing can lead to suspension or cancellation of registration.",
      ], note: "Rates and caps come from government notifications. Check the portal for what applies to you." },
      { h: "Common mistakes to avoid", items: [
        "Claiming input tax credit that does not appear in GSTR-2B",
        "Mismatch between GSTR-1 sales and GSTR-3B",
        "Forgetting to file a nil return",
        "Paying tax late even though the return was filed on time",
        "Entering the wrong GSTIN or invoice number",
        "Ignoring a notice or reminder from the portal",
        "Waiting until the last day, when the portal is slow",
      ] },
      { h: "In Kolkata", text: "We are based in Kasba, Kolkata and file GST returns for clients across West Bengal and India. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00." },
    ],
    faqs: [
      { q: "Do I have to file if I had no sales?", a: "Yes. You file a nil return. The late fee for a nil return is lower, but it still applies." },
      { q: "What is the difference between GSTR-1 and GSTR-3B?", a: "GSTR-1 lists your sales. GSTR-3B is the summary return where you claim credit and pay the tax." },
      { q: "What is QRMP?", a: "A scheme where you file returns quarterly and pay tax monthly. It is open to taxpayers with turnover up to ₹5 crore who have filed their last due GSTR-3B." },
      { q: "What happens if I file late?", a: "You pay a late fee for each day, up to a cap, and 18% a year interest on any tax paid late." },
      { q: "Can I claim input tax credit on all my purchases?", a: "No. Credit depends on your supplier filing and on the rules for each type of purchase. We reconcile with GSTR-2B before filing." },
      { q: "I have not filed for several months. Can you help?", a: "Yes. We prepare a catch-up plan, file the pending returns in order, and tell you the late fee and interest in advance." },
      { q: "Do I need to file an annual return?", a: "It depends on your turnover and your registration type. We confirm this each year." },
      { q: "I received a GST notice. Can you help?", a: "Yes. We help you read it and prepare a reply." },
      { q: "What if you make a mistake in my return?", a: "We tell you, fix it, and cover any penalty or late fee that arises from our error, provided you gave accurate data on time. Terms apply." },
    ],
  },
  {
    slug: "gst-notice-reply",
    name: "GST Notice Reply",
    module: "GST Compliance",
    listed: "GST Notice Reply",
    metaTitle: "GST Notice Reply Help in Kolkata | Income N Filing",
    metaDescription:
      "Received a GST notice? We read it, identify the issue and prepare a reply with supporting documents within the time stated in the notice.",
    intro:
      "A GST notice usually points to a mismatch, a missed return or a query on your records. The reply has a time limit, so the first step is to understand exactly what the department is asking. We review the notice, collect the supporting records and prepare the response.",
    whoNeeds: [
      "Businesses that received a show-cause, scrutiny or mismatch notice",
      "Taxpayers told that returns do not match their credit or sales data",
      "Businesses with a pending notice and no one to answer it",
    ],
    included: [
      "Review of the notice, the section invoked and the period involved",
      "Matching of your returns and books against the department’s claim",
      "Drafting of the reply with supporting documents",
      "Filing of the reply on the GST portal",
      "Guidance on next steps if a hearing is called",
    ],
    faqs: [
      {
        q: "How soon should I respond to a GST notice?",
        a: "Every notice states its own reply period. Share it with us as soon as you receive it so there is enough time to gather records.",
      },
      {
        q: "What should I send you first?",
        a: "A copy of the notice, your filed returns for the period named in it, and the related invoices or ledgers.",
      },
    ],
  },
  {
    slug: "private-limited-company-registration",
    name: "Private Limited Company Registration",
    module: "Incorporation & Registrations",
    listed: "Private Limited Company",
    metaTitle: "Pvt Ltd Company Registration in Kolkata | Income N Filing",
    metaDescription:
      "Register a private limited company with name approval, incorporation filing, PAN and TAN, handled end to end by Income N Filing.",
    intro:
      "A private limited company is a separate legal entity with limited liability for its shareholders, and it is the usual structure for startups that plan to raise investment. We handle name approval, the incorporation filing and the documents that come with it.",
    whoNeeds: [
      "Startups planning to bring in investors",
      "Founders who want limited liability and a separate legal identity",
      "Existing proprietors or partnerships moving to a company structure",
    ],
    included: [
      "Name availability check and name reservation",
      "Digital signatures and director identification numbers where needed",
      "Drafting of the memorandum and articles of association",
      "Incorporation filing with the Registrar of Companies",
      "Certificate of Incorporation, PAN and TAN",
    ],
    faqs: [
      {
        q: "How many directors and shareholders do I need?",
        a: "A private limited company needs at least two directors and two shareholders, and the same persons can hold both roles. At least one director must be resident in India.",
      },
      {
        q: "What happens after incorporation?",
        a: "The company must start annual compliance, including ROC filings and income tax returns. We can handle those through our Corporate Compliance services.",
      },
    ],
  },
  {
    slug: "llp-registration",
    name: "LLP Registration",
    module: "Incorporation & Registrations",
    listed: "LLP Registration",
    metaTitle: "LLP Registration in Kolkata | Income N Filing",
    metaDescription:
      "Register a Limited Liability Partnership with name approval, LLP agreement drafting and incorporation filing from Income N Filing.",
    intro:
      "A Limited Liability Partnership combines the flexibility of a partnership with limited liability for its partners. We take care of the name, the LLP agreement and the incorporation filing.",
    whoNeeds: [
      "Professional firms and service businesses with two or more partners",
      "Family businesses that want limited liability without a company’s formalities",
      "Existing partnership firms looking to convert",
    ],
    included: [
      "Name check and reservation",
      "Digital signatures and partner identification",
      "Drafting of the LLP agreement",
      "Incorporation filing with the Registrar",
      "Certificate of Incorporation, PAN and TAN",
    ],
    faqs: [
      {
        q: "How many partners are required to form an LLP?",
        a: "At least two partners, and at least two designated partners, of whom one must be resident in India.",
      },
      {
        q: "Does an LLP have yearly filings?",
        a: "Yes. An LLP has to file annual returns and statements of accounts with the Registrar, in addition to its income tax return.",
      },
    ],
  },
  {
    slug: "msme-udyam-registration",
    name: "MSME / Udyam Registration",
    module: "Licenses & Registrations",
    listed: "MSME / Udyam",
    metaTitle: "MSME Udyam Registration | Income N Filing",
    metaDescription:
      "Udyam registration for micro, small and medium businesses, filed correctly with your PAN and business details by Income N Filing.",
    intro:
      "Udyam registration is the government’s online registration for micro, small and medium enterprises. It gives your business a recognised MSME identity, which is needed to access schemes meant for MSMEs. We prepare and file it with the right classification.",
    whoNeeds: [
      "Proprietors, partnerships, LLPs and companies that qualify as MSMEs",
      "Businesses that want to apply for MSME schemes or priority lending",
      "Suppliers asked for an Udyam certificate by larger buyers",
    ],
    included: [
      "Check of your eligibility and classification",
      "Preparation of the Udyam application with correct activity codes",
      "Filing and follow-up until the certificate is issued",
      "Guidance on updating details when turnover or activity changes",
    ],
    faqs: [
      {
        q: "What do I need to apply?",
        a: "Your Aadhaar and PAN details, business address and bank account, and your GST number if you have one. We confirm the list for your entity type.",
      },
    ],
  },
  {
    slug: "tds-return-filing",
    name: "TDS Return Filing",
    module: "Income Tax",
    listed: "TDS Return Filing",
    metaTitle: "TDS Return Filing in Kolkata | Income N Filing",
    metaDescription:
      "Quarterly TDS return filing for employers and businesses, with challan matching and correction support from Income N Filing.",
    intro:
      "If you deduct tax at source on salary, rent, professional fees or contractor payments, you must deposit it and file a TDS return every quarter. We prepare the return from your deduction data, match it to your challans and file it.",
    whoNeeds: [
      "Employers deducting tax on salaries",
      "Businesses paying contractors, professionals or rent above the TDS limits",
      "Deductors who need to correct an earlier return",
    ],
    included: [
      "Preparation of quarterly TDS returns in the applicable form",
      "Matching of deductions against challans paid",
      "Filing and acknowledgement",
      "Correction returns when details need to change",
      "Help with TDS certificates for deductees",
    ],
    faqs: [
      {
        q: "How often are TDS returns filed?",
        a: "Quarterly, for each quarter of the financial year, in the form that matches the type of payment.",
      },
      {
        q: "What happens if the return is filed late?",
        a: "A late fee applies for each day of delay. Filing on time avoids this and keeps your deductees’ tax credit in order.",
      },
    ],
  },
  {
    slug: "income-tax-notice-handling",
    name: "Income Tax Notice Handling",
    module: "Advisory & Notices",
    listed: "Income Tax Notice Handling",
    metaTitle: "Income Tax Notice Reply Help | Income N Filing",
    metaDescription:
      "Income tax notice or intimation received? Income N Filing reviews it, prepares the reply and files it on the portal within the stated time.",
    intro:
      "Notices from the Income Tax Department range from simple intimations about a mismatch to detailed scrutiny queries. Each one has its own reply period. We read the notice, work out what is being asked and prepare an accurate response with the right documents.",
    whoNeeds: [
      "Taxpayers who received an intimation or a defect notice on a filed return",
      "Individuals and businesses selected for scrutiny",
      "Anyone with a notice about a mismatch in income, TDS or deductions",
    ],
    included: [
      "Review of the notice, the section and the year involved",
      "Check of your return, AIS and Form 26AS against the issue raised",
      "Drafting and submission of the response on the portal",
      "Support during follow-up queries or hearings",
    ],
    faqs: [
      {
        q: "Does every notice mean I did something wrong?",
        a: "No. Many notices are routine mismatches or requests for information. They still need a timely and correct reply.",
      },
      {
        q: "What should I share with you?",
        a: "The notice itself, the return it relates to, and your supporting documents for the year in question.",
      },
    ],
  },
  {
    slug: "monthly-bookkeeping",
    name: "Monthly Bookkeeping",
    module: "Accounting & Bookkeeping",
    listed: "Monthly Bookkeeping",
    metaTitle: "Monthly Bookkeeping in Kolkata | Income N Filing",
    metaDescription:
      "Monthly bookkeeping with bank reconciliation and reports, so your GST, TDS and income tax filings start from clean, up-to-date books.",
    intro:
      "Accurate books make every other filing easier. We record your sales, purchases and expenses every month, reconcile your bank accounts and give you reports you can use to run the business.",
    whoNeeds: [
      "Small and growing businesses without an in-house accountant",
      "Businesses preparing for audit, loans or investor reviews",
      "Owners who want GST and income tax figures ready each period",
    ],
    included: [
      "Recording of sales, purchases and expenses",
      "Bank reconciliation every month",
      "Accounts payable and receivable tracking",
      "Monthly reports for the owner",
      "Books kept ready for GST, TDS and annual filings",
    ],
    faqs: [
      {
        q: "What do you need from me each month?",
        a: "Sales and purchase invoices, bank statements and expense receipts, shared by WhatsApp, email or a shared folder.",
      },
    ],
  },
  {
    slug: "annual-roc-filing",
    name: "Annual ROC Filing for Companies",
    module: "Corporate Compliance",
    listed: "Annual Return (MGT-7)",
    metaTitle: "Annual ROC Filing, AOC-4 & MGT-7 | Income N Filing",
    metaDescription:
      "Annual ROC compliance for companies: financial statements (AOC-4), annual return (MGT-7) and board and AGM paperwork, filed on time.",
    intro:
      "Every company registered in India must file its financial statements and annual return with the Registrar of Companies each year, even if it did no business. We prepare the board and AGM paperwork and make the filings.",
    whoNeeds: [
      "Private and public limited companies",
      "Newly incorporated companies approaching their first annual filing",
      "Companies that have missed earlier years and need to catch up",
    ],
    included: [
      "Preparation of financial statement filing (AOC-4)",
      "Preparation of the annual return (MGT-7)",
      "Board meeting and AGM notices and minutes",
      "Director KYC and auditor appointment filings where due",
      "A compliance calendar for the year",
    ],
    faqs: [
      {
        q: "Is ROC filing required if the company has no turnover?",
        a: "Yes. A company must file annually whether or not it has operations. Delay attracts additional fees for each day.",
      },
    ],
  },
  {
    slug: "import-export-code",
    name: "Import Export Code (IEC)",
    module: "Licenses & Registrations",
    listed: "Import Export Code (IEC)",
    metaTitle: "Import Export Code (IEC) Registration | Income N Filing",
    metaDescription:
      "Apply for your Import Export Code with Income N Filing. We prepare and file the DGFT application so you can start importing or exporting.",
    intro:
      "An Import Export Code is a ten-digit identification issued by the Directorate General of Foreign Trade. Businesses generally need it before they import or export goods or services. We prepare the application and track it to issue.",
    whoNeeds: [
      "Businesses starting to export products or services",
      "Importers of goods for trade",
      "Sellers on cross-border marketplaces",
    ],
    included: [
      "Check of the documents and details required",
      "Preparation and filing of the DGFT application",
      "Follow-up until the code is issued",
      "Guidance on keeping the registration details up to date",
    ],
    faqs: [
      {
        q: "Does the IEC need to be renewed?",
        a: "It does not need renewal, but the DGFT expects the details to be kept up to date. We can guide you on this.",
      },
    ],
  },
  {
    slug: "fssai-license",
    name: "FSSAI Food License & Registration",
    module: "Licenses & Registrations",
    listed: "FSSAI License",
    metaTitle: "FSSAI License Registration | Income N Filing",
    metaDescription:
      "FSSAI registration or license for food businesses, with the right category chosen for your scale, filed by Income N Filing.",
    intro:
      "Any business that makes, stores, distributes or sells food needs FSSAI registration or a license. The category depends on the size and type of the business. We choose the right one and file the application.",
    whoNeeds: [
      "Restaurants, caterers, cloud kitchens and bakeries",
      "Food manufacturers, packers and traders",
      "Retailers and e-commerce sellers dealing in food products",
    ],
    included: [
      "Decide between basic registration, state license or central license",
      "Document preparation and application",
      "Follow-up and query handling with the food safety authority",
      "Reminders for renewal and annual filings",
    ],
    faqs: [
      {
        q: "Which FSSAI category do I need?",
        a: "It depends on your turnover, the kind of food business and where you operate. Share your details and we will confirm the right category.",
      },
    ],
  },
  {
    slug: "belated-revised-itr-filing",
    name: "Belated & Revised ITR Filing",
    module: "Income Tax",
    listed: "Belated ITR Filing",
    metaTitle: "Belated & Revised ITR Filing Help | Income N Filing",
    metaDescription:
      "Missed the ITR due date or need to correct a filed return? Income N Filing prepares and files belated and revised income tax returns, checking AIS and Form 26AS first.",
    intro:
      "If the original due date has passed, or you spotted an error after filing, the Income Tax Act generally still allows a belated or revised return within the time limits that apply to that year. Late filing can bring interest, a late fee and loss of some benefits, so it is better to file sooner. We check your records, work out which return applies and file it correctly.",
    whoNeeds: [
      "Taxpayers who missed the ITR due date for a year",
      "Anyone who filed and later found a wrong income, deduction or bank detail",
      "People who received an intimation and need to correct the return",
      "Individuals with several years of unfiled returns",
    ],
    included: [
      "Check which return applies and the time limit for that assessment year",
      "Review of AIS, Form 26AS and your documents before filing",
      "Preparation and e-filing of the belated or revised return, with e-verification support",
      "Computation of any tax, interest or fee payable before you pay it",
    ],
    faqs: [
      {
        q: "Can I still file my ITR after the due date?",
        a: "Usually yes, as a belated return within the time limit for that assessment year. Interest and a late fee can apply, and some carry-forward benefits may be affected. We confirm the position for your year before filing.",
      },
      {
        q: "What is a revised return?",
        a: "It replaces a return you already filed when you find a mistake or omission. It is allowed within the prescribed time limit.",
      },
      {
        q: "What do you need from me to start?",
        a: "Your PAN, income documents for the year and bank details. We pull AIS and Form 26AS to cross-check before filing.",
      },
    ],
  },
  {
    slug: "late-gst-return-filing",
    name: "Late GST Return Filing",
    module: "GST Compliance",
    listed: "Late GST Return Filing",
    metaTitle: "Late GST Return Filing Help | Income N Filing",
    metaDescription:
      "GST returns pending or filed late? Income N Filing reconciles your data, files overdue GSTR-1 and GSTR-3B returns and explains late fee and interest before you pay.",
    intro:
      "When GST returns are not filed by the due date, late fees and interest accrue, and continued non-filing can lead to notices or cancellation of registration. We bring the filings up to date in the right order, reconcile your sales and input tax credit, and tell you what is payable before you pay it.",
    whoNeeds: [
      "Businesses with one or more months of GSTR-1 or GSTR-3B pending",
      "Taxpayers who received a notice for non-filing of returns",
      "Businesses whose GST registration is at risk of suspension for non-filing",
      "Owners who want to start filing regularly again",
    ],
    included: [
      "Status check of all pending returns and periods on the GST portal",
      "Reconciliation of sales, purchases and input tax credit",
      "Filing of overdue GSTR-1 and GSTR-3B in the correct sequence",
      "Computation of late fee and interest before payment",
      "Support with any related notice",
    ],
    faqs: [
      {
        q: "What happens if I do not file GST returns on time?",
        a: "A late fee and interest apply, and continued non-filing can lead to notices and, eventually, cancellation of the registration. The exact amounts depend on the return, the period and your turnover.",
      },
      {
        q: "Can I file several pending months together?",
        a: "Returns generally have to be filed period by period. We clear them in the order the portal allows and tell you the total payable.",
      },
      {
        q: "Will you tell me the late fee before I pay?",
        a: "Yes. We share the computed late fee and interest first so there are no surprises.",
      },
    ],
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICE_PAGES.map((s) => [s.slug, s]));
