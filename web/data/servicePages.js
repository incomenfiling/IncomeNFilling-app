// Detail pages for the highest-intent services. Copy is general and factual: no guarantees or fixed deadlines
// (those change by year and by case). Published prices live in data/pricing.js.
// `module` must match a title in HUB_CATEGORIES (data/categories.js); `listed` is the matching
// entry in that module's services list, used to link from the module page.
const ALL_SERVICE_PAGES = [
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
    h1: "GST Notice Reply in Kolkata",
    module: "GST Compliance",
    listed: "GST Notice Reply",
    metaTitle: "GST Notice Reply in Kolkata | Income N Filing",
    metaDescription:
      "GST notice reply in Kolkata: scrutiny, show cause, registration and non-filing notices. We read the notice, collect your records and prepare the reply on the GST portal. One person prepares, another checks.",
    intro:
      "A GST notice has a form number, a reason and a deadline. We read the notice, match it with your returns and records, and prepare a clear reply on the GST portal before the date given. One person prepares the reply and another checks it.",
    whoNeeds: [
      "Registered businesses that received a scrutiny notice about a mismatch in their returns",
      "Businesses told to file pending returns",
      "Businesses asked to clarify their registration application or show cause for cancellation",
      "Businesses that received a show cause notice or a demand",
      "Businesses that received an intimation before a formal notice",
    ],
    sections: [
      { h: "Common GST notices", items: ["GSTR-3A: notice to file pending returns. Reply by filing the returns.", "ASMT-10: scrutiny of returns, usually for a mismatch. Reply in ASMT-11.", "REG-03: clarification on a registration application. Reply in REG-04.", "REG-17: show cause for cancelling a registration. Reply in REG-18.", "DRC-01A: intimation of tax ascertained as payable, before a formal notice. Pay through DRC-03 or reply.", "DRC-01: show cause notice for tax, interest and penalty. Reply in DRC-06."], note: "The reply time differs by notice. Always follow the date written in your own notice." },
      { h: "What to do first", items: ["Log in to the GST portal and open View Notices and Orders to see the notice.", "Note the form number, the period, the reason and the reply date.", "Do not ignore it. A missed reply can lead to an order against you.", "Send us a copy right away so we can tell you what it needs."] },
      { h: "Documents to keep ready", items: ["The notice and its attachments", "The returns for the period: GSTR-1, GSTR-3B and GSTR-2B", "Sales and purchase invoices and the books for the period", "Bank statements and e-way bills, where they apply", "Reconciliation of input tax credit and sales, if you have one", "Earlier notices, replies and orders on the same matter"] },
      { h: "How it works", ordered: true, items: ["You send the notice and your documents on WhatsApp or the form.", "We read it, tell you what it means, and confirm the scope and the fee in writing.", "One person reconciles the returns and records and prepares the reply, and a second person checks it.", "You approve the reply.", "We file it on the GST portal within the deadline, track the response, and tell you the outcome."] },
      { h: "Timeline", text: "The reply date is the one in your notice. Some notices allow as little as 7 working days and others around 30 days. Send us the notice as soon as you receive it." },
      { h: "What affects the fee", items: ["The type of notice and the stage it has reached", "The number of periods and issues involved", "How much reconciliation and documentation is needed", "Whether returns have to be filed or corrected", "Whether further replies or hearings follow"], note: "The fee is fixed and quoted in writing before we start. Government charges, such as tax, interest or penalty, are separate." },
      { h: "Common mistakes to avoid", items: ["Ignoring the notice or missing the reply date", "Replying without reconciling GSTR-1, GSTR-3B and GSTR-2B", "Paying a demand without checking whether it is correct", "Replying on the wrong form", "A reply that does not address the exact point raised", "Not keeping invoices and records for the period"] },
      { h: "In Kolkata", text: "We are based in Kasba, Kolkata and handle GST notices for clients across West Bengal and India. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00." },
    ],
    faqs: [
      { q: "I received a GST notice. What should I do first?", a: "Read the form number and the reply date on the notice, and send us a copy. We tell you what it means and what is needed." },
      { q: "What is a scrutiny notice, ASMT-10?", a: "It tells you that the officer found differences in your returns. It is not a show cause notice, but it can lead to one if the issue is not resolved. You reply in ASMT-11." },
      { q: "What is a show cause notice, DRC-01?", a: "It is a notice proposing tax, interest and penalty. You reply in DRC-06. Treat it as a serious matter and send it to us at once." },
      { q: "How long do I have to reply?", a: "The date in your notice. For example, registration clarification and cancellation notices often allow 7 working days, and scrutiny notices often allow 30 days, which the officer can extend." },
      { q: "What causes most GST notices?", a: "A mismatch between the input tax credit claimed in GSTR-3B and your GSTR-2B is a common cause. Late or missing returns are another." },
      { q: "Can you help if my registration is going to be cancelled?", a: "Yes. We prepare the reply to the cancellation notice. If the registration is already cancelled, we explain the options for revocation." },
      { q: "Will you represent me before the GST officer?", a: "We prepare and file your reply on the portal. If the matter needs a lawyer or an appeal, we tell you early and explain your options." },
      { q: "Can you guarantee the notice will be dropped?", a: "No one can. The outcome depends on the facts and on the officer. We prepare a complete and accurate reply and keep you informed at each step." },
      { q: "What if you make a mistake in my reply?", a: "We tell you, fix it, and cover any fee that arises from our error in filing, provided you gave accurate records on time. Terms apply." },
    ],
  },
  {
    slug: "private-limited-company-registration",
    name: "Private Limited Company Registration",
    h1: "Private Limited Company Registration in Kolkata",
    module: "Incorporation & Registrations",
    listed: "Private Limited Company",
    metaTitle: "Pvt Ltd Company Registration in Kolkata | Income N Filing",
    metaDescription:
      "Pvt Ltd company registration in Kolkata: name approval, SPICe+ filing, DIN, PAN and TAN, and the first compliance steps. One person prepares, another checks, and we file with the Registrar.",
    intro:
      "A private limited company is a separate legal entity with limited liability for its shareholders, and it is the usual structure for startups that plan to raise investment. We handle the name, the incorporation filing and the first compliance steps. One person prepares the application and another checks it before it is filed.",
    whoNeeds: [
      "Startups planning to bring in investors",
      "Founders who want limited liability and a separate legal identity",
      "Existing proprietors or partnerships moving to a company structure",
      "Businesses that want a structure banks and larger customers trust",
      "NRIs and foreign nationals who want to set up a company in India with a resident Indian director",
    ],
    sections: [
      { h: "What you need to start", items: [
        "At least two directors and two shareholders. The same people can hold both roles.",
        "At least one director who is resident in India, meaning someone who stayed in India for 182 days or more in the previous financial year.",
        "A registered office address in India",
        "A name that is unique and allowed under the rules",
        "No minimum capital is required by law. The authorised capital you choose affects the government fee.",
      ] },
      { h: "How incorporation works", text: "Incorporation is filed on the MCA portal through the SPICe+ form.", items: [
        "Part A reserves the company name. If you do not use the approved name within the allowed time, you have to reserve a name again.",
        "Part B covers the incorporation itself, the Director Identification Number (DIN) for up to three new directors, and the allotment of the company PAN and TAN.",
        "The linked AGILE-PRO-S form covers EPFO and ESIC registration and the company bank account. GST registration can also be applied for through it, if you choose.",
        "The memorandum and articles of association are filed electronically along with the form.",
        "You receive the Certificate of Incorporation with your company's CIN.",
      ] },
      { h: "Documents to keep ready", items: [
        "PAN and Aadhaar of every director and shareholder (passport for foreign nationals and NRIs)",
        "Passport-size photograph of each director",
        "Proof of the directors' address, such as a bank statement or utility bill",
        "Proof of the registered office: electricity bill or property tax receipt, plus a rent agreement and no-objection letter from the owner if the premises are rented",
        "A digital signature certificate (DSC) for each director",
        "Your preferred company names and a short description of the business",
        "Director consent and declarations, which we prepare for you to sign",
      ] },
      { h: "How it works", ordered: true, items: [
        "You share the details of directors, shareholders and your name choices.",
        "We confirm the scope in writing and check the name.",
        "We arrange the digital signatures and file the name reservation.",
        "One person prepares the incorporation set and a second person checks it. You approve it.",
        "We file it with the Registrar, answer any query raised, and send you the Certificate of Incorporation, PAN and TAN.",
        "We guide you through the first compliance steps below.",
      ] },
      { h: "Timeline", text: "It depends on how quickly the documents and signatures are ready, and on the Registrar's processing and any queries. We give you the expected date when we confirm the scope." },
      { h: "What affects the fee", items: [
        "The authorised capital, because the government fee depends on it",
        "The number of directors and shareholders",
        "Whether the directors are NRIs or foreign nationals",
        "Whether you also want GST, EPFO, ESIC or other registrations at the same time",
        "The state, because stamp duty on the incorporation documents differs by state",
      ], note: "Our fee is fixed and quoted in writing before we start. Government fees and stamp duty are separate." },
      { h: "First steps after incorporation", items: [
        "Open the company's bank account and deposit the subscription money for the shares.",
        "Hold the first board meeting and appoint the first auditor within 30 days of incorporation.",
        "File the declaration of commencement of business (Form INC-20A) within 180 days, confirming that the subscribers have paid for their shares.",
        "Issue share certificates and set up the statutory registers.",
        "Register for GST if your business needs it.",
        "Start annual filings: accounts and annual return with the Registrar, the company's income tax return, and DIN KYC for directors.",
      ], note: "We can handle these through our corporate compliance and bookkeeping services." },
      { h: "Common mistakes to avoid", items: [
        "Choosing a name similar to an existing company or trademark",
        "Using a registered office address without proper proof or owner consent",
        "Name mismatches between PAN, Aadhaar and passport",
        "Not having a resident Indian director",
        "Forgetting to deposit the subscription money, which blocks the commencement filing",
        "Missing the 180-day commencement deadline",
        "Not appointing the first auditor on time",
      ] },
      { h: "In Kolkata", text: "We are based in Kasba, Kolkata and register companies for founders across West Bengal and India. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00." },
    ],
    faqs: [
      { q: "How many directors and shareholders do I need?", a: "A private limited company needs at least two directors and two shareholders, and the same persons can hold both roles. At least one director must be resident in India." },
      { q: "What does resident in India mean for a director?", a: "A person who stayed in India for 182 days or more in the previous financial year. If you are an NRI or foreign national, you can be a director, but the company needs at least one resident director." },
      { q: "Is there a minimum capital?", a: "No. The law sets no minimum paid-up capital. You choose the authorised capital, which affects the government fee." },
      { q: "What is SPICe+?", a: "It is the MCA web form used to incorporate a company. It covers name reservation, incorporation, DIN for up to three directors, and PAN and TAN, with a linked form for EPFO, ESIC, the bank account and optional GST." },
      { q: "How long does registration take?", a: "It depends on your documents, the signatures and the Registrar's processing and queries. We give you an expected date when we confirm the scope." },
      { q: "Can I use my home as the registered office?", a: "Often yes, with proof of address and the owner's no-objection letter if it is not in your name. We check your documents." },
      { q: "What is INC-20A and why does it matter?", a: "It is the declaration of commencement of business. A company with share capital must file it within 180 days of incorporation, after the subscribers have paid for their shares." },
      { q: "What happens after incorporation?", a: "The company must open a bank account, appoint its first auditor within 30 days, file INC-20A, and then start annual compliance, including filings with the Registrar and income tax returns. We can handle those through our corporate compliance services." },
      { q: "What if you make a mistake in the filing?", a: "We tell you, fix it, and cover any government fee for re-filing that arises from our error, provided you gave accurate documents on time. Terms apply." },
    ],
  },
  {
    slug: "llp-registration",
    name: "LLP Registration",
    h1: "LLP Registration in Kolkata",
    module: "Incorporation & Registrations",
    listed: "LLP Registration",
    metaTitle: "LLP Registration in Kolkata | Income N Filing",
    metaDescription:
      "LLP registration in Kolkata: name reservation, FiLLiP filing, DPIN, LLP agreement, PAN and TAN, and annual filings. One person prepares, another checks, and we file with the Registrar.",
    intro:
      "A limited liability partnership gives partners limited liability with the flexibility of a partnership. We handle the name, the incorporation filing and the LLP agreement. One person prepares the application and another checks it before it is filed.",
    whoNeeds: [
      "Professionals and consultants who want to work together with limited liability",
      "Family businesses and trading partnerships",
      "Small businesses that want fewer annual filings than a company",
      "Existing partnership firms that want to convert",
      "Founders who do not plan to raise equity from investors",
    ],
    sections: [
      { h: "What you need to start", items: ["At least two partners, and at least two designated partners who are individuals", "At least one designated partner resident in India", "A registered office address in India", "A name that is unique and allowed under the rules", "No minimum capital is required by law. You decide each partner's contribution in the LLP agreement."] },
      { h: "How incorporation works", items: ["Each designated partner needs a Class 3 digital signature certificate (DSC).", "The name is reserved through the RUN-LLP service on the MCA portal.", "The FiLLiP form is the incorporation filing. It carries the partner details, the registered office proof, and the application for the Designated Partner Identification Number (DPIN) where a partner has none.", "You receive the Certificate of Incorporation with the LLP's LLPIN, PAN and TAN.", "The LLP agreement is filed in Form 3 within 30 days of incorporation."] },
      { h: "Documents to keep ready", items: ["PAN and Aadhaar of every partner (passport for foreign nationals and NRIs)", "Passport-size photograph of each partner", "Proof of the partners' address, such as a bank statement or utility bill", "Proof of the registered office: electricity bill or property tax receipt, plus a rent agreement and no-objection letter from the owner if the premises are rented", "Your preferred LLP names and a short description of the business", "Profit-sharing ratio and the role of each partner for the LLP agreement"] },
      { h: "How it works", ordered: true, items: ["You share the partners' details and your name choices.", "We confirm the scope in writing and check the name.", "We arrange the digital signatures and file the name reservation.", "One person prepares the FiLLiP set and a second person checks it. You approve it.", "We file it with the Registrar, answer any query, and send you the Certificate of Incorporation, PAN and TAN.", "We draft the LLP agreement with you, get it stamped as your state requires, and file Form 3 within 30 days."] },
      { h: "Timeline", text: "It depends on how quickly documents and signatures are ready, and on the Registrar's processing and any queries. We give you the expected date when we confirm the scope." },
      { h: "What affects the fee", items: ["The number of partners and designated partners", "Whether partners are NRIs or foreign nationals", "How detailed the LLP agreement needs to be", "Stamp duty on the LLP agreement, which differs by state", "Whether you want GST, MSME or other registrations at the same time"], note: "Our fee is fixed and quoted in writing before we start. Government fees and stamp duty are separate." },
      { h: "Annual filings after registration", items: ["Form 11, the annual return, is due by 30 May each year.", "Form 8, the statement of account and solvency, is due by 30 October each year.", "Both must be filed even if the LLP did no business.", "The LLP's income tax return and, if registered, GST returns are separate filings.", "Late filing of the MCA forms carries a late fee of ₹100 per day."], note: "We can handle these through our corporate compliance and bookkeeping services." },
      { h: "Common mistakes to avoid", items: ["Filing Form 3 late, because the LLP agreement must be filed within 30 days", "Stamping the LLP agreement after filing instead of before", "Choosing a name close to an existing company or trademark", "Registered office proof without the owner's consent", "Not having a resident Indian designated partner", "Missing the annual Form 8 and Form 11 in a year with no business", "Not updating the Registrar when a partner joins or leaves"] },
      { h: "In Kolkata", text: "We are based in Kasba, Kolkata and register LLPs for clients across West Bengal and India. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00." },
    ],
    faqs: [
      { q: "How many partners do I need for an LLP?", a: "At least two partners. At least two of them must be designated partners who are individuals, and at least one designated partner must be resident in India." },
      { q: "What is a designated partner?", a: "A partner who is responsible for the LLP's legal and regulatory compliance, such as filings and signing forms. Each designated partner needs a DPIN." },
      { q: "Is there a minimum capital for an LLP?", a: "No. The law sets no minimum contribution. Partners agree their contributions in the LLP agreement." },
      { q: "What is FiLLiP?", a: "It is the MCA form used to incorporate an LLP. It covers the partner details, the registered office and the DPIN application." },
      { q: "What is the LLP agreement and when must it be filed?", a: "It records each partner's rights, duties and profit share. It must be filed in Form 3 within 30 days of incorporation." },
      { q: "What annual filings does an LLP have?", a: "Form 11 by 30 May, Form 8 by 30 October, and the income tax return. These apply even when there is no business." },
      { q: "LLP or private limited company: which is better?", a: "It depends on your plans. An LLP has fewer annual filings. A company is the usual choice when you plan to raise equity investment. We explain both for your case on the first call." },
      { q: "How long does registration take?", a: "It depends on your documents, the signatures and the Registrar's processing and queries. We give you an expected date when we confirm the scope." },
      { q: "What if you make a mistake in the filing?", a: "We tell you, fix it, and cover any government fee for re-filing that arises from our error, provided you gave accurate documents on time. Terms apply." },
    ],
  },
  {
    "slug": "msme-udyam-registration",
    "name": "MSME / Udyam Registration",
    "h1": "MSME Udyam Registration in Kolkata",
    "module": "Licenses & Registrations",
    "listed": "MSME / Udyam",
    "metaTitle": "Udyam (MSME) Registration in Kolkata | Income N Filing",
    "metaDescription": "Udyam registration in Kolkata for micro, small and medium businesses: category, activity codes and details checked, then filed on the official portal. One person prepares, another checks.",
    "intro": "Udyam is the Government of India's online registration for micro, small and medium enterprises. It gives your business a permanent Udyam Registration Number and certificate that banks, buyers and government schemes recognise. The official registration carries no government fee. We prepare your details, choose the right category and activity codes, and have a second person check them before the form is filed.",
    "whoNeeds": [
      "Manufacturers, traders and service providers of any size up to the MSME limits",
      "Proprietors, partnerships, LLPs and companies",
      "Businesses that want bank loans, government schemes or tenders that ask for an Udyam number",
      "Businesses that hold only an older registration and need to move to Udyam",
      "Existing Udyam holders whose investment or turnover has changed"
    ],
    "sections": [
      {
        "h": "What we do",
        "items": [
          "Check whether your business qualifies and which category it falls in",
          "Collect your PAN, Aadhaar and GST details and match them with each other",
          "Choose the correct activity codes (NIC) for what you actually do",
          "Fill in investment and turnover figures the way the portal expects them",
          "File the registration on the official Udyam portal and download your certificate",
          "Explain when and how to update your details later"
        ]
      },
      {
        "h": "What you receive",
        "items": [
          "Your Udyam Registration Number and certificate",
          "A note on your category and the figures we declared",
          "Guidance on updating your registration when your business grows"
        ]
      },
      {
        "h": "MSME categories from 1 April 2025",
        "items": [
          "Micro: investment up to ₹2.5 crore and turnover up to ₹10 crore",
          "Small: investment up to ₹25 crore and turnover up to ₹100 crore",
          "Medium: investment up to ₹125 crore and turnover up to ₹500 crore"
        ],
        "note": "Both investment and turnover must be within the limits. The limits are set by the Government and can change, so we check the Udyam portal before filing."
      },
      {
        "h": "Documents and details to keep ready",
        "items": [
          "Aadhaar of the proprietor, partner, director or authorised signatory",
          "PAN of the business, and GST number if you have one",
          "Bank account details",
          "Business address and date you started",
          "What your business does, so we can choose activity codes",
          "Investment in plant, machinery or equipment, and turnover"
        ]
      },
      {
        "h": "How it works",
        "ordered": true,
        "items": [
          "You share your details and documents on WhatsApp or through a shared folder.",
          "We confirm the category and what we will file, in writing.",
          "One person prepares the application with correct codes and figures.",
          "A second person checks every field against your documents.",
          "We file on the Udyam portal with your Aadhaar OTP, and send you the certificate."
        ]
      },
      {
        "h": "Timeline",
        "text": "The portal generates the registration number once the application is submitted and validated. We give you the expected timing in writing when we take up your case."
      },
      {
        "h": "What affects the fee",
        "items": [
          "Whether you are registering fresh or updating an existing registration",
          "The number of activities and codes to be declared",
          "Whether your details need to be matched across PAN, GST and Aadhaar first"
        ],
        "note": "The fee is fixed in writing before we start. Government fees, if any, are charged separately at actuals."
      },
      {
        "h": "Common mistakes we help you avoid",
        "items": [
          "Using the old, lower limits to pick a category",
          "Choosing activity codes that do not match your real work",
          "Name or PAN details that do not match the other records",
          "Paying a private website a government fee that the official portal does not charge",
          "Not updating the registration after investment or turnover changes"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is there a government fee for Udyam registration?",
        "a": "No. The official registration on the Udyam portal carries no government fee, and the portal warns about fake sites. Our fee is for preparing and checking your details, and it is fixed in writing before we start."
      },
      {
        "q": "What are the MSME limits now?",
        "a": "From 1 April 2025: micro up to ₹2.5 crore investment and ₹10 crore turnover, small up to ₹25 crore and ₹100 crore, and medium up to ₹125 crore and ₹500 crore."
      },
      {
        "q": "Is Udyam registration the same as GST registration?",
        "a": "No. Udyam is a registration for MSME status. GST registration is a tax registration. A business can have one, the other or both."
      },
      {
        "q": "Does the Udyam number expire?",
        "a": "The Udyam Registration Number does not expire. Your investment and turnover figures are refreshed from government records, and you should update your details if your business changes."
      },
      {
        "q": "Can a business without a PAN register?",
        "a": "Informal micro enterprises without a PAN can use the Udyam Assist Platform. We tell you which route fits your case."
      },
      {
        "q": "Will Udyam registration get me a bank loan?",
        "a": "Not by itself. It is a recognised identity that many lenders and schemes ask for, but banks and departments follow their own rules."
      },
      {
        "q": "I have an older MSME registration. Do I need Udyam?",
        "a": "Udyam replaced the older registrations in 2020. If you hold only an older one, apply for Udyam so your business is recognised under the current system."
      },
      {
        "q": "Do I need to update my registration when my business grows?",
        "a": "Yes. If your investment or turnover moves you to a different category, update your details on the portal. We can do this for you."
      },
      {
        "q": "What if you make a mistake in my Udyam registration?",
        "a": "We tell you, fix it, and cover any penalty or late fee that arises from our error, provided you gave us accurate documents and details on time. Terms apply."
      }
    ]
  },
  {
    slug: "tds-return-filing",
    name: "TDS Return Filing",
    h1: "TDS Return Filing in Kolkata",
    module: "Income Tax",
    listed: "TDS Return Filing",
    metaTitle: "TDS Return Filing in Kolkata | Income N Filing",
    metaDescription:
      "TDS return filing in Kolkata for salary, non-salary and non-resident payments. Quarterly statements on the current forms, deposit tracking and certificates, prepared by one person and checked by another.",
    intro:
      "If you deduct tax at source from salaries, rent, fees or other payments, you must deposit it and file quarterly statements. We prepare the statements from your payment data, reconcile them with your challans, and file them before the due date. One person prepares and another checks.",
    whoNeeds: [
      "Employers who deduct tax on salary",
      "Businesses that pay contractors, professionals, rent or interest",
      "Companies, LLPs and firms with a TAN",
      "Businesses that pay non-residents",
      "Businesses that received a TDS default notice and want to correct their statements",
    ],
    sections: [
      { h: "Which statements you file", text: "The Income-tax Act, 2025 took effect on 1 April 2026 and the quarterly forms were renumbered. Statements for April to June 2026 onward use the new numbers.", items: ["Form 138 (earlier 24Q): TDS on salary", "Form 140 (earlier 26Q): TDS on payments to residents other than salary", "Form 144 (earlier 27Q): TDS on payments to non-residents", "Form 143 (earlier 27EQ): TCS statements for sellers who collect tax at source"], note: "Statements for periods up to March 2026, including corrections filed later, still use the old forms 24Q, 26Q, 27Q and 27EQ. We use the form that applies to the period." },
      { h: "Usual due dates", items: ["TDS deposit: the 7th of the following month. For March, it is 30 April.", "Quarterly statement for April to June: 31 July", "Quarterly statement for July to September: 31 October", "Quarterly statement for October to December: 31 January", "Quarterly statement for January to March: 31 May"], note: "Dates can change by notification. We check the portal and tell you the date that applies." },
      { h: "Documents and data to keep ready", items: ["Your TAN and login details for the TRACES and income tax portals", "Deductee list with PAN, amount paid and date of payment", "Salary details with each employee's declaration of deductions", "Challan details for every TDS deposit", "Previous statements, if we are taking over from someone else", "Notices or default reports from TRACES, if any"] },
      { h: "How it works", ordered: true, items: ["You share the payment data on WhatsApp, in Tally or in Excel.", "We confirm the scope and the forms that apply, in writing.", "One person prepares the statement, checks the section and rate for each payment, and matches it to your challans.", "A second person checks it before filing, and you approve it.", "We file the statement, track its processing, and send you the acknowledgement and the certificates for your deductees."] },
      { h: "Timeline", text: "We file within the due date, provided your data reaches us in time. We agree a fixed date each quarter for sending data. If a statement is overdue, we give a catch-up plan when we confirm the scope." },
      { h: "What affects the fee", items: ["The number of deductees and payments in each quarter", "The forms involved: salary, non-salary, non-resident or TCS", "The number of quarters pending", "Whether your records are ready or need cleaning up first", "Any default notice or correction statement needed"], note: "The fee is fixed and quoted in writing before we start. Government charges, such as late fees and interest, are separate." },
      { h: "Late fee and interest", items: ["A late filing fee of ₹200 per day applies to a late statement, capped at the amount of tax deducted or collected.", "Interest applies on tax deducted late or deposited late.", "A TDS default can also lead to a disallowance of the expense in your own return."], note: "Rates and caps come from the Act and notifications. Check the portal for what applies to you." },
      { h: "Common mistakes to avoid", items: ["Using the old form numbers for a period that needs the new ones", "Wrong PAN or no PAN for a deductee", "Wrong section or rate for a payment", "Depositing the tax but not matching the challan to the statement", "Missing a deduction on a payment that crossed the threshold", "Not filing a correction statement after an error", "Waiting until the last day"] },
      { h: "In Kolkata", text: "We are based in Kasba, Kolkata and file TDS returns for clients across West Bengal and India. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00." },
    ],
    faqs: [
      { q: "What are the new TDS return form numbers?", a: "From April 2026, Form 138 replaces 24Q, Form 140 replaces 26Q, Form 144 replaces 27Q and Form 143 replaces 27EQ. Statements for earlier periods still use the old forms." },
      { q: "How often are TDS returns filed?", a: "Quarterly. TDS deposits are separate and are made monthly, by the 7th of the following month." },
      { q: "What is the late fee for a TDS return?", a: "₹200 per day, capped at the amount of tax deducted or collected. Interest applies separately on late deduction or late deposit." },
      { q: "Do I need a TAN?", a: "Yes. A person who deducts tax at source must have a TAN and quote it in challans and statements." },
      { q: "Can you correct a TDS return already filed?", a: "Yes. We file a correction statement to fix a wrong PAN, amount, section or challan, using the form that applies to that period." },
      { q: "I received a TDS default notice. Can you help?", a: "Yes. We read the default report, find the cause, and file the correction or reply that applies." },
      { q: "Do you also issue TDS certificates?", a: "Yes. After the statement is processed, we help you issue the certificates to your employees or vendors." },
      { q: "Do I need to file if I deducted no tax in a quarter?", a: "It depends on whether you made payments that need TDS. We check your payments and tell you." },
      { q: "What if you make a mistake in my TDS return?", a: "We tell you, fix it, and cover any late fee or penalty that arises from our error, provided you gave accurate data on time. Terms apply." },
    ],
  },
  {
    slug: "income-tax-notice-handling",
    name: "Income Tax Notice Handling",
    h1: "Income Tax Notice Reply in Kolkata",
    module: "Advisory & Notices",
    listed: "Income Tax Notice Handling",
    metaTitle: "Income Tax Notice Reply in Kolkata | Income N Filing",
    metaDescription:
      "Received an income tax notice or intimation? We help you read it, collect your documents and prepare a reply on the e-filing portal. One person prepares and another checks. Based in Kasba, Kolkata.",
    intro:
      "An income tax notice is not always a sign of trouble. Many are routine intimations or requests for information. We help you understand what the notice says, what the department is asking for, and prepare a clear reply with the right documents before the date on the notice.",
    whoNeeds: [
      "Taxpayers who received an intimation after filing their return",
      "Anyone told their return is defective and needs correction",
      "Taxpayers asked for information or documents by the department",
      "People who received a demand and are not sure it is correct",
      "Businesses and professionals selected for a detailed check",
    ],
    sections: [
      { h: "Common notices", items: ["Intimation after processing of your return, which compares your return with the department's records", "Notice that the return is defective and must be corrected", "Request for information, documents or a missing return", "Notice for a detailed check of your return", "Demand for tax, interest or a fee"], note: "For returns up to AY 2026-27, the Income-tax Act, 1961 applies, so the notice will carry those section numbers. Notices under the Income-tax Act, 2025 follow for later years." },
      { h: "What to do first", items: ["Check that the notice is genuine. A real notice carries a document identification number (DIN) and appears on your e-filing portal.", "Note the section, the reason, the date and the response deadline.", "Do not ignore it, and do not send a reply by any route other than the one the notice allows.", "Send us a copy right away so we can tell you what it needs."] },
      { h: "Documents to keep ready", items: ["The notice or intimation, and its attachments", "The return you filed and its acknowledgement", "AIS, Form 26AS and Form 16 for the year", "Bank statements and proof of the income or deduction in question", "Proofs for any deduction or exemption you claimed", "Earlier notices and replies on the same matter"] },
      { h: "How it works", ordered: true, items: ["You send the notice and your documents on WhatsApp or the form.", "We read it, tell you what it means, and confirm the scope and the fee in writing.", "One person prepares the reply and the supporting documents, and a second person checks it.", "You approve the reply.", "We submit it on the e-filing portal within the deadline, track the response, and tell you the outcome."] },
      { h: "Timeline", text: "The deadline is the one written in your notice. Some notices allow around 15 days and some around 30 days, but you should follow the date on yours. Send us the notice as soon as you receive it, because collecting documents takes time." },
      { h: "What affects the fee", items: ["The type of notice", "The number of years and issues involved", "How much documentation has to be collected", "Whether a revised or corrected return is needed", "Whether personal appearance or further replies are needed"], note: "The fee is fixed and quoted in writing before we start. Government charges, such as tax, interest or a fee, are separate." },
      { h: "Common mistakes to avoid", items: ["Ignoring the notice or missing the response date", "Replying without checking your AIS and Form 26AS", "Agreeing to a demand without checking the figures", "Sending a reply that does not answer the exact point raised", "Uploading unclear or incomplete documents", "Treating a fake email or message as a notice"] },
      { h: "In Kolkata", text: "We are based in Kasba, Kolkata and handle notices for clients across West Bengal and India. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00." },
    ],
    faqs: [
      { q: "I received an income tax notice. Should I be worried?", a: "Not necessarily. Many notices are routine intimations. Read it, check the deadline, and send us a copy so we can tell you what it needs." },
      { q: "How do I know the notice is genuine?", a: "Check that it carries a document identification number and that it appears on your e-filing portal under pending actions. If you cannot find it there, do not act on it, and send it to us." },
      { q: "How long do I have to reply?", a: "The date written in your notice. It is often around 15 to 30 days, depending on the type of notice." },
      { q: "What is an intimation after processing?", a: "It is the department's result of processing your return. It shows whether your tax, refund or deductions differ from what you filed." },
      { q: "My return was called defective. What now?", a: "You have to correct the defect within the time given in the notice. We find the defect and file the corrected return." },
      { q: "I think the demand is wrong. What can I do?", a: "We compare the demand with your return, challans and records, and file a reply or rectification that sets out the difference." },
      { q: "Will you represent me before the department?", a: "We prepare and file your reply on the portal. If the matter needs a lawyer or an appeal, we tell you early and explain your options." },
      { q: "Can you guarantee the notice will be closed?", a: "No one can. The outcome depends on the facts and on the department. We prepare a complete and accurate reply, and we keep you informed at each step." },
      { q: "What if you make a mistake in my reply?", a: "We tell you, fix it, and cover any fee that arises from our error in filing, provided you gave accurate documents on time. Terms apply." },
    ],
  },
  {
    slug: "monthly-bookkeeping",
    name: "Monthly Bookkeeping",
    h1: "Monthly Bookkeeping in Kolkata",
    module: "Accounting & Bookkeeping",
    listed: "Monthly Bookkeeping",
    metaTitle: "Monthly Bookkeeping in Kolkata | Income N Filing",
    metaDescription:
      "Monthly bookkeeping in Kolkata for traders, service providers and companies: entries, bank reconciliation, GST matching and monthly reports in Tally or Excel. One person prepares, another checks.",
    intro:
      "Good books make GST, TDS and income tax filings simple, and they show you how your business is doing. We maintain your books every month in Tally or Excel, reconcile your bank and GST data, and send you a short report. One person prepares and another checks.",
    whoNeeds: [
      "Traders, shops and distributors with regular sales and purchases",
      "Service providers and consultants",
      "Companies and LLPs that need clean books for filings",
      "Businesses behind on their books that want to catch up",
      "Owners who want monthly numbers without hiring an accountant",
    ],
    sections: [
      { h: "What we do each month", items: ["Record sales, purchases, expenses and receipts", "Reconcile your bank accounts", "Match your purchases with GST data before returns are filed", "Track what customers owe you and what you owe suppliers", "Prepare ledgers, a trial balance, and profit and loss and balance sheet for the month", "Send you a short report with the points that need your attention"] },
      { h: "What you receive", items: ["Books kept up to date in Tally or Excel", "Monthly reports in simple language", "A list of unmatched or missing entries for you to clear", "Data ready for GST, TDS and income tax filings", "Year-end books ready for your income tax return and, for companies and LLPs, the filings with the Registrar"] },
      { h: "Documents and data to keep ready", items: ["Sales and purchase invoices, or access to your billing software", "Bank statements and cash records", "Expense bills and payment proofs", "Loan statements and fixed asset purchases", "Payroll details, if you have employees", "Opening balances, if we are taking over from another accountant"] },
      { h: "How it works", ordered: true, items: ["You share your records on WhatsApp, in Tally, or through a shared folder.", "We confirm the scope in writing: the number of entries, banks and registrations.", "One person records the entries and reconciles the accounts each month.", "A second person checks the books and the report.", "We send you the monthly report and the questions we have, and update the books when you reply."] },
      { h: "Timeline", text: "We agree a fixed date each month for you to send records, and the date by which we send your report. If your books are behind, we give a catch-up plan when we confirm the scope." },
      { h: "What affects the fee", items: ["The number of entries each month", "The number of bank accounts and GST registrations", "Whether you use Tally or Excel", "Whether payroll or TDS is included", "How far behind your books are"], note: "The fee is fixed and quoted in writing before we start." },
      { h: "Common mistakes to avoid", items: ["Mixing personal and business payments", "Not recording cash payments", "Not reconciling the bank every month", "Claiming GST credit on purchases that do not appear in GSTR-2B", "Keeping bills in the wrong period", "Doing the books only at year end", "Not keeping invoices and proofs for the period"] },
      { h: "In Kolkata", text: "We are based in Kasba, Kolkata and keep books for clients across West Bengal and India. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00." },
    ],
    faqs: [
      { q: "Do you work in Tally or Excel?", a: "Both. We work in Tally if you use it, or we maintain your books in Excel." },
      { q: "How often do you update the books?", a: "Every month, on a date we agree with you. We send you a short report after each month." },
      { q: "My books are behind. Can you catch up?", a: "Yes. We give you a catch-up plan, record the pending months in order, and tell you what we need from you." },
      { q: "Do you also file my GST and TDS returns?", a: "Yes, if you choose. Clean books make those filings easier, and we can handle them through our GST and TDS services." },
      { q: "Do you do bookkeeping for companies and LLPs?", a: "Yes. We also help with the annual filings with the Registrar, which need your year-end books." },
      { q: "What do I need to send you each month?", a: "Sales and purchase invoices, bank statements, expense bills and payment proofs. We tell you exactly what is missing." },
      { q: "Is my data safe?", a: "We store files in Google Drive and on our own server, and access is limited to authorised people. See our privacy page for details." },
      { q: "Can I get reports for my bank or investors?", a: "Yes. We can prepare the monthly reports in a format that a bank, an investor or your partners can read." },
      { q: "What if you make a mistake in my books?", a: "We tell you, fix it, and cover any penalty or late fee that arises from our error, provided you gave accurate records on time. Terms apply." },
    ],
  },
  {
    "slug": "annual-roc-filing",
    "name": "Annual ROC Filing for Companies",
    "h1": "Annual ROC Filing in Kolkata",
    "module": "Corporate Compliance",
    "listed": "Annual Return (MGT-7)",
    "metaTitle": "Annual ROC Filing in Kolkata | Income N Filing",
    "metaDescription": "Annual ROC filing in Kolkata for private limited companies and OPCs: AOC-4, MGT-7 or MGT-7A, AGM paperwork and director filings, with due dates tracked. One person prepares, another checks.",
    "intro": "Every company registered in India must file its financial statements and annual return with the Registrar of Companies each year, even if it had no business. We handle the AGM paperwork, AOC-4 and MGT-7 or MGT-7A, and keep track of the dates that depend on your AGM. One person prepares and another checks each form before it is filed.",
    "whoNeeds": [
      "Private limited companies, including startups with no revenue yet",
      "One Person Companies",
      "Companies that missed earlier years and want to catch up",
      "Founders who want one team to track all ROC dates",
      "Companies that need books and filings handled together"
    ],
    "sections": [
      {
        "h": "What we do",
        "items": [
          "Check which forms apply to your company and its size",
          "Prepare the notice, minutes and resolutions for your AGM",
          "Prepare and file AOC-4 with your financial statements",
          "Prepare and file MGT-7, or MGT-7A where the company qualifies",
          "File the filing for appointment of your company's auditor where it is due",
          "Check your directors' KYC status and tell you what is pending"
        ]
      },
      {
        "h": "What you receive",
        "items": [
          "Filed forms with the payment receipts",
          "AGM notice and minutes prepared for signing",
          "A list of due dates for your company for the year",
          "A note on anything still pending, such as director KYC"
        ]
      },
      {
        "h": "Key dates for a company with a 31 March year-end",
        "items": [
          "AGM: within six months of year end, so by 30 September",
          "AOC-4: within 30 days of the AGM",
          "MGT-7 or MGT-7A: within 60 days of the AGM",
          "Deposit return (DPT-3): by 30 June, where applicable",
          "For an AGM held on 30 September 2026, AOC-4 falls on 30 October and MGT-7 on 29 November 2026"
        ],
        "note": "These dates move with your AGM date. One Person Companies do not hold an AGM and have separate dates. Late filing attracts an additional fee of ₹100 per day per form."
      },
      {
        "h": "Documents to keep ready",
        "items": [
          "Signed financial statements for the year",
          "Names and DIN of directors, and shareholding details",
          "Board and shareholder resolutions passed during the year",
          "Details of loans, deposits and related-party dealings",
          "Registers and any changes in directors or share capital during the year"
        ]
      },
      {
        "h": "How it works",
        "ordered": true,
        "items": [
          "You share your year-end books and company details.",
          "We confirm which forms apply and the dates, in writing.",
          "One person prepares the AGM papers and forms.",
          "A second person checks the forms against your books and MCA records.",
          "We file, send you the receipts, and note the next due dates."
        ]
      },
      {
        "h": "Timeline",
        "text": "Because the due dates depend on your AGM, we plan backwards from it. We recommend sharing your books at least three weeks before the AGM so the filings are not rushed."
      },
      {
        "h": "What affects the fee",
        "items": [
          "The number of years pending",
          "Whether the company is a private limited company or an OPC",
          "The authorised share capital, which sets the government filing fee",
          "Whether director KYC or other pending filings also need work"
        ],
        "note": "The fee is fixed in writing before we start. Government fees, if any, are charged separately at actuals."
      },
      {
        "h": "Common mistakes we help you avoid",
        "items": [
          "Assuming a company with no business has no filings",
          "Filing MGT-7 before AOC-4 or with figures that do not match the books",
          "Using last year's due dates when the AGM date has changed",
          "Missing director KYC, which can deactivate the DIN",
          "Waiting until the late fee has built up over many months"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Do I have to file if my company had no business?",
        "a": "Yes. A company must file its financial statements and annual return every year, even with no turnover. A late fee applies if it is delayed."
      },
      {
        "q": "What is the due date for AOC-4 and MGT-7?",
        "a": "AOC-4 is due within 30 days of the AGM and MGT-7 within 60 days. For an AGM on 30 September 2026, that is 30 October and 29 November 2026."
      },
      {
        "q": "What is the late fee?",
        "a": "An additional fee of ₹100 per day per form applies on late filing of AOC-4 and MGT-7. Other consequences can apply for the company and its officers."
      },
      {
        "q": "What is the difference between MGT-7 and MGT-7A?",
        "a": "MGT-7A is the shorter annual return for One Person Companies and small companies. We check which one your company qualifies for."
      },
      {
        "q": "Does a One Person Company have the same dates?",
        "a": "No. An OPC does not hold an AGM and has its own dates. We check them for your company."
      },
      {
        "q": "What about director KYC?",
        "a": "The MCA has moved director KYC to a three-year cycle from FY 2025-26. We check each director's status on the MCA portal and tell you if anything is pending."
      },
      {
        "q": "Can you file for years I missed?",
        "a": "Yes. We prepare the pending years in order and explain the late fee for each before you pay."
      },
      {
        "q": "Is ROC filing the same as an income tax return?",
        "a": "No. ROC filings go to the Registrar of Companies. The company's income tax return is a separate filing with the Income Tax Department. We can handle both."
      },
      {
        "q": "What if you make a mistake in my ROC filing?",
        "a": "We tell you, fix it, and cover any penalty or late fee that arises from our error, provided you gave us accurate documents and details on time. Terms apply."
      }
    ]
  },
  {
    "slug": "import-export-code",
    "name": "Import Export Code (IEC)",
    "h1": "Import Export Code (IEC) in Kolkata",
    "module": "Licenses & Registrations",
    "listed": "Import Export Code (IEC)",
    "metaTitle": "Import Export Code (IEC) in Kolkata | Income N Filing",
    "metaDescription": "Import Export Code (IEC) from DGFT in Kolkata: application prepared and checked, plus the yearly update that keeps your code active. One person prepares, another checks.",
    "intro": "An Import Export Code is a ten-character business identification issued by the Directorate General of Foreign Trade (DGFT). It is needed to import or export goods, and it is based on your PAN. It is valid for life, but you must confirm your details on the DGFT portal every year or the code can be deactivated. We prepare your application, check it, and handle the yearly update.",
    "whoNeeds": [
      "Businesses that import or export goods",
      "Traders who sell on international marketplaces",
      "Manufacturers starting to export",
      "Businesses whose code was deactivated for missing the yearly update",
      "Existing IEC holders who need to change details such as address or bank"
    ],
    "sections": [
      {
        "h": "What we do",
        "items": [
          "Check whether your business needs an IEC",
          "Prepare the application on the DGFT portal using your PAN details",
          "Match the name, address and bank details with your other records",
          "File the application and pay the government application fee online",
          "Track the application and download your certificate",
          "Handle changes and the yearly update later"
        ]
      },
      {
        "h": "What you receive",
        "items": [
          "Your IEC certificate",
          "A note on the yearly update window and what happens if it is missed",
          "A reminder before the update window opens each year"
        ]
      },
      {
        "h": "Key facts",
        "items": [
          "The IEC is based on the PAN and has lifetime validity",
          "The government application fee for a new IEC is ₹500, paid to DGFT online",
          "The yearly update must be done between 1 April and 30 June, and carries no government fee",
          "A deactivated code can be restored by filing the pending update"
        ],
        "note": "Please check dgft.gov.in for the current position. Not every service exporter needs an IEC, and we tell you based on your case."
      },
      {
        "h": "Documents to keep ready",
        "items": [
          "PAN of the business or proprietor",
          "Aadhaar and contact details of the proprietor, partner or director",
          "Business address proof",
          "Cancelled cheque or bank certificate",
          "Email address and mobile number linked to the business"
        ]
      },
      {
        "h": "How it works",
        "ordered": true,
        "items": [
          "You share your PAN, address and bank details.",
          "We confirm the scope and what the DGFT portal needs, in writing.",
          "One person prepares the application.",
          "A second person checks it against your documents.",
          "We file it, track it, and send you the certificate."
        ]
      },
      {
        "h": "Timeline",
        "text": "The certificate is issued online after DGFT processes the application. We tell you the expected timing in writing when we take up your case."
      },
      {
        "h": "What affects the fee",
        "items": [
          "Whether this is a new IEC, a change of details or a reactivation",
          "The type of business, such as proprietorship, firm or company",
          "Whether the yearly update is included"
        ],
        "note": "The fee is fixed in writing before we start. Government fees, if any, are charged separately at actuals."
      },
      {
        "h": "Common mistakes we help you avoid",
        "items": [
          "Missing the April to June update, which can deactivate the code",
          "Name or address that differs from PAN and bank records",
          "Applying through a private site that charges more than the official fee",
          "Forgetting to update the IEC after a change of address or bank",
          "Starting shipments before the code is issued"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Who needs an Import Export Code?",
        "a": "Any business that imports or exports goods needs one. Whether a pure service exporter needs it depends on the case, and we advise you after looking at your work."
      },
      {
        "q": "How long is an IEC valid?",
        "a": "It has lifetime validity, but you must confirm or update your details on the DGFT portal every year to keep it active."
      },
      {
        "q": "When is the yearly update due?",
        "a": "Between 1 April and 30 June each year. The update carries no government fee."
      },
      {
        "q": "What if I miss the update?",
        "a": "The code can be deactivated. Filing the pending update on the portal restores it, with no separate DGFT penalty fee as per current guidance."
      },
      {
        "q": "What is the government fee for a new IEC?",
        "a": "The DGFT application fee is ₹500, paid online. Our fee for preparing and checking the application is separate and fixed in writing."
      },
      {
        "q": "Can one PAN have more than one IEC?",
        "a": "No. The IEC is based on the PAN, so there is one IEC per PAN."
      },
      {
        "q": "Can I change my address or bank details later?",
        "a": "Yes. Changes are made through the DGFT portal. We can file them for you."
      },
      {
        "q": "Do I need GST registration to get an IEC?",
        "a": "An IEC is a separate registration from GST. Many exporters need both, and we explain what applies to you."
      },
      {
        "q": "What if you make a mistake in my IEC application?",
        "a": "We tell you, fix it, and cover any penalty or late fee that arises from our error, provided you gave us accurate documents and details on time. Terms apply."
      }
    ]
  },
  {
    "slug": "fssai-license",
    "name": "FSSAI Food License & Registration",
    "h1": "FSSAI License and Registration in Kolkata",
    "module": "Licenses & Registrations",
    "listed": "FSSAI License",
    "metaTitle": "FSSAI Registration & License in Kolkata | Income N Filing",
    "metaDescription": "FSSAI registration, state licence or central licence in Kolkata, with the right category chosen under the limits in force from 1 April 2026. One person prepares, another checks.",
    "intro": "Any business that makes, stores, distributes, sells or imports food needs an FSSAI registration or licence. From 1 April 2026 the turnover limits changed, so many businesses now fall in a different category than before. We check your category, prepare the application on the FSSAI portal, and have a second person check it before it is filed.",
    "whoNeeds": [
      "Restaurants, cafes, cloud kitchens and caterers",
      "Food manufacturers, packers and processors",
      "Shops, wholesalers and distributors of food",
      "Online sellers and e-commerce food businesses",
      "Existing FSSAI holders who want to check whether their category has changed"
    ],
    "sections": [
      {
        "h": "What we do",
        "items": [
          "Check which category applies: registration, state licence or central licence",
          "Prepare the application and the list of food products you handle",
          "Collect and check your premises and identity documents",
          "File on the FSSAI portal and respond to queries from the department",
          "Download your registration or licence once approved",
          "Explain the annual fee and ongoing display and compliance rules"
        ]
      },
      {
        "h": "What you receive",
        "items": [
          "Your FSSAI registration or licence",
          "A note on your category and why it applies",
          "A summary of the yearly fee and compliance points"
        ]
      },
      {
        "h": "Categories from 1 April 2026",
        "items": [
          "Registration (Form A): annual turnover up to ₹1.5 crore",
          "State licence: turnover above ₹1.5 crore and up to ₹50 crore",
          "Central licence: turnover above ₹50 crore",
          "Importers, e-commerce operators and some other activities need a central licence at any turnover"
        ],
        "note": "These limits come from FSSAI's order dated 13 March 2026. New registrations and licences no longer expire, but an annual fee and compliance continue. If you already hold one, we check whether your category changes."
      },
      {
        "h": "Documents to keep ready",
        "items": [
          "Photo ID and address proof of the proprietor, partner or director",
          "Proof of the premises, such as ownership or a rent agreement",
          "Business constitution documents, such as partnership deed or company papers",
          "List of food products and activities",
          "For licences, a layout of the premises and details of equipment",
          "For manufacturing units, a water analysis report where it applies"
        ]
      },
      {
        "h": "How it works",
        "ordered": true,
        "items": [
          "You share your business details and documents.",
          "We confirm the category and what we will file, in writing.",
          "One person prepares the application and product list.",
          "A second person checks it against your documents and the current limits.",
          "We file, answer any query, and send you the certificate once approved."
        ]
      },
      {
        "h": "Timeline",
        "text": "Approval depends on the department, the category and whether the premises need inspection. We give you the expected timing in writing when we take up your case."
      },
      {
        "h": "What affects the fee",
        "items": [
          "The category: registration, state licence or central licence",
          "The number of premises",
          "The kind of food activity and number of products",
          "Whether an existing licence needs to be changed or moved to the new limits"
        ],
        "note": "The fee is fixed in writing before we start. Government fees, if any, are charged separately at actuals."
      },
      {
        "h": "Common mistakes we help you avoid",
        "items": [
          "Applying for registration when the activity needs a licence",
          "Using the old turnover limits of ₹12 lakh and ₹20 crore",
          "Declaring turnover that does not match your GST returns",
          "Missing the annual fee after the licence is issued",
          "Not displaying the licence number at the premises"
        ]
      }
    ],
    "faqs": [
      {
        "q": "Who needs FSSAI registration?",
        "a": "Any business dealing in food: making, storing, selling, distributing or importing. The category depends on turnover and the kind of activity."
      },
      {
        "q": "What are the FSSAI limits now?",
        "a": "From 1 April 2026: registration up to ₹1.5 crore turnover, state licence above ₹1.5 crore and up to ₹50 crore, and central licence above ₹50 crore."
      },
      {
        "q": "Who needs a central licence regardless of turnover?",
        "a": "Importers, e-commerce operators and certain other activities need a central licence at any turnover. We check your activity against the FSSAI list."
      },
      {
        "q": "Do FSSAI registrations and licences still expire?",
        "a": "New registrations and licences issued from 1 April 2026 do not expire, but the annual fee and compliance continue."
      },
      {
        "q": "I already have a licence. What should I do?",
        "a": "Check whether your category has changed under the new limits. We can review your licence and tell you if anything needs to be updated."
      },
      {
        "q": "Does a home kitchen need FSSAI?",
        "a": "A food business run from home generally needs at least an FSSAI registration if it sells food. We tell you what applies after looking at your case."
      },
      {
        "q": "Is turnover checked against GST?",
        "a": "Authorities can compare your declared turnover with other records, so we recommend declaring figures that match your books and returns."
      },
      {
        "q": "Can one licence cover many premises?",
        "a": "Each premises generally needs its own registration or licence. We explain the position for your case."
      },
      {
        "q": "What if you make a mistake in my FSSAI application?",
        "a": "We tell you, fix it, and cover any penalty or late fee that arises from our error, provided you gave us accurate documents and details on time. Terms apply."
      }
    ]
  },
  {
    "slug": "belated-revised-itr-filing",
    "name": "Belated & Revised ITR Filing",
    "h1": "Belated and Revised ITR Filing in Kolkata",
    "module": "Income Tax",
    "listed": "Belated ITR Filing",
    "metaTitle": "Belated & Revised ITR Filing in Kolkata | Income N Filing",
    "metaDescription": "Missed the ITR due date or found an error after filing? We file belated and revised returns in Kolkata, checking AIS and Form 26AS first. One person prepares, another checks.",
    "intro": "If the original due date has passed, you can still file a belated return. If you spotted an error after filing, you can file a revised return. Both have a last date, and a belated return carries a late fee and interest. We check your AIS and Form 26AS, prepare the return, and have a second person check it before it is filed.",
    "whoNeeds": [
      "Salaried people and professionals who missed the 31 July due date",
      "Business owners who missed their due date",
      "People who filed and then found a missing income or deduction",
      "Taxpayers who filed the wrong ITR form",
      "People who did not file for earlier years and want to catch up"
    ],
    "sections": [
      {
        "h": "What we do",
        "items": [
          "Check your AIS, Form 26AS and TIS for income and tax already reported",
          "Choose the correct ITR form for your income",
          "Calculate tax, interest and the late fee before you pay",
          "Prepare and file the belated or revised return",
          "E-verify the return with you and keep the acknowledgement",
          "Explain what happens next, including any refund"
        ]
      },
      {
        "h": "What you receive",
        "items": [
          "Your filed return and acknowledgement",
          "A clear statement of the tax, interest and late fee paid",
          "A note on any limits, such as losses that cannot be carried forward"
        ]
      },
      {
        "h": "Key dates for AY 2026-27 (FY 2025-26)",
        "items": [
          "Original due date for most individuals: 31 July 2026",
          "Belated return under Section 139(4): by 31 December 2026",
          "Revised return under Section 139(5): usually by 31 December 2026",
          "Updated return (ITR-U) under Section 139(8A): up to 31 March 2031, with additional tax"
        ],
        "note": "The Finance Act 2026 also added a fee under Section 234I for some revised returns filed after 31 December 2026. We confirm the current position on the income tax portal before we file."
      },
      {
        "h": "What a belated return costs",
        "items": [
          "Late fee under Section 234F: up to ₹5,000, or up to ₹1,000 if total income is ₹5 lakh or less",
          "Interest under Section 234A on unpaid tax, at 1% per month",
          "Some losses cannot be carried forward, and some deductions may be restricted"
        ]
      },
      {
        "h": "Documents to keep ready",
        "items": [
          "PAN, Aadhaar and bank account details",
          "Form 16 or salary slips, if salaried",
          "Interest certificates, capital gains statements and rent details",
          "Proof of deductions you want to claim",
          "Acknowledgement of the original return, for a revised return"
        ]
      },
      {
        "h": "How it works",
        "ordered": true,
        "items": [
          "You share your documents and tell us whether you filed before.",
          "We check AIS and Form 26AS and confirm the plan and the dates, in writing.",
          "One person prepares the return.",
          "A second person checks it against your records.",
          "We file, you e-verify, and we send you the acknowledgement."
        ]
      },
      {
        "h": "Timeline",
        "text": "The key factor is the last date. We start as soon as you share your documents and tell you straight away if a date is close."
      },
      {
        "h": "What affects the fee",
        "items": [
          "The ITR form and the number of income sources",
          "Whether you also have capital gains, business income or foreign assets",
          "The number of years pending",
          "Whether a notice or mismatch has to be sorted out first"
        ],
        "note": "The fee is fixed in writing before we start. Government fees, if any, are charged separately at actuals."
      },
      {
        "h": "Common mistakes we help you avoid",
        "items": [
          "Waiting until the last week of December",
          "Skipping AIS, which shows income you forgot",
          "Choosing the wrong ITR form",
          "Not e-verifying, which leaves the return incomplete",
          "Assuming a belated return can claim every deduction"
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is the last date for a belated return for AY 2026-27?",
        "a": "31 December 2026, or before assessment is completed, whichever is earlier."
      },
      {
        "q": "What is the late fee for filing late?",
        "a": "A fee under Section 234F of up to ₹5,000, or up to ₹1,000 if total income is ₹5 lakh or less. Interest under Section 234A also applies on any unpaid tax."
      },
      {
        "q": "Can I file after 31 December 2026?",
        "a": "After that date the belated route closes. An updated return (ITR-U) may be possible, with additional tax, up to 31 March 2031."
      },
      {
        "q": "Can I revise a belated return?",
        "a": "Yes. A belated return can be revised before the last date for revision."
      },
      {
        "q": "What is the last date for a revised return?",
        "a": "The usual last date is 31 December 2026. A fee under Section 234I may apply for some revised returns filed after that date, so we check the current position on the portal."
      },
      {
        "q": "Can I still claim a refund with a belated return?",
        "a": "Generally yes, if tax has been paid in excess. Some deductions and loss carry-forwards may be restricted, so we check your case."
      },
      {
        "q": "I filed the wrong ITR form. What now?",
        "a": "We check whether a revised return or a defective-return reply is the right route, and tell you before filing."
      },
      {
        "q": "Do you check AIS before filing?",
        "a": "Yes. We compare your AIS, Form 26AS and TIS with your records so that income already reported is not missed."
      },
      {
        "q": "What if you make a mistake in my return?",
        "a": "We tell you, fix it, and cover any penalty or late fee that arises from our error, provided you gave us accurate documents and details on time. Terms apply."
      }
    ]
  },
  {
    "slug": "late-gst-return-filing",
    "name": "Late GST Return Filing",
    "h1": "Late GST Return Filing in Kolkata",
    "module": "GST Compliance",
    "listed": "Late GST Return Filing",
    "metaTitle": "Late GST Return Filing in Kolkata | Income N Filing",
    "metaDescription": "GST returns pending or filed late? We reconcile your data, file overdue GSTR-1 and GSTR-3B in Kolkata, and explain late fee and interest before you pay. One person prepares, another checks.",
    "intro": "When GST returns are not filed by the due date, late fees and interest build up, and continued non-filing can lead to blocked returns, blocked e-way bills and a notice to cancel your registration. We reconcile your sales and purchase data, file the overdue returns in the right order, and explain the late fee and interest before you pay. One person prepares and another checks.",
    "whoNeeds": [
      "Businesses with GSTR-1 or GSTR-3B pending for one or more months",
      "Businesses that received a notice for non-filing",
      "Businesses whose registration is suspended or at risk of cancellation",
      "New registrants who forgot to start filing",
      "Businesses with annual return (GSTR-9) pending"
    ],
    "sections": [
      {
        "h": "What we do",
        "items": [
          "List every return that is pending and its due date",
          "Rebuild your sales and purchase data for the missing months",
          "Match purchases with the GST portal data before filing",
          "File the overdue GSTR-1 and GSTR-3B in the right order",
          "Calculate late fee and interest and show you the figures before you pay",
          "Reply to any notice related to the non-filing"
        ]
      },
      {
        "h": "What you receive",
        "items": [
          "Filed returns with acknowledgements",
          "A statement of late fee and interest for each return",
          "A calendar so the next due dates are not missed"
        ]
      },
      {
        "h": "Late fee and interest",
        "items": [
          "Late fee: ₹50 per day (₹25 CGST and ₹25 SGST), or ₹20 per day for a nil return",
          "Maximum late fee per return: ₹500 for a nil return, ₹2,000 for turnover up to ₹1.5 crore, ₹5,000 for ₹1.5 to ₹5 crore, and ₹10,000 above ₹5 crore",
          "Interest: 18% per year on tax paid late",
          "From the January 2026 return period, the portal calculates interest on late GSTR-3B with some relief for cash already in your ledger"
        ],
        "note": "Late fee applies to each return separately. Please check the GST portal for the current position."
      },
      {
        "h": "What can happen if you keep not filing",
        "items": [
          "GSTR-1 can be blocked if GSTR-3B is pending for two consecutive periods",
          "E-way bill generation can be restricted",
          "Your registration can be suspended and then cancelled after a notice (Form REG-17), with 30 days to reply",
          "Your buyers can lose input tax credit on your invoices"
        ]
      },
      {
        "h": "Documents and data to keep ready",
        "items": [
          "Sales invoices and purchase bills for the missing months",
          "Bank statements",
          "Credit and debit notes",
          "GST portal login access, or the details we need to request it",
          "Any notice you have received"
        ]
      },
      {
        "h": "How it works",
        "ordered": true,
        "items": [
          "You tell us which months are pending and share your records.",
          "We confirm the list of returns, the order, and the plan in writing.",
          "One person prepares the returns and the late fee and interest working.",
          "A second person checks them against your data and the portal.",
          "We file, you pay the tax, late fee and interest, and we send you the acknowledgements."
        ]
      },
      {
        "h": "Timeline",
        "text": "If only a few months are pending, we can usually plan filing quickly once your data is ready. If many months are pending or a notice has come, we give a plan with dates in writing."
      },
      {
        "h": "What affects the fee",
        "items": [
          "The number of returns pending",
          "The volume of invoices for the missing months",
          "Whether a notice or suspension is involved",
          "Whether the annual return is also pending"
        ],
        "note": "The fee is fixed in writing before we start. Government fees, if any, are charged separately at actuals."
      },
      {
        "h": "Common mistakes we help you avoid",
        "items": [
          "Filing GSTR-3B without GSTR-1 data being right",
          "Assuming a nil return has no late fee",
          "Paying tax late and ignoring the interest",
          "Not replying to a suspension notice within the time given",
          "Continuing to skip months in the hope of filing everything together"
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is the late fee for GSTR-3B?",
        "a": "₹50 per day for a return with tax, or ₹20 per day for a nil return, subject to a maximum per return that depends on your turnover."
      },
      {
        "q": "Is there interest as well?",
        "a": "Yes. Interest at 18% per year applies on tax paid after the due date."
      },
      {
        "q": "I had no sales. Do I still have to file?",
        "a": "Yes. A nil return must be filed, and a late fee applies if it is late."
      },
      {
        "q": "Can my GST registration be cancelled for not filing?",
        "a": "Yes. Continued non-filing can lead to suspension and then cancellation after a notice, and you have time to reply to the notice."
      },
      {
        "q": "What if I have several months pending?",
        "a": "We file them in order, starting with the oldest. We show you the late fee and interest for each before you pay."
      },
      {
        "q": "Can the late fee be waived?",
        "a": "Waiver schemes are announced by the Government for specific periods and conditions. We check whether any applies to your returns, and do not assume one."
      },
      {
        "q": "Will pending returns block my other work?",
        "a": "They can. For example, GSTR-1 can be blocked and e-way bill generation restricted. Filing the pending returns restores normal use."
      },
      {
        "q": "Do you also handle the annual return?",
        "a": "Yes. We can file the annual return (GSTR-9) too, and we check whether a late fee applies."
      },
      {
        "q": "What if you make a mistake in my GST returns?",
        "a": "We tell you, fix it, and cover any penalty or late fee that arises from our error, provided you gave us accurate documents and details on time. Terms apply."
      }
    ]
  },
  {
    slug: "professional-tax",
    name: "Professional Tax West Bengal",
    h1: "Professional Tax Registration and Return in Kolkata",
    module: "Licenses & Registrations",
    listed: "Professional Tax",
    metaTitle: "Professional Tax in Kolkata: PTRC, PTEC | Income N Filing",
    metaDescription:
      "West Bengal professional tax in Kolkata: PTRC and PTEC registration, monthly payment by the 21st and annual Form III, with the new salary slabs from 1 October 2026. Fee fixed in writing.",
    intro:
      "We register you for professional tax in West Bengal, pay it on the state portal every month and file the annual return. One person prepares the working and another checks it before anything is paid. The fee is fixed in writing, and the tax itself goes to the government at actuals.",
    whoNeeds: [
      "Employers who deduct professional tax from staff salary (PTRC)",
      "Companies, firms, LLPs, traders and professionals who pay in their own name (PTEC)",
      "New businesses that employ staff in West Bengal",
      "Businesses with old months or an old annual return still pending",
    ],
    sections: [
      { h: "PTRC or PTEC: which one do you need?", items: [
        "PTRC is for an employer who deducts tax from employees' salary and deposits it with the state.",
        "PTEC is for the company, firm or professional paying tax in its own name, once a year.",
        "Many businesses need both. We tell you which applies, and you do not pay for one you do not need.",
      ] },
      { h: "Salary slabs from 1 October 2026", items: [
        "Up to ₹20,000 a month: nil",
        "₹20,001 to ₹30,000: ₹100 a month",
        "₹30,001 to ₹50,000: ₹140 a month",
        "₹50,001 to ₹1,00,000: ₹170 a month",
        "Above ₹1,00,000: ₹208 a month",
      ], note: "Notification No. 1607-F.T. dated 16 September 2026. For salary months up to September 2026, the old slabs apply." },
      { h: "Dates to remember", items: [
        "Employee tax deposit (PTRC): by the 21st of the next month.",
        "PTEC yearly payment: by 31 July.",
        "Annual Form III (PTRC): by 30 April, once the year's tax is paid. The state sometimes extends this date.",
        "Interest on late payment is 1% of the tax for each month of delay.",
      ] },
      { h: "What we need from you", items: [
        "PAN, address proof, and the business registration paper (certificate of incorporation, partnership deed or shop licence)",
        "For PTRC: a list of employees with names and monthly gross salary, and each month's salary figure by the 15th",
        "A mobile number and email you control, because the portal sends OTPs there",
      ] },
      { h: "How it works", ordered: true, items: [
        "You share your documents and the employee list on WhatsApp or the form.",
        "We confirm the scope and the plan in writing.",
        "We register you, then prepare the monthly deduction chart and the challan.",
        "You send the tax amount, and we pay it on the portal by the 21st and send you the GRN.",
        "After the year's tax is paid, we file the annual Form III.",
      ] },
      { h: "What is not covered", items: [
        "Payroll making, PF and ESIC",
        "Professional tax of other states",
        "Replies to department notices and appeals, unless quoted separately",
        "The tax, interest and penalties themselves, which you pay at actuals",
      ] },
    ],
    faqs: [
      { q: "What is the difference between PTRC and PTEC?", a: "PTRC is the employer's registration for deducting professional tax from salary. PTEC is the enrolment for a company, firm or professional paying in their own name." },
      { q: "What are the professional tax slabs in West Bengal now?", a: "From 1 October 2026, salary up to ₹20,000 a month pays nothing. Above that the tax is ₹100, ₹140, ₹170 and ₹208 a month for the next four slabs, ending above ₹1,00,000." },
      { q: "When is professional tax due?", a: "The employee tax is due by the 21st of the next month. The yearly PTEC payment is due by 31 July. The annual Form III is due by 30 April once the year's tax is paid." },
      { q: "What happens if I pay late?", a: "Interest of 1% of the tax applies for each month of delay, and penalties apply for a late application or late return." },
      { q: "Is the professional tax part of your fee?", a: "No. Our fee is for the professional work. The tax goes to the government at actuals, and we pay it on the portal only after you send us the money." },
      { q: "Can you clear old months and returns?", a: "Yes. We clear the pending months before filing the annual return, and quote the price per year in writing." },
      { q: "Do you cover professional tax in other states?", a: "No. This service is for West Bengal." },
      { q: "How much does it cost?", a: "Prices are on our professional tax price page, with plans by number of employees. The fee is fixed in writing before we start." },
    ],
  },
  {
    slug: "msme-udyam-registration",
    name: "MSME (Udyam) Registration",
    h1: "MSME (Udyam) Registration in Kolkata",
    module: "Licenses & Registrations",
    listed: "MSME / Udyam",
    metaTitle: "MSME (Udyam) Registration in Kolkata | Income N Filing",
    metaDescription:
      "Udyam registration in Kolkata: category check, NIC activity code, Udyam number and certificate, plus updates and reprints. The government fee is ₹0. One person prepares, another checks.",
    intro:
      "We check whether Udyam helps your business, choose the right NIC activity code, file the application and send you the Udyam number and certificate. One person prepares the application and another checks it before it is filed. The government charges nothing for Udyam registration or update. Our fee is only for our work, and it is fixed in writing.",
    whoNeeds: [
      "Proprietors, partnership firms, LLPs and companies that make, trade or provide services",
      "Businesses that want priority sector loans or loan schemes that need no collateral",
      "Sellers who want protection against delayed payment from buyers",
      "Existing Udyam holders who need to update details or reprint the certificate",
      "Businesses that lost their Udyam number",
    ],
    sections: [
      { h: "Micro, small or medium: which category are you?", items: [
        "Micro: investment up to ₹2.5 crore and turnover up to ₹10 crore.",
        "Small: investment up to ₹25 crore and turnover up to ₹100 crore.",
        "Medium: investment up to ₹125 crore and turnover up to ₹500 crore.",
        "Both limits must be met. Investment and turnover are checked from your PAN, ITR and GST records.",
      ], note: "These limits are in force from 1 April 2025. Limits can change by notification, so we check the current figures before we file." },
      { h: "What you pay the government", items: [
        "The Udyam portal does not charge for registration or update. The government fee is ₹0.",
        "Be careful with sites that charge a 'government fee' for Udyam. The portal is the official source.",
        "Our fee is for professional work, and it is quoted in writing before we start.",
      ] },
      { h: "What we do", ordered: true, items: [
        "We check whether Udyam helps your business and which category fits.",
        "We choose the NIC activity code for what your business really does.",
        "One person prepares the application from your Aadhaar and PAN details, and another checks it.",
        "You give the OTP, and we file on the Udyam portal.",
        "We send you the Udyam number and the certificate as a PDF.",
        "We keep one WhatsApp contact and send a status message at every stage.",
      ] },
      { h: "Documents and details we need", items: [
        "Aadhaar and PAN of the owner, partner, director or authorised signatory",
        "Mobile number linked to Aadhaar, for the OTP, and your email",
        "GSTIN, if you have one",
        "Business name, address, date business started, number of employees and bank account details",
        "Your type of business and what you do, in plain words. We choose the activity code.",
      ] },
      { h: "Other Udyam services", items: [
        "Update: address, activity, partners, bank, investment or turnover.",
        "Lost number or reprint: we recover your Udyam number and reprint the certificate.",
        "Closing or cancelling an Udyam.",
        "Help with schemes after registration, such as NSIC, CGTMSE or an MSME loan. We first tell you if you qualify.",
      ] },
      { h: "Common mistakes to avoid", items: [
        "Wrong NIC activity code, which can block scheme benefits later",
        "Details that do not match Aadhaar or PAN, which can get the application rejected",
        "Wrong investment or turnover figures, which put you in the wrong category",
        "Forgetting to update Udyam when your business details change",
        "Paying a non-official site a 'government fee'",
      ] },
      { h: "In Kolkata", text: "We are based in Kasba, Kolkata and register businesses for Udyam across West Bengal and India. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00." },
    ],
    faqs: [
      { q: "Is Udyam registration compulsory?", a: "Udyam is not needed to run a business. It is needed to claim MSME benefits such as many loan schemes and delayed-payment protection. We tell you in plain words whether it helps you." },
      { q: "Does the government charge a fee for Udyam?", a: "No. The Udyam portal does not charge for registration or update. Our fee is only for our work." },
      { q: "How do I know if I am micro, small or medium?", a: "Both investment and turnover must be within the limit. For micro it is ₹2.5 crore and ₹10 crore, for small ₹25 crore and ₹100 crore, and for medium ₹125 crore and ₹500 crore." },
      { q: "Does Udyam need renewal?", a: "No. Udyam registration does not need renewal. You should update the details when they change." },
      { q: "Can I register under someone else's PAN?", a: "No. Udyam is registered in the name of the PAN holder and cannot be moved to another person." },
      { q: "I lost my Udyam number. What now?", a: "We recover your number and reprint your certificate. We can also fix wrong details on it." },
      { q: "Does Udyam give me a loan?", a: "No. Udyam is a registration. It can help you apply for loan schemes, but approval is the bank's decision." },
      { q: "Can my application be rejected?", a: "Yes, if your details do not match your Aadhaar and PAN. We check this first and tell you how to fix it before we file." },
      { q: "What if you make a mistake in my application?", a: "We tell you, fix it, and cover any extra cost that arises from our error, provided you gave accurate details on time. Terms apply." },
    ],
  },
  {
    slug: "annual-roc-filing",
    name: "Annual ROC Filing",
    h1: "Annual ROC Filing in Kolkata for Companies and LLPs",
    module: "Corporate Compliance",
    listed: "Annual Return (MGT-7)",
    metaTitle: "Annual ROC Filing in Kolkata: AOC-4, MGT-7 | Income N Filing",
    metaDescription:
      "Annual ROC filing in Kolkata for private limited companies and LLPs: AOC-4, MGT-7 or MGT-7A, LLP Form 11 and Form 8, and DIR-3 KYC. One person prepares, another checks, and we file before the date.",
    intro:
      "We prepare and file the yearly filings with the Registrar of Companies for private limited companies and LLPs. One person prepares the forms from your approved financial statements and another checks them before filing. The fee is fixed in writing, and the government fees go to the government at actuals.",
    whoNeeds: [
      "Private limited companies and one person companies, including those with no business",
      "LLPs, including those with no business",
      "Directors who must complete DIR-3 KYC",
      "Companies and LLPs that missed an earlier year and want to catch up",
    ],
    sections: [
      { h: "Filings for a company", items: [
        "AOC-4: financial statements, within 30 days of the AGM.",
        "MGT-7 or MGT-7A: annual return, within 60 days of the AGM. MGT-7A is the shorter form for small companies and one person companies.",
        "DIR-3 KYC: every director with a DIN completes it by 30 September each year.",
        "Event filings, such as director changes or share allotment, are due within 30 days of the event.",
      ], note: "The AGM is due by 30 September for a year ending 31 March. The dates run from the actual AGM date. Dates and any relief come from MCA notifications, so we check before filing." },
      { h: "Filings for an LLP", items: [
        "Form 11: annual return, by 30 May.",
        "Form 8: statement of account and solvency, by 30 October.",
        "Changes in partners or registered office are filed within 30 days.",
      ] },
      { h: "What late filing costs", items: [
        "An additional fee of ₹100 per day, per form, applies on late filing.",
        "Repeated default can lead to the company being struck off, or to directors being disqualified.",
        "Late DIR-3 KYC deactivates the DIN until it is completed.",
      ], note: "The additional fee follows the MCA rules and any relief notified. We tell you the exact amount before you pay." },
      { h: "How it works", ordered: true, items: [
        "You send the approved financial statements and details of shareholders and directors.",
        "We confirm the scope and the forms that apply, in writing.",
        "One person prepares the forms, and another checks them.",
        "You approve, we file on the MCA portal and send you the acknowledgement.",
      ] },
      { h: "What we need from you", items: [
        "Financial statements approved by the board and signed by your independent professional",
        "Date of the AGM and the board resolutions",
        "List of directors and shareholders with shareholding",
        "DSC of the director or authorised signatory",
        "Details of any change during the year",
      ] },
      { h: "Common mistakes to avoid", items: [
        "Holding the AGM late and missing the 30-day and 60-day dates that follow it",
        "Shareholding in MGT-7 that does not match the registers",
        "Not filing for a year with no business, because 'nothing happened'",
        "Letting a director's DIN lapse by missing DIR-3 KYC",
        "Waiting for the last day, when the portal is slow",
      ] },
      { h: "In Kolkata", text: "We are based in Kasba, Kolkata and file ROC returns for companies and LLPs across India. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00." },
    ],
    faqs: [
      { q: "Do I have to file ROC returns if the company has no business?", a: "Yes. A company or LLP with no business still files its yearly forms. The late fee applies even when there is no activity." },
      { q: "What is the due date for AOC-4 and MGT-7?", a: "AOC-4 is due within 30 days of the AGM and MGT-7 within 60 days. If the AGM is on 30 September, the dates are 30 October and 29 November." },
      { q: "What is the difference between MGT-7 and MGT-7A?", a: "MGT-7A is the shorter annual return for one person companies and small companies. Larger companies file MGT-7. We tell you which applies." },
      { q: "When do LLPs file?", a: "Form 11 by 30 May and Form 8 by 30 October each year." },
      { q: "What is DIR-3 KYC?", a: "A yearly KYC for every director who holds a DIN. It is due by 30 September, and a late filing deactivates the DIN until it is done." },
      { q: "What is the late fee?", a: "An additional fee of ₹100 per day, per form, applies on late filing. We tell you the amount for your case before you pay." },
      { q: "I missed earlier years. Can you help?", a: "Yes. We prepare a catch-up plan, file the pending years in order, and tell you the late fee in advance." },
      { q: "Does your fee include the government fee?", a: "No. Our fee is fixed in writing. Government fees and late fees are separate and paid at actuals." },
      { q: "What if you make a mistake in my filing?", a: "We tell you, fix it, and cover any late fee that arises from our error, provided you gave accurate data on time. Terms apply." },
    ],
  },
  {
    slug: "import-export-code",
    name: "Import Export Code (IEC)",
    h1: "Import Export Code (IEC) Registration in Kolkata",
    module: "Licenses & Registrations",
    listed: "Import Export Code (IEC)",
    metaTitle: "Import Export Code (IEC) in Kolkata | Income N Filing",
    metaDescription:
      "IEC registration in Kolkata: DGFT application, the ₹500 government fee, and the yearly update in April to June that keeps your code active. One person prepares, another checks.",
    intro:
      "We apply for your Import Export Code on the DGFT portal and then remind you about the yearly update that keeps it active. One person prepares the application and another checks it before it is filed. The DGFT fee is paid to the government, and our fee is fixed in writing.",
    whoNeeds: [
      "Businesses that import goods or export goods from India",
      "Sellers who want to export through online marketplaces",
      "Existing IEC holders whose code needs an update or has been deactivated",
      "Businesses that want to claim DGFT export benefits",
    ],
    sections: [
      { h: "What the IEC is", items: [
        "A 10-digit code issued by the Director General of Foreign Trade (DGFT).",
        "It is needed for customs clearance and for import and export of goods.",
        "It is linked to the PAN of the business, and it does not expire.",
        "For services only, an IEC is generally not required. We tell you whether you need one.",
      ] },
      { h: "What you pay the government", items: [
        "A one-time DGFT application fee of ₹500.",
        "The yearly update in April to June has no DGFT fee.",
        "Our fee is for professional work, and it is quoted in writing before we start.",
      ], note: "Government fees can change by notification, so we confirm the amount before we file." },
      { h: "The yearly update: do not miss it", items: [
        "Every IEC holder must confirm or update the details on the DGFT portal between 1 April and 30 June, even if nothing has changed.",
        "If the update is missed, the IEC is deactivated and import and export transactions are blocked until it is updated.",
        "We set a reminder and file the update for our clients.",
      ] },
      { h: "How it works", ordered: true, items: [
        "You send your PAN, address and bank details.",
        "One person prepares the DGFT application, and another checks it.",
        "You approve, we file and pay the DGFT fee, and share the acknowledgement.",
        "We send you the IEC certificate and note the April to June update date.",
      ] },
      { h: "Documents we need", items: [
        "PAN of the business or proprietor",
        "Aadhaar of the proprietor, partner or director who signs",
        "Address proof of the business",
        "Cancelled cheque or bank proof",
        "Mobile number and email for OTP",
      ] },
      { h: "Common mistakes to avoid", items: [
        "Missing the April to June update, which deactivates the code",
        "Bank or address details that do not match the records",
        "Applying for a new code when the old one only needs an update",
        "Paying more than the government fee to a non-official site",
      ] },
      { h: "In Kolkata", text: "We are based in Kasba, Kolkata and apply for IEC for clients across India. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00." },
    ],
    faqs: [
      { q: "Do I need an IEC to export?", a: "For exporting or importing goods, yes. For services only, it is generally not required, but a bank or marketplace may ask for it. We tell you what applies to you." },
      { q: "What is the DGFT fee for a new IEC?", a: "₹500, paid once, online. Our fee is separate." },
      { q: "Does the IEC expire?", a: "No. It does not expire, but it must be updated every year between 1 April and 30 June." },
      { q: "What happens if I miss the yearly update?", a: "The IEC is deactivated and import and export transactions are blocked until you update it." },
      { q: "Is there a fee for the yearly update?", a: "The DGFT does not charge for the yearly update." },
      { q: "Whose PAN is used?", a: "The IEC is linked to the PAN of the business or proprietor, and the details must match." },
      { q: "Can I change the address or bank on my IEC?", a: "Yes, you can modify the details on the DGFT portal. A small DGFT fee can apply for changes, and we tell you in advance." },
      { q: "How long does it take?", a: "It depends on the portal and on your details being correct. We tell you the steps and where your file stands at every stage." },
      { q: "What if you make a mistake in my application?", a: "We tell you, fix it, and cover any extra government fee that arises from our error, provided you gave accurate details on time. Terms apply." },
    ],
  },
  {
    slug: "fssai-license",
    name: "FSSAI License",
    h1: "FSSAI Registration and License in Kolkata",
    module: "Licenses & Registrations",
    listed: "FSSAI License",
    metaTitle: "FSSAI Registration and License in Kolkata | Income N Filing",
    metaDescription:
      "FSSAI registration, state licence or central licence in Kolkata, with the turnover limits in force from 1 April 2026. We pick the right category, prepare your application on FoSCoS and follow it up.",
    intro:
      "We pick the right FSSAI category for your food business, prepare the application on the FoSCoS portal and follow it up until you receive your registration or licence. One person prepares the application and another checks it. The fee is fixed in writing, and the government fee is paid at actuals.",
    whoNeeds: [
      "Restaurants, cafes, cloud kitchens and caterers",
      "Food manufacturers, packers and processors",
      "Shops, traders, distributors and wholesalers of food",
      "Online food sellers and home-based food businesses",
      "Existing licence holders who want to change their details or category",
    ],
    sections: [
      { h: "Which category do you need?", items: [
        "Basic registration: annual turnover up to ₹1.5 crore.",
        "State licence: turnover above ₹1.5 crore and up to ₹50 crore.",
        "Central licence: turnover above ₹50 crore.",
        "Some activities need a particular category whatever the turnover, so we check your activity as well as your turnover.",
      ], note: "These limits come from an FSSAI order dated 13 March 2026, in force from 1 April 2026. Earlier limits were lower. We confirm the current rules on FoSCoS before we file." },
      { h: "What you pay the government", items: [
        "The government fee depends on the category and on your activity.",
        "It is paid on the FoSCoS portal at actuals, and we show it to you before you pay.",
        "Our fee is for professional work, and it is quoted in writing before we start.",
      ] },
      { h: "How it works", ordered: true, items: [
        "You tell us what food you make, sell or serve, and your turnover.",
        "We confirm the category, the fee and the documents, in writing.",
        "One person prepares the application on FoSCoS, and another checks it.",
        "You approve, we file and pay the government fee, and follow up.",
        "We send you the registration or licence, and note any date to remember.",
      ] },
      { h: "Documents we need", items: [
        "PAN and Aadhaar of the proprietor, partner or director",
        "Photograph of the owner or authorised person",
        "Address proof of the premises, and rent agreement with no-objection letter if rented",
        "Business registration proof, if the business is a firm or company",
        "List of food products or the menu, and other papers for your category",
      ] },
      { h: "Common mistakes to avoid", items: [
        "Applying in the wrong category, which gets the application rejected",
        "Taking only a basic registration when your activity needs a licence",
        "Premises details that do not match the address proof",
        "Forgetting to change your details or category when your business grows",
        "Selling or running without any registration",
      ] },
      { h: "In Kolkata", text: "We are based in Kasba, Kolkata and help food businesses across West Bengal and India with FSSAI. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00." },
    ],
    faqs: [
      { q: "Do I need FSSAI to sell food?", a: "Food businesses need a registration or a licence. Which one depends on your turnover and your activity. We tell you what applies." },
      { q: "What are the turnover limits?", a: "From 1 April 2026: registration up to ₹1.5 crore, state licence above ₹1.5 crore and up to ₹50 crore, and central licence above ₹50 crore." },
      { q: "I am a home-based food seller. What do I need?", a: "Most small sellers fall under basic registration. Some activities need a licence whatever the turnover, so we check your activity first." },
      { q: "What is the government fee?", a: "It depends on the category and your activity. It is paid on FoSCoS at actuals, and we show it to you before you pay." },
      { q: "Does my licence need renewal?", a: "It depends on your category and the date it was issued. We tell you the validity and any date to remember once your registration or licence is issued." },
      { q: "Can I change my category or details later?", a: "Yes. We help you change the details or move to the right category on FoSCoS." },
      { q: "What if my application is rejected?", a: "We read the reason, correct the application and file again, and tell you what is needed." },
      { q: "How long does it take?", a: "It depends on the category, the authority and your documents being complete. We tell you the steps and where your file stands." },
      { q: "What if you make a mistake in my application?", a: "We tell you, fix it, and cover any extra government fee that arises from our error, provided you gave accurate details on time. Terms apply." },
    ],
  },
  {
    slug: "belated-revised-itr-filing",
    name: "Belated and Revised ITR Filing",
    h1: "Belated and Revised ITR Filing in Kolkata",
    module: "Income Tax",
    listed: "Belated & Revised ITR",
    metaTitle: "Belated and Revised ITR Filing in Kolkata | Income N Filing",
    metaDescription:
      "Missed the ITR due date or made a mistake? File a belated or revised return in Kolkata for AY 2026-27 before 31 December 2026. We calculate the fee and interest first. One person prepares, another checks.",
    intro:
      "If you missed the due date, or filed a return with a mistake, you can still file a belated or revised return. We tell you the late fee and interest first, prepare the return, and file it with the right documents. One person prepares the return and another checks it before filing. The fee is fixed in writing.",
    whoNeeds: [
      "Taxpayers who did not file their return for AY 2026-27 by the due date",
      "Taxpayers who filed on time but found a mistake or a missed income",
      "People who got a message about a defective or mismatched return",
      "Taxpayers with a refund that they have not yet claimed",
      "Taxpayers with several earlier years pending",
    ],
    sections: [
      { h: "Belated return", items: [
        "A belated return is filed after the due date, under Section 139(4) of the Income-tax Act, 1961.",
        "For AY 2026-27 (income of FY 2025-26), it can be filed until 31 December 2026, or until assessment is completed if that comes earlier.",
        "It uses the same ITR forms and the same portal as a regular return.",
      ], note: "Dates come from the Income Tax Department. We check the portal before we file." },
      { h: "What a belated return costs", items: [
        "A late fee under Section 234F: ₹5,000, or ₹1,000 if your total income is ₹5 lakh or less.",
        "Interest at 1% per month on tax you still owe, under Section 234A.",
        "The fee and the interest are paid before you file, on the e-filing portal.",
      ] },
      { h: "What you can lose by filing late", items: [
        "Some losses cannot be carried forward to later years.",
        "A refund can take longer, and interest on a refund can be affected.",
        "Waiting until the last week is risky: portal problems, missing documents or a failed payment can push you past the date.",
      ] },
      { h: "Revised return", items: [
        "If you filed on time or late and found a mistake, you can file a revised return under Section 139(5).",
        "We compare your return with Form 26AS and AIS and tell you what changes.",
        "We confirm the last date for revision on the portal before we rely on it.",
      ] },
      { h: "How it works", ordered: true, items: [
        "You send your documents: PAN, Aadhaar, Form 16, Form 26AS, AIS, bank and investment details.",
        "We confirm the scope, the late fee and the interest, in writing.",
        "One person prepares the return, and another checks it.",
        "You approve, we file and e-verify with you, and send the acknowledgement.",
      ] },
      { h: "Common mistakes to avoid", items: [
        "Waiting until the last week of December",
        "Filing without checking AIS and Form 26AS, which leads to a mismatch notice",
        "Not paying the tax and interest before filing",
        "Forgetting to e-verify the return after filing",
        "Ignoring a defective return notice",
      ] },
      { h: "In Kolkata", text: "We are based in Kasba, Kolkata and file belated and revised returns for clients across India. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00." },
    ],
    faqs: [
      { q: "What is the last date for a belated return for AY 2026-27?", a: "31 December 2026, or before assessment is completed, whichever is earlier." },
      { q: "Is there a penalty for filing late?", a: "Yes. A fee under Section 234F of ₹5,000, or ₹1,000 if your total income is ₹5 lakh or less, plus 1% monthly interest on unpaid tax." },
      { q: "Can I still get a refund if I file late?", a: "Yes, if you have a refund due. It can take longer, and the interest on it can be affected." },
      { q: "What is the difference between a belated and a revised return?", a: "A belated return is the first return filed after the due date. A revised return corrects a return that you have already filed." },
      { q: "Can I file after 31 December 2026?", a: "The belated window closes then. An updated return (ITR-U) may be possible in some cases, under its own conditions. Talk to us before you decide." },
      { q: "Can I carry forward my losses if I file late?", a: "Some losses cannot be carried forward when the return is late. We tell you what applies to you." },
      { q: "I have several years pending. Can you help?", a: "Yes. We check which years can still be filed, give you the fee and interest for each, and file them in order." },
      { q: "Do I need to e-verify?", a: "Yes. A return is not complete until it is e-verified. We do this with you and send the acknowledgement." },
      { q: "What if you make a mistake in my return?", a: "We tell you, fix it, and cover any penalty or interest that arises from our error, provided you gave accurate data on time. Terms apply." },
    ],
  },
  {
    slug: "late-gst-return-filing",
    name: "Late GST Return Filing",
    h1: "Late GST Return Filing in Kolkata",
    module: "GST Compliance",
    listed: "Late GST Return Filing",
    metaTitle: "Late GST Return Filing in Kolkata | Income N Filing",
    metaDescription:
      "Behind on GST returns in Kolkata? We tell you the late fee and interest first, then file GSTR-1 and GSTR-3B in order. One person prepares, another checks. Fee fixed in writing.",
    intro:
      "If you have not filed one or more GST returns, we start with a clear picture: which returns are pending, the late fee and interest on each, and the order to file them. Then we file. One person prepares the returns and another checks them before filing. The fee is fixed in writing, and the late fee and interest go to the government.",
    whoNeeds: [
      "Businesses that missed one or more monthly or quarterly returns",
      "Businesses that received a reminder or notice for non-filing",
      "Businesses with a nil return pending",
      "Businesses whose registration is at risk of suspension or cancellation",
      "Businesses taking over from another consultant, with returns pending",
    ],
    sections: [
      { h: "What late filing costs", items: [
        "Late fee: ₹50 a day for GSTR-1 and GSTR-3B (₹25 central tax plus ₹25 state tax), and ₹20 a day for a nil return.",
        "The late fee has a cap: ₹500 for a nil return; for others ₹2,000 up to ₹1.5 crore turnover, ₹5,000 above ₹1.5 crore and up to ₹5 crore, and ₹10,000 above ₹5 crore.",
        "Interest at 18% a year on tax that is paid late.",
        "Late fee and interest are two separate charges.",
      ], note: "Rates and caps come from government notifications. We confirm what applies to you before you pay." },
      { h: "What else can go wrong", items: [
        "Your buyers cannot claim input tax credit on your sales until you file.",
        "Continued non-filing can lead to a notice, and then suspension or cancellation of registration.",
        "Later filing can be blocked while earlier returns are pending.",
      ] },
      { h: "How it works", ordered: true, items: [
        "You tell us the period you missed, or we read your GST portal records with your permission.",
        "We list every pending return, with the late fee and interest for each.",
        "We confirm the scope and the fee, in writing.",
        "One person prepares the returns in order, and another checks them.",
        "You approve, we help you pay the tax, late fee and interest, and file on the portal.",
        "We send you the acknowledgement for each return.",
      ] },
      { h: "What we need from you", items: [
        "GST portal access or your GSTIN with a registered mobile for the OTP",
        "Sales and purchase invoices for each pending period",
        "Bank statements for the period",
        "Details of any e-commerce sales or reverse charge items",
      ] },
      { h: "Common mistakes to avoid", items: [
        "Filing a later month before an earlier one is cleared",
        "Not filing a nil return, because 'nothing happened'",
        "Claiming input tax credit that is not in GSTR-2B",
        "Ignoring a reminder or notice",
        "Paying the tax but forgetting the late fee and interest",
      ] },
      { h: "In Kolkata", text: "We are based in Kasba, Kolkata and file GST returns for clients across West Bengal and India. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00." },
    ],
    faqs: [
      { q: "What is the late fee for GST returns?", a: "₹50 a day for GSTR-1 and GSTR-3B, or ₹20 a day for a nil return, up to a cap that depends on your turnover." },
      { q: "Is there interest as well?", a: "Yes. Interest at 18% a year applies on tax that is paid late. It is separate from the late fee." },
      { q: "I have not filed for several months. Where do we start?", a: "We list every pending return with its late fee and interest, then file them in order, oldest first." },
      { q: "Do I have to file a nil return?", a: "Yes. The late fee for a nil return is lower, but it still applies." },
      { q: "Can my GST registration be cancelled?", a: "Continued non-filing can lead to a notice and then suspension or cancellation. Filing the pending returns early reduces that risk." },
      { q: "Can my buyers be affected?", a: "Yes. Buyers cannot claim input tax credit on your sales until your return is filed." },
      { q: "Can I get a waiver of the late fee?", a: "The government sometimes gives relief by notification. We check what applies on the day, and we do not promise any waiver." },
      { q: "Does your fee include the late fee and interest?", a: "No. Our fee is fixed in writing. The late fee, interest and tax go to the government." },
      { q: "What if you make a mistake in my return?", a: "We tell you, fix it, and cover any penalty or late fee that arises from our error, provided you gave accurate data on time. Terms apply." },
    ],
  },
];

// Some slugs were defined twice (an old and a rewritten entry). Keep the last one, as the slug lookup always did,
// so sitemap, llms.txt, the Kolkata page and static params never list a page twice.
export const SERVICE_PAGES = ALL_SERVICE_PAGES.filter((s, i, a) => a.findLastIndex((t) => t.slug === s.slug) === i);

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICE_PAGES.map((s) => [s.slug, s]));
