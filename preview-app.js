// ═══════════════════════════════════════════════════
// YojnaHub — Full Preview App (SPA)
// ═══════════════════════════════════════════════════

// ─── i18n Translations ───
const TRANSLATIONS = {
  en: {
    "Index.title": "YojnaHub - Your Scheme, Your Right",
    "Index.subtitle": "Find government schemes tailored just for you - in seconds.",
    "Index.getStarted": "Check Your Eligibility",
    "Navigation.home": "Home", "Navigation.schemes": "Schemes",
    "Navigation.saved": "Saved", "Navigation.about": "About", "Navigation.login": "Login", "Navigation.logout": "Logout", "Navigation.signup": "Sign Up",
    "Auth.username": "Username", "Auth.emailMobile": "Mobile Number / Email", "Auth.password": "Password", "Auth.confirmPassword": "Confirm Password",
    "Auth.noAccount": "Don't have an account?", "Auth.hasAccount": "Already have an account?",
    "Schemes.searchPlaceholder": "Search schemes by name, category or description...",
    "Schemes.noResults": "No schemes found matching your search.",
    "Common.copyright": "© 2026 YojnaHub. All rights reserved.",
    "Results.title": "Your Eligibility Results", "Results.basedOn": "Based on:",
    "Results.eligible": "Eligible", "Results.partial": "Action Required",
    "Results.notEligible": "Not Eligible", "Results.why": "Why?",
    "Results.schemeDetails": "Scheme Details & Benefits",
    "Results.documentsRequired": "Documents Required",
    "Results.howToApply": "How to Apply:", "Results.apply": "Apply",
    "Results.voice": "Voice", "Results.downloadChecklist": "Download Checklist",
    "Results.saved": "Saved Schemes", "Results.noSaved": "No schemes saved yet.",
    "Form.title": "Check Your Eligibility",
    "Form.subtitle": "Answer a few simple questions to find schemes tailored for you.",
    "Form.income": "Annual Income (₹)", "Form.occupation": "Occupation",
    "Form.age": "Age", "Form.submit": "Check Eligibility",
    "Form.selectOcc": "Select occupation",
    "Form.salaried": "Salaried", "Form.self_employed": "Self Employed",
    "Form.farmer": "Farmer", "Form.student": "Student",
    "Form.unemployed": "Unemployed", "Form.homemaker": "Homemaker", "Form.retired": "Retired",
    "Form.gender": "Gender", "Form.selectGender": "Select gender",
    "Form.male": "Male", "Form.female": "Female", "Form.other": "Other",
    "Form.bpl": "Do you have a BPL Card?", "Form.bplYes": "Yes", "Form.bplNo": "No", "Form.selectBpl": "Select option",
    "Form.caste": "Caste Category", "Form.selectCaste": "Select caste category",
    "Form.general": "General", "Form.obc": "OBC", "Form.sc": "SC (Scheduled Caste)", "Form.st": "ST (Scheduled Tribe)", "Form.ews": "EWS",
    "Form.disability": "Person with Disability (PwD)?",
    "Form.yes": "Yes", "Form.no": "No", "Form.select": "Select..."
  },
  hi: {
    "Index.title": "योजना हब – आपकी योजना, आपका अधिकार",
    "Index.subtitle": "सरकारी योजनाएं जो आपके लिए बनी हैं – बस कुछ ही सेकंड में खोजें।",
    "Index.getStarted": "अपनी पात्रता जांचें",
    "Navigation.home": "होम", "Navigation.schemes": "योजनाएं",
    "Navigation.saved": "सहेजा गया", "Navigation.about": "हमारे बारे में", "Navigation.login": "लॉगिन", "Navigation.logout": "लॉगआउट", "Navigation.signup": "साइन अप करें",
    "Auth.username": "उपयोगकर्ता नाम", "Auth.emailMobile": "मोबाइल नंबर / ईमेल", "Auth.password": "पासवर्ड", "Auth.confirmPassword": "पासवर्ड की पुष्टि करें",
    "Auth.noAccount": "खाता नहीं है?", "Auth.hasAccount": "पहले से ही एक खाता है?",
    "Schemes.searchPlaceholder": "नाम, श्रेणी या विवरण द्वारा योजनाएं खोजें...",
    "Schemes.noResults": "आपकी खोज से मेल खाने वाली कोई योजना नहीं मिली।",
    "Common.copyright": "© 2026 योजना हब। सर्वाधिकार सुरक्षित।",
    "Results.title": "आपकी पात्रता परिणाम", "Results.basedOn": "आधारित:",
    "Results.eligible": "पात्र", "Results.partial": "कार्रवाई आवश्यक",
    "Results.notEligible": "पात्र नहीं", "Results.why": "क्यों?",
    "Results.schemeDetails": "योजना विवरण और लाभ",
    "Results.documentsRequired": "आवश्यक दस्तावेज",
    "Results.howToApply": "आवेदन कैसे करें:", "Results.apply": "आवेदन करें",
    "Results.voice": "आवाज़", "Results.downloadChecklist": "चेकलिस्ट डाउनलोड करें",
    "Results.saved": "सहेजी गई योजनाएं", "Results.noSaved": "अभी तक कोई योजना सहेजी नहीं गई है।",
    "Form.title": "अपनी पात्रता जांचें",
    "Form.subtitle": "आपके लिए उपयुक्त योजनाएं खोजने के लिए कुछ सवालों का जवाब दें।",
    "Form.income": "वार्षिक आय (₹)", "Form.occupation": "व्यवसाय",
    "Form.age": "उम्र", "Form.submit": "पात्रता जांचें",
    "Form.selectOcc": "व्यवसाय चुनें",
    "Form.salaried": "वेतनभोगी", "Form.self_employed": "स्व-रोज़गार",
    "Form.farmer": "किसान", "Form.student": "छात्र",
    "Form.unemployed": "बेरोज़गार", "Form.homemaker": "गृहिणी", "Form.retired": "सेवानिवृत्त",
    "Form.gender": "लिंग", "Form.selectGender": "लिंग चुनें",
    "Form.male": "पुरुष", "Form.female": "महिला", "Form.other": "अन्य",
    "Form.bpl": "क्या आपके पास BPL कार्ड है?", "Form.bplYes": "हाँ", "Form.bplNo": "नहीं", "Form.selectBpl": "विकल्प चुनें",
    "Form.caste": "जाति श्रेणी", "Form.selectCaste": "जाति श्रेणी चुनें",
    "Form.general": "सामान्य", "Form.obc": "ओबीसी", "Form.sc": "अनुसूचित जाति (SC)", "Form.st": "अनुसूचित जनजाति (ST)", "Form.ews": "ईडब्ल्यूएस",
    "Form.disability": "क्या आप दिव्यांग (PwD) हैं?",
    "Form.yes": "हाँ", "Form.no": "नहीं", "Form.select": "चुने..."
  },
  ta: {
    "Index.title": "யோஜனாஹப் – உங்கள் திட்டம், உங்கள் உரிமை",
    "Index.subtitle": "உங்களுக்கான அரசாங்க திட்டங்களைக் கண்டறியுங்கள் – நொடிகளில்.",
    "Index.getStarted": "தகுதியை சரிபார்க்க",
    "Navigation.home": "முகப்பு", "Navigation.schemes": "திட்டங்கள்",
    "Navigation.saved": "சேமிக்கப்பட்டது", "Navigation.about": "பற்றி", "Navigation.login": "உள்நுழை", "Navigation.logout": "வெளியேறு", "Navigation.signup": "பதிவு செய்க",
    "Auth.username": "பயனர் பெயர்", "Auth.emailMobile": "மொபைல் எண் / மின்னஞ்சல்", "Auth.password": "கடவுச்சொல்", "Auth.confirmPassword": "கடவுச்சொல்லை உறுதியிடவும்",
    "Auth.noAccount": "கணக்கு இல்லையா?", "Auth.hasAccount": "ஏற்கனவே கணக்கு உள்ளதா?",
    "Schemes.searchPlaceholder": "பெயர், வகை அல்லது விளக்கம் மூலம் திட்டங்களைத் தேடுங்கள்...",
    "Schemes.noResults": "உங்கள் தேடலுடன் பொருந்தும் திட்டங்கள் எதுவும் இல்லை.",
    "Common.copyright": "© 2026 யோஜனாஹப். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    "Results.title": "உங்கள் தகுதி முடிவுகள்", "Results.basedOn": "அடிப்படையில்:",
    "Results.eligible": "தகுதியானவர்", "Results.partial": "நடவடிக்கை தேவை",
    "Results.notEligible": "தகுதியற்றவர்", "Results.why": "ஏன்?",
    "Results.schemeDetails": "திட்ட விவரங்கள் மற்றும் பலன்கள்",
    "Results.documentsRequired": "தேவையான ஆவணங்கள்",
    "Results.howToApply": "விண்ணப்பிப்பது எப்படி:", "Results.apply": "விண்ணப்பிக்கவும்",
    "Results.voice": "குரல்", "Results.downloadChecklist": "சரிபார்ப்பு பட்டியலை பதிவிறக்கவும்",
    "Results.saved": "சேமிக்கப்பட்ட திட்டங்கள்", "Results.noSaved": "இன்னும் எந்த திட்டமும் சேமிக்கப்படவில்லை.",
    "Form.title": "உங்கள் தகுதியை சரிபார்க்கவும்",
    "Form.subtitle": "உங்களுக்கான திட்டங்களைக் கண்டறிய சில கேள்விகளுக்கு பதிலளிக்கவும்.",
    "Form.income": "ஆண்டு வருமானம் (₹)", "Form.occupation": "தொழில்",
    "Form.age": "வயது", "Form.submit": "தகுதியை சரிபார்க்கவும்",
    "Form.selectOcc": "தொழிலை தேர்ந்தெடுக்கவும்",
    "Form.salaried": "சம்பளம்", "Form.self_employed": "சுயதொழில்",
    "Form.farmer": "விவசாயி", "Form.student": "மாணவர்",
    "Form.unemployed": "வேலையில்லாதவர்", "Form.homemaker": "இல்லத்தரசி", "Form.retired": "ஓய்வு",
    "Form.gender": "பாலினம்", "Form.selectGender": "பாலினம் தேர்ந்தெடுக்கவும்",
    "Form.male": "ஆண்", "Form.female": "பெண்", "Form.other": "மற்றவை",
    "Form.bpl": "உங்களிடம் BPL அட்டை உள்ளதா?", "Form.bplYes": "ஆம்", "Form.bplNo": "இல்லை", "Form.selectBpl": "விருப்பத்தை தேர்ந்தெடுக்கவும்",
    "Form.caste": "சாதி பிரிவு", "Form.selectCaste": "சாதி பிரிவை தேர்ந்தெடுக்கவும்",
    "Form.general": "பொது", "Form.obc": "OBC", "Form.sc": "SC (பட்டியல் சாதி)", "Form.st": "ST (பழங்குடியினர்)", "Form.ews": "EWS",
    "Form.disability": "மாற்றுத்திறனாளியா (PwD)?",
    "Form.yes": "ஆம்", "Form.no": "இல்லை", "Form.select": "தேர்ந்தெடு..."
  }
};

// ─── Scheme Data ───
const SCHEMES = [
  {
    id: "scheme-1", name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "Income support of ₹6,000 per year for all landholding farmer families.",
    ministry: "Ministry of Agriculture and Farmers Welfare", category: "Agriculture",
    officialLink: "https://pmkisan.gov.in/",
    applicationProcess: "Apply online at official portal or via CSC.",
    documentsRequired: ["Aadhaar Card", "Landholding Papers", "Bank Account Details"],
    eligibilityRules: { occupation: ["farmer"], income: { max: 10000000 } }
  },
  {
    id: "scheme-2", name: "Pradhan Mantri Awas Yojana (Urban)",
    description: "Housing for All in urban areas. Interest subsidy on home loans for EWS/LIG/MIG.",
    ministry: "Ministry of Housing and Urban Affairs", category: "Housing",
    officialLink: "https://pmaymis.gov.in/",
    applicationProcess: "Apply via PMAY(U) MIS portal or CSC.",
    documentsRequired: ["Aadhaar", "Income Proof", "Property Documents", "Caste Certificate (if applicable)"],
    eligibilityRules: { income: { max: 1800000 }, age: { min: 18, max: 70 }, occupation: ["salaried", "self_employed", "farmer", "homemaker", "unemployed", "retired"] }
  },
  {
    id: "scheme-3", name: "Sukanya Samriddhi Yojana",
    description: "Small deposit scheme for the girl child with high interest rate. Parents/guardians of girl children up to age 10 can open an account.",
    ministry: "Ministry of Finance", category: "Child Welfare",
    officialLink: "https://www.nsiindia.gov.in/",
    applicationProcess: "Open account at Post Office or designated banks.",
    documentsRequired: ["Birth Certificate of Girl Child", "ID Proof of Guardian"],
    eligibilityRules: { age: { max: 10 }, gender: ["female"] }
  },
  {
    id: "scheme-4", name: "Atal Pension Yojana",
    description: "Pension scheme for unorganized sector workers. Guaranteed pension of ₹1,000 to ₹5,000 per month after 60.",
    ministry: "Ministry of Finance", category: "Pension",
    officialLink: "https://www.npscra.nsdl.co.in/",
    applicationProcess: "Visit bank branch.",
    documentsRequired: ["Aadhaar", "Savings Bank Account"],
    eligibilityRules: { age: { min: 18, max: 40 }, occupation: ["self_employed", "student", "unemployed", "farmer", "homemaker"] }
  },
  {
    id: "scheme-5", name: "Pradhan Mantri Ujjwala Yojana",
    description: "Free LPG connections to women from BPL households.",
    ministry: "Ministry of Petroleum and Natural Gas", category: "Energy",
    officialLink: "https://www.pmuy.gov.in/",
    applicationProcess: "Apply at nearest LPG distributor.",
    documentsRequired: ["BPL Card", "Aadhaar", "Bank Account"],
    eligibilityRules: { income: { max: 300000 }, gender: ["female"], bpl: true, occupation: ["homemaker", "farmer", "unemployed"] }
  },
  {
    id: "scheme-6", name: "PM Scholarship Scheme (PM-SSS)",
    description: "Scholarship for wards of ex-servicemen & ex-coast guard personnel.",
    ministry: "Ministry of Defence", category: "Education",
    officialLink: "https://ksb.gov.in/",
    applicationProcess: "Apply online at KSB portal.",
    documentsRequired: ["Marksheet", "Ex-Serviceman Certificate", "Bank Account"],
    eligibilityRules: { age: { min: 17, max: 25 }, occupation: ["student"] }
  },
  {
    id: "scheme-7", name: "Post Matric Scholarship for SC/ST Students",
    description: "Financial assistance for SC/ST students pursuing post-matriculation education including maintenance allowance and fee reimbursement.",
    ministry: "Ministry of Social Justice and Empowerment", category: "Education",
    officialLink: "https://scholarships.gov.in/",
    applicationProcess: "Apply online via National Scholarship Portal.",
    documentsRequired: ["Caste Certificate", "Income Certificate", "Marksheet", "Aadhaar", "Bank Account"],
    eligibilityRules: { caste: ["sc", "st"], occupation: ["student"], income: { max: 250000 } }
  },
  {
    id: "scheme-8", name: "Ladli Behna Yojana",
    description: "Monthly financial assistance of ₹1,250 to women aged 21-60 for economic empowerment and health nutrition.",
    ministry: "State Government", category: "Women Welfare",
    officialLink: "https://ladlibahna.mp.gov.in/",
    applicationProcess: "Apply at local gram panchayat or ward office.",
    documentsRequired: ["Aadhaar", "Bank Account", "Samagra ID", "Income Certificate"],
    eligibilityRules: { gender: ["female"], age: { min: 21, max: 60 }, income: { max: 300000 } }
  },
  {
    id: "scheme-9", name: "Stand Up India Scheme",
    description: "Bank loans between ₹10 lakh and ₹1 crore for SC/ST and women entrepreneurs for setting up greenfield enterprises.",
    ministry: "Ministry of Finance", category: "Entrepreneurship",
    officialLink: "https://www.standupmitra.in/",
    applicationProcess: "Apply online at Stand Up India portal or visit bank branch.",
    documentsRequired: ["Aadhaar", "Caste Certificate", "Business Plan", "Bank Account"],
    eligibilityRules: { age: { min: 18 }, occupation: ["self_employed", "unemployed", "homemaker"], casteOrGender: { caste: ["sc", "st"], gender: ["female"] } }
  },
  {
    id: "scheme-10", name: "Mahatma Gandhi NREGA",
    description: "100 days guaranteed wage employment per year to rural households. Priority given to BPL families.",
    ministry: "Ministry of Rural Development", category: "Employment",
    officialLink: "https://nrega.nic.in/",
    applicationProcess: "Apply at local Gram Panchayat with Job Card.",
    documentsRequired: ["Aadhaar", "Job Card", "Bank Account"],
    eligibilityRules: { age: { min: 18 }, occupation: ["farmer", "unemployed", "homemaker", "self_employed"], income: { max: 500000 } }
  },
  {
    id: "scheme-11", name: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
    description: "Maternity benefit of ₹5,000 for the first child to compensate for wage loss and ensure proper nutrition.",
    ministry: "Ministry of Women and Child Development", category: "Women Welfare",
    officialLink: "https://pmmvy-cas.nic.in/",
    applicationProcess: "Register at Anganwadi Centre or approved Health Facility.",
    documentsRequired: ["MCP Card", "Aadhaar", "Bank passbook"],
    eligibilityRules: { gender: ["female"], age: { min: 19 }, income: { max: 800000 } }
  },
  {
    id: "scheme-12", name: "Indira Gandhi National Old Age Pension Scheme",
    description: "Monthly pension for elderly from BPL households.",
    ministry: "Ministry of Rural Development", category: "Pension",
    officialLink: "https://nsap.nic.in/",
    applicationProcess: "Apply to the Social Welfare Department.",
    documentsRequired: ["BPL Card", "Age Proof", "Aadhaar"],
    eligibilityRules: { age: { min: 60 }, bpl: true, income: { max: 200000 } }
  },
  {
    id: "scheme-13", name: "Ayushman Bharat (PM-JAY)",
    description: "World's largest health insurance scheme providing ₹5 lakh coverage per family per year for secondary and tertiary care.",
    ministry: "Ministry of Health and Family Welfare", category: "Health",
    officialLink: "https://pmjay.gov.in/",
    applicationProcess: "Check eligibility online and visit empaneled hospital with Golden Card.",
    documentsRequired: ["Aadhaar", "BPL Card/Ration Card", "PM-JAY ID"],
    eligibilityRules: { bpl: true, income: { max: 500000 } }
  },
  {
    id: "scheme-14", name: "Pradhan Mantri Mudra Yojana (PMMY)",
    description: "Loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises (Shishu, Kishore, Tarun).",
    ministry: "Ministry of Finance", category: "Entrepreneurship",
    officialLink: "https://www.mudra.org.in/",
    applicationProcess: "Apply at commercial banks, RRBs, small finance banks, or MFIs.",
    documentsRequired: ["ID Proof", "Address Proof", "Business Plan", "Caste Certificate (if claiming lower margins)"],
    eligibilityRules: { age: { min: 18 }, occupation: ["self_employed", "unemployed", "retired", "homemaker"] }
  },
  {
    id: "scheme-15", name: "Skill India (PMKVY)",
    description: "Skill certification scheme to enable Indian youth to take up industry-relevant skill training.",
    ministry: "Ministry of Skill Development", category: "Education",
    officialLink: "https://www.pmkvyofficial.org/",
    applicationProcess: "Register at training center or online portal.",
    documentsRequired: ["Aadhaar", "Educational Certificate", "Bank Account"],
    eligibilityRules: { age: { min: 15, max: 45 }, occupation: ["student", "unemployed"] }
  },
  {
    id: "scheme-17", name: "Deendayal Disabled Rehabilitation Scheme",
    description: "Financial assistance for rehabilitation of persons with disabilities to ensure social justice and empowerment.",
    ministry: "Ministry of Social Justice and Empowerment", category: "Disability",
    officialLink: "https://disabilityaffairs.gov.in/",
    applicationProcess: "Apply via state disability department.",
    documentsRequired: ["Disability Certificate", "Income Certificate", "Aadhaar"],
    eligibilityRules: { disability: true, income: { max: 500000 } }
  }
];

// ─── State ───
let currentLang = 'en';
let currentPage = 'home';
let lastResults = [];
let lastProfile = {};
let savedSchemes = JSON.parse(localStorage.getItem('savedSchemes') || '[]');
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
let schemeSearchQuery = '';

// ─── Helpers ───
function t(key) { return TRANSLATIONS[currentLang][key] || key; }

function isSaved(id) { return savedSchemes.includes(id); }

function toggleSave(id) {
  const idx = savedSchemes.indexOf(id);
  if (idx > -1) {
    savedSchemes.splice(idx, 1);
    showToast('🔖 Removed', 'Scheme removed from saved list');
  } else {
    savedSchemes.push(id);
    showToast('🔖 Saved', 'Scheme saved successfully!');
  }
  localStorage.setItem('savedSchemes', JSON.stringify(savedSchemes));
  // If we're on a page that needs re-rendering after save/unsave:
  if (['results', 'schemes', 'saved'].includes(currentPage)) navigate(currentPage);
}

function showToast(title, msg) {
  document.getElementById('toast-title').textContent = title;
  document.getElementById('toast-msg').textContent = msg;
  document.getElementById('toast').classList.add('show');
  setTimeout(() => document.getElementById('toast').classList.remove('show'), 3500);
}

function toggleDropdown(id) {
  document.querySelectorAll('.dropdown-menu').forEach(m => {
    if (m.id !== id) m.classList.remove('show');
  });
  document.getElementById(id).classList.toggle('show');
}

document.addEventListener('click', e => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
  }
});

// ─── Theme ───
function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}
if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark');

// ─── Language ───
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  navigate(currentPage); // re-render page
}

// ─── Matching Engine ───
function evaluateEligibility(user, scheme) {
  const rules = scheme.eligibilityRules;
  const missing = [];
  if (rules.age) {
    if (rules.age.min && user.age < rules.age.min) missing.push(`Minimum age: ${rules.age.min} (You: ${user.age})`);
    if (rules.age.max && user.age > rules.age.max) missing.push(`Maximum age: ${rules.age.max} (You: ${user.age})`);
  }
  if (rules.income) {
    if (rules.income.max && user.income > rules.income.max) missing.push(`Income must be < ₹${rules.income.max.toLocaleString()} (Yours: ₹${user.income.toLocaleString()})`);
  }
  if (rules.occupation) {
    if (!rules.occupation.includes(user.occupation.toLowerCase())) missing.push(`Occupation must be: ${rules.occupation.join(', ')}`);
  }
  if (rules.gender) {
    if (!rules.gender.includes(user.gender.toLowerCase())) missing.push(`Gender must be: ${rules.gender.join(', ')} (You: ${user.gender})`);
  }
  if (rules.bpl === true) {
    if (!user.bpl) missing.push('BPL Card required (You: No)');
  }
  if (rules.caste) {
    if (!rules.caste.includes(user.caste.toLowerCase())) missing.push(`Caste category must be: ${rules.caste.map(c => c.toUpperCase()).join(', ')} (You: ${user.caste.toUpperCase()})`);
  }
  // Disability check
  if (rules.disability && !user.disability) {
    missing.push(`Must be a Person with Disability (PwD)`);
  }

  // Special: Stand Up India — needs SC/ST caste OR female gender (either qualifies)
  if (rules.casteOrGender) {
    const casteMatch = rules.casteOrGender.caste && rules.casteOrGender.caste.includes(user.caste.toLowerCase());
    const genderMatch = rules.casteOrGender.gender && rules.casteOrGender.gender.includes(user.gender.toLowerCase());
    if (!casteMatch && !genderMatch) {
      missing.push(`Must be SC/ST caste OR Female (You: ${user.caste.toUpperCase()}, ${user.gender})`);
    }
  }
  return { scheme, status: missing.length === 0 ? 'ELIGIBLE' : 'NOT_ELIGIBLE', missingCriteria: missing };
}

// ─── Speech ───
function startSpeech(fieldId) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { alert('Speech not supported'); return; }
  const r = new SR(); r.continuous = false; r.interimResults = false;
  const langMap = { en: 'en-IN', hi: 'hi-IN', ta: 'ta-IN' };
  r.lang = langMap[currentLang] || 'en-IN';
  r.onresult = e => {
    const txt = e.results[0][0].transcript;
    const field = document.getElementById(fieldId);
    if (field) { const num = parseFloat(txt.replace(/[^0-9.]/g, '')); field.value = isNaN(num) ? txt : num; }
  };
  r.start();
}

function speakText(text, btn) {
  if (speechSynthesis.speaking) { speechSynthesis.cancel(); btn.textContent = '🔊 ' + t('Results.voice'); return; }
  const u = new SpeechSynthesisUtterance(text);
  const langMap = { en: 'en-IN', hi: 'hi-IN', ta: 'ta-IN' };
  u.lang = langMap[currentLang] || 'en-IN';
  u.onend = () => { btn.textContent = '🔊 ' + t('Results.voice'); };
  btn.textContent = '⏹ Stop';
  speechSynthesis.speak(u);
}

// ─── SVG Icons ───
const ICONS = {
  arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  users: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  file: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg>',
  rupee: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  chevron: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>',
  mic: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>',
  check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
  x: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>',
  ext: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>',
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
};

// ═══════════════════════════════════════════════════
// PAGE RENDERERS
// ═══════════════════════════════════════════════════

function renderHome() {
  return `
  <section class="hero">
    <div class="hero-stripe"></div>
    <div class="hero-particles"><div class="particle"></div><div class="particle"></div><div class="particle"></div></div>
    <svg class="hero-chakra-watermark" viewBox="0 0 100 100"><circle cx="50" cy="50" r="47" fill="none" stroke="#000080" stroke-width="1.5"/><circle cx="50" cy="50" r="38" fill="none" stroke="#000080" stroke-width="0.5"/><circle cx="50" cy="50" r="8" fill="#000080"/><g stroke="#000080" stroke-width="1"><line x1="50" y1="50" x2="90" y2="50"/><line x1="50" y1="50" x2="86.6" y2="30"/><line x1="50" y1="50" x2="84.6" y2="40"/><line x1="50" y1="50" x2="84.6" y2="60"/><line x1="50" y1="50" x2="86.6" y2="70"/><line x1="50" y1="50" x2="80" y2="15.4"/><line x1="50" y1="50" x2="70" y2="13.4"/><line x1="50" y1="50" x2="60" y2="15.4"/><line x1="50" y1="50" x2="50" y2="10"/><line x1="50" y1="50" x2="40" y2="15.4"/><line x1="50" y1="50" x2="30" y2="13.4"/><line x1="50" y1="50" x2="20" y2="15.4"/><line x1="50" y1="50" x2="10" y2="50"/><line x1="50" y1="50" x2="13.4" y2="30"/><line x1="50" y1="50" x2="15.4" y2="40"/><line x1="50" y1="50" x2="15.4" y2="60"/><line x1="50" y1="50" x2="13.4" y2="70"/><line x1="50" y1="50" x2="20" y2="84.6"/><line x1="50" y1="50" x2="30" y2="86.6"/><line x1="50" y1="50" x2="40" y2="84.6"/><line x1="50" y1="50" x2="50" y2="90"/><line x1="50" y1="50" x2="60" y2="84.6"/><line x1="50" y1="50" x2="70" y2="86.6"/><line x1="50" y1="50" x2="80" y2="84.6"/></g></svg>
    <div class="container"><div class="hero-content">
      <h1>${t('Index.title')}</h1>
      <p>${t('Index.subtitle')}</p>
      <div style="margin-top:1rem"><a class="btn btn-primary btn-lg btn-tricolor" href="#" onclick="navigate('eligibility')">${t('Index.getStarted')} ${ICONS.arrow}</a></div>
    </div></div>
  </section>
  <section class="stats"><div class="container"><div class="stats-grid">
    <div class="stat-card reveal"><div class="stat-icon blue">${ICONS.users}</div><div class="stat-value">1.2 Lakh+</div><div class="stat-label">Beneficiaries</div></div>
    <div class="stat-card reveal"><div class="stat-icon green">${ICONS.file}</div><div class="stat-value">500+</div><div class="stat-label">Schemes Listed</div></div>
    <div class="stat-card reveal"><div class="stat-icon orange">${ICONS.rupee}</div><div class="stat-value">₹50 Cr+</div><div class="stat-label">Benefits Disbursed</div></div>
  </div></div></section>
  <section class="stories"><div class="container">
    <h2 class="section-title">Real Stories, Real Impact</h2>
    <div class="stories-grid">
      ${[{ n: 'Ramesh Kumar', r: 'Farmer, Bihar', s: 'PM-KISAN', q: 'Receiving ₹6000 annually helped me buy quality seeds on time.', i: 'R' },
    { n: 'Lakshmi Devi', r: 'Homemaker, Tamil Nadu', s: 'Ujjwala Yojana', q: 'Cooking is smoke-free now. My health has improved significantly.', i: 'L' },
    { n: 'Amit Singh', r: 'Student, Delhi', s: 'PM-SSS', q: 'The scholarship covered my tuition fees completely.', i: 'A' }
    ].map(s => `<div class="story-card reveal"><div class="story-header"><div class="avatar">${s.i}</div><div class="story-meta"><h3>${s.n}</h3><p>${s.r}</p></div></div><div class="story-body"><span class="scheme-badge">${s.s}</span><p class="story-quote">"${s.q}"</p></div></div>`).join('')}
    </div>
  </div></section>
  <section class="features"><div class="container">
    <h2 class="section-title">Why YojnaHub?</h2>
    <p class="features-subtitle">Built for every Indian citizen with powerful, inclusive features.</p>
    <div class="features-grid">
      <div class="feature-card reveal"><div class="feature-icon saffron">🎯</div><h3>Smart Matching</h3><p>AI-powered algorithm matches you with the most relevant schemes.</p></div>
      <div class="feature-card reveal"><div class="feature-icon green">🗣️</div><h3>Multi-Language</h3><p>Available in English, Hindi, and Tamil with speech support.</p></div>
      <div class="feature-card reveal"><div class="feature-icon navy">🔔</div><h3>Notifications</h3><p>Get alerted about new schemes and deadlines.</p></div>
      <div class="feature-card reveal"><div class="feature-icon violet">📲</div><h3>WhatsApp Share</h3><p>Share eligible scheme details with friends and family.</p></div>
    </div>
  </div></section>`;
}

function renderEligibility() {
  const occs = ['salaried', 'self_employed', 'farmer', 'student', 'unemployed', 'homemaker', 'retired'];
  const genders = ['male', 'female', 'other'];
  const castes = ['general', 'obc', 'sc', 'st', 'ews'];
  return `
  <section class="form-section"><div class="container">
    <div class="card form-card reveal">
      <div class="card-header"><h2>${t('Form.title')}</h2><p>${t('Form.subtitle')}</p></div>
      <div class="card-body">
        <form id="eligForm" onsubmit="submitEligibility(event)">
          <div class="eligibility-form-grid">
            <div class="form-group"><label>${t('Form.income')}</label>
              <div class="input-row"><input class="form-input" type="number" id="f-income" placeholder="e.g. 500000" required>
              <button type="button" class="btn-icon speech-btn" onclick="startSpeech('f-income')" title="Speak">${ICONS.mic}</button></div>
            </div>
            <div class="form-group"><label>${t('Form.occupation')}</label>
              <select class="form-select" id="f-occupation" required>
                <option value="" disabled selected>${t('Form.selectOcc')}</option>
                ${occs.map(o => `<option value="${o}">${t('Form.' + o)}</option>`).join('')}
              </select>
            </div>
            <div class="form-group"><label>${t('Form.age')}</label>
              <div class="input-row"><input class="form-input" type="number" id="f-age" placeholder="e.g. 25" required min="1" max="120">
              <button type="button" class="btn-icon speech-btn" onclick="startSpeech('f-age')" title="Speak">${ICONS.mic}</button></div>
            </div>
            <div class="form-group"><label>${t('Form.gender')}</label>
              <select class="form-select" id="f-gender" required>
                <option value="" disabled selected>${t('Form.selectGender')}</option>
                ${genders.map(g => `<option value="${g}">${t('Form.' + g)}</option>`).join('')}
              </select>
            </div>
            <div class="form-group"><label>${t('Form.bpl')}</label>
              <select class="form-select" id="f-bpl" required>
                <option value="" disabled selected>${t('Form.selectBpl')}</option>
                <option value="yes">${t('Form.bplYes')}</option>
                <option value="no">${t('Form.bplNo')}</option>
              </select>
            </div>
            <div class="form-group"><label>${t('Form.caste')}</label>
              <select class="form-select" id="f-caste" required>
                <option value="" disabled selected>${t('Form.selectCaste')}</option>
                ${castes.map(c => `<option value="${c}">${t('Form.' + c)}</option>`).join('')}
              </select>
            </div>
            <div class="form-group"><label>${t('Form.disability')}</label>
              <select class="form-select" id="f-disability" required>
                <option value="" disabled selected>${t('Form.select')}</option>
                <option value="yes">${t('Form.yes')}</option>
                <option value="no">${t('Form.no')}</option>
              </select>
            </div>
          </div>
          <div style="margin-top:1.5rem">
            <button type="submit" class="btn btn-primary btn-full btn-lg btn-tricolor">${t('Form.submit')} ${ICONS.arrow}</button>
          </div>
        </form>
      </div>
    </div>
  </div></section>`;
}

function renderResults() {
  if (!lastResults.length) { navigate('eligibility'); return ''; }
  const p = lastProfile;
  const sorted = [...lastResults].sort((a, b) => {
    const o = { ELIGIBLE: 0, PARTIAL: 1, NOT_ELIGIBLE: 2 };
    return o[a.status] - o[b.status];
  });
  const genderLabel = { male: 'Male', female: 'Female', other: 'Other' };
  const casteLabel = { general: 'General', obc: 'OBC', sc: 'SC', st: 'ST', ews: 'EWS' };
  const profileSummary = [
    `Age ${p.age}`,
    genderLabel[p.gender] || p.gender,
    casteLabel[p.caste] || p.caste,
    `Income ₹${p.income.toLocaleString()}`,
    p.bpl ? 'BPL: Yes' : 'BPL: No',
    p.disability ? 'PwD: Yes' : 'PwD: No'
  ].filter(Boolean).join(', ');

  return `<div class="container" style="padding:3rem 0">
    <div class="results-header">
      <h1>${t('Results.title')}</h1>
      <p style="max-width:900px;margin:0 auto">${t('Results.basedOn')} ${profileSummary}</p>
    </div>
    <div class="results-grid">
      ${sorted.map(r => {
    const s = r.scheme;
    const cls = r.status === 'ELIGIBLE' ? 'eligible' : r.status === 'PARTIAL' ? 'partial' : 'not-eligible';
    const badgeCls = r.status === 'ELIGIBLE' ? 'green' : r.status === 'PARTIAL' ? 'yellow' : 'red';
    const badgeText = r.status === 'ELIGIBLE' ? t('Results.eligible') : r.status === 'PARTIAL' ? t('Results.partial') : t('Results.notEligible');
    const icon = r.status === 'ELIGIBLE' ? ICONS.check : ICONS.x;
    const tts = `${s.name}. ${s.description}`;
    return `<div class="card result-card ${cls}">
          <div class="card-header">
            <div style="display:flex;justify-content:space-between;align-items:start"><span class="cat-label">${s.category}</span>${icon}</div>
            <h3 style="margin-top:.5rem;font-size:1.05rem">${s.name}</h3>
            <p style="font-size:.8rem;color:var(--muted-fg)">${s.ministry}</p>
          </div>
          <div class="card-body">
            <span class="badge ${badgeCls}" style="margin-bottom:.75rem;display:inline-block">${badgeText}</span>
            ${r.status === 'NOT_ELIGIBLE' ? `<div class="missing-box"><strong>${t('Results.why')}</strong><ul>${r.missingCriteria.map(c => `<li>${c}</li>`).join('')}</ul></div>` : ''}
            <div class="accordion-item">
              <button class="accordion-trigger" onclick="toggleAccordion(this)">${t('Results.schemeDetails')} ${ICONS.chevron}</button>
              <div class="accordion-content"><p>${s.description}</p>${s.applicationProcess ? `<p style="margin-top:.5rem"><strong>${t('Results.howToApply')}</strong> ${s.applicationProcess}</p>` : ''}</div>
            </div>
            <div class="accordion-item">
              <button class="accordion-trigger" onclick="toggleAccordion(this)">${t('Results.documentsRequired')} ${ICONS.chevron}</button>
              <div class="accordion-content"><ul>${s.documentsRequired.map(d => `<li>${d}</li>`).join('')}</ul>
                <button class="btn btn-outline btn-sm btn-full" style="margin-top:.5rem" onclick="showToast('📥 Downloaded','Checklist saved to downloads')">📥 ${t('Results.downloadChecklist')}</button>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="btn-row">
              <button class="btn btn-ghost btn-sm" onclick="speakText('${tts.replace(/'/g, "\\'")}',this)">🔊 ${t('Results.voice')}</button>
              <a href="${s.officialLink}" target="_blank" class="btn btn-primary btn-sm">${t('Results.apply')} ${ICONS.ext}</a>
            </div>
            <div class="btn-row">
              <button class="btn btn-ghost btn-sm ${isSaved(s.id) ? 'active' : ''}" onclick="toggleSave('${s.id}')">
                ${isSaved(s.id) ? '✅ ' + t('Navigation.saved') : '🔖 Save'}
              </button>
              <button class="btn btn-ghost btn-sm" onclick="shareScheme('${s.name.replace(/'/g, "\\'")}','${s.description.replace(/'/g, "\\'")}')">📤 Share</button>
            </div>
          </div>
        </div>`;
  }).join('')}
    </div>
    <div style="text-align:center;margin-top:2rem"><button class="btn btn-outline" onclick="navigate('eligibility')">← Check Again</button></div>
  </div>`;
}

function renderSchemes() {
  const filtered = SCHEMES.filter(s =>
    s.name.toLowerCase().includes(schemeSearchQuery) ||
    s.description.toLowerCase().includes(schemeSearchQuery) ||
    s.category.toLowerCase().includes(schemeSearchQuery)
  );

  return `<div class="container schemes-page">
    <h1 class="section-title" style="margin-bottom:.5rem">${t('Navigation.schemes')}</h1>
    <p style="text-align:center;color:var(--muted-fg);margin-bottom:1.5rem">Browse all available government schemes</p>

    <div class="search-bar-container reveal">
      <div class="search-wrapper">
        <span class="search-icon">${ICONS.search}</span>
        <input type="text" class="search-input" placeholder="${t('Schemes.searchPlaceholder')}" value="${schemeSearchQuery}" oninput="handleSchemeSearch(this.value)">
      </div>
    </div>

    <div class="scheme-list">
      ${filtered.length === 0 ? `<div class="no-results reveal visible"><p>${t('Schemes.noResults')}</p></div>` : filtered.map(s => `
        <div class="card reveal" style="border-left:4px solid var(--primary)">
          <div class="card-header"><span class="cat-label">${s.category}</span><h3 style="margin-top:.25rem">${s.name}</h3><p style="font-size:.8rem;color:var(--muted-fg)">${s.ministry}</p></div>
          <div class="card-body"><p style="font-size:.875rem;color:var(--muted-fg)">${s.description}</p>
            <div style="margin-top:.75rem"><strong style="font-size:.8rem">Documents:</strong><ul style="list-style:disc;padding-left:1.25rem;font-size:.8rem;color:var(--muted-fg);margin-top:.25rem">${s.documentsRequired.map(d => `<li>${d}</li>`).join('')}</ul></div>
          </div>
          <div class="card-footer"><div class="btn-row">
            <a href="${s.officialLink}" target="_blank" class="btn btn-primary btn-sm">${t('Results.apply')} ${ICONS.ext}</a>
            <button class="btn btn-icon ${isSaved(s.id) ? 'saved' : ''}" onclick="toggleSave('${s.id}')" title="Save">${isSaved(s.id) ? '✅' : '🔖'}</button>
          </div></div>
        </div>`).join('')}
    </div>
    <div style="text-align:center;margin-top:2rem"><button class="btn btn-outline" onclick="navigate('home')">← Home</button></div>
  </div>`;
}

function renderAbout() {
  return `<div class="container about-page">
    <h1>${t('Navigation.about')} YojnaHub</h1>
    <p>YojnaHub is a comprehensive government schemes portal designed to help every Indian citizen discover and access government benefits they're eligible for. Our mission is to bridge the gap between government welfare schemes and the people who need them most.</p>
    <p>Simply answer a few questions about yourself and our smart matching engine instantly finds the schemes tailored for you — in your preferred language.</p>
    <h2>Key Features</h2>
    <ul style="color:var(--muted-fg);padding-left:1.5rem;line-height:2">
      <li>Smart eligibility matching based on age, income, and occupation</li>
      <li>Saved Schemes — Keep track of schemes you're interested in</li>
      <li>Multi-language support — English, Hindi, Tamil</li>
      <li>Speech-to-text input for easy form filling</li>
      <li>Text-to-speech for reading scheme details aloud</li>
      <li>Scheme notifications and application status tracking</li>
      <li>WhatsApp sharing of results</li>
      <li>Dark mode for comfortable reading</li>
    </ul>
    <h2>Tech Stack</h2>
    <div class="tech-grid">
      ${['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'PostgreSQL', 'Prisma', 'NextAuth.js', 'i18n'].map(t => `<div class="tech-item">${t}</div>`).join('')}
    </div>
    <p style="margin-top:2rem"><strong>Built with ❤️ for Digital India.</strong></p>
    <div style="margin-top:1.5rem"><button class="btn btn-primary btn-tricolor" onclick="navigate('eligibility')">${t('Index.getStarted')} ${ICONS.arrow}</button></div>
  </div>`;
}

// ─── Search ───
function handleSchemeSearch(val) {
  schemeSearchQuery = val.toLowerCase();
  const schemesPage = document.querySelector('.schemes-page');
  if (schemesPage) {
    const list = schemesPage.querySelector('.scheme-list');
    const filtered = SCHEMES.filter(s =>
      s.name.toLowerCase().includes(schemeSearchQuery) ||
      s.description.toLowerCase().includes(schemeSearchQuery) ||
      s.category.toLowerCase().includes(schemeSearchQuery)
    );

    if (filtered.length === 0) {
      list.innerHTML = `<div class="no-results reveal visible"><p>${t('Schemes.noResults')}</p></div>`;
    } else {
      list.innerHTML = filtered.map(s => `
        <div class="card reveal visible" style="border-left:4px solid var(--primary)">
          <div class="card-header"><span class="cat-label">${s.category}</span><h3 style="margin-top:.25rem">${s.name}</h3><p style="font-size:.8rem;color:var(--muted-fg)">${s.ministry}</p></div>
          <div class="card-body"><p style="font-size:.875rem;color:var(--muted-fg)">${s.description}</p>
            <div style="margin-top:.75rem"><strong style="font-size:.8rem">Documents:</strong><ul style="list-style:disc;padding-left:1.25rem;font-size:.8rem;color:var(--muted-fg);margin-top:.25rem">${s.documentsRequired.map(d => `<li>${d}</li>`).join('')}</ul></div>
          </div>
          <div class="card-footer"><div class="btn-row">
            <a href="${s.officialLink}" target="_blank" class="btn btn-primary btn-sm">${t('Results.apply')} ${ICONS.ext}</a>
            <button class="btn btn-icon ${isSaved(s.id) ? 'saved' : ''}" onclick="toggleSave('${s.id}')" title="Save">${isSaved(s.id) ? '✅' : '🔖'}</button>
          </div></div>
        </div>`).join('');
    }
  }
}

function renderSaved() {
  const saved = SCHEMES.filter(s => isSaved(s.id));
  return `<div class="container schemes-page">
    <h1 class="section-title" style="margin-bottom:.5rem">${t('Results.saved')}</h1>
    ${saved.length === 0 ? `<p style="text-align:center;color:var(--muted-fg);margin-top:4rem">${t('Results.noSaved')}</p>` : `
    <div class="scheme-list" style="margin-top:2rem">
      ${saved.map(s => `<div class="card" style="border-left:4px solid var(--primary)">
        <div class="card-header"><span class="cat-label">${s.category}</span><h3 style="margin-top:.25rem">${s.name}</h3><p style="font-size:.8rem;color:var(--muted-fg)">${s.ministry}</p></div>
        <div class="card-body"><p style="font-size:.875rem;color:var(--muted-fg)">${s.description}</p></div>
        <div class="card-footer"><div class="btn-row">
          <a href="${s.officialLink}" target="_blank" class="btn btn-primary btn-sm">${t('Results.apply')} ${ICONS.ext}</a>
          <button class="btn btn-ghost btn-sm" onclick="toggleSave('${s.id}')">❌ Remove</button>
        </div></div>
      </div>`).join('')}
    </div>`}
    <div style="text-align:center;margin-top:3rem"><button class="btn btn-outline" onclick="navigate('schemes')">Browse All Schemes</button></div>
  </div>`;
}

// ═══════════════════════════════════════════════════
// ROUTER
// ═══════════════════════════════════════════════════
function navigate(page) {
  currentPage = page;
  const app = document.getElementById('app');
  updateHeader();
  switch (page) {
    case 'home': app.innerHTML = renderHome(); break;
    case 'eligibility': app.innerHTML = renderEligibility(); break;
    case 'results': app.innerHTML = renderResults(); break;
    case 'schemes': app.innerHTML = renderSchemes(); break;
    case 'saved': app.innerHTML = renderSaved(); break;
    case 'about': app.innerHTML = renderAbout(); break;
    case 'login': app.innerHTML = renderLogin(); break;
    case 'signup': app.innerHTML = renderSignup(); break;
    default: app.innerHTML = renderHome();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Trigger reveals
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.1 }).observe(el);
    });
  }, 50);
}

function submitEligibility(e) {
  e.preventDefault();
  const getVal = (id) => document.getElementById(id).value;
  const income = Number(getVal('f-income'));
  const occupation = getVal('f-occupation');
  const age = Number(getVal('f-age'));
  const gender = getVal('f-gender');
  const bpl = getVal('f-bpl') === 'yes';
  const caste = getVal('f-caste');
  const disability = getVal('f-disability') === 'yes';

  if (!occupation || !gender || !caste) {
    alert('Please fill all required fields');
    return;
  }
  lastProfile = { income, occupation, age, gender, bpl, caste, disability };
  lastResults = SCHEMES.map(s => evaluateEligibility(lastProfile, s));
  showToast('✅ Eligibility Checked', `Found ${lastResults.filter(r => r.status === 'ELIGIBLE').length} matching schemes!`);
  setTimeout(() => navigate('results'), 600);
}

function toggleAccordion(btn) {
  btn.classList.toggle('open');
  const content = btn.nextElementSibling;
  content.classList.toggle('open');
}

function shareScheme(title, desc) {
  const data = { title, text: desc, url: window.location.href };
  if (navigator.share) { navigator.share(data).catch(() => { }); }
  else { navigator.clipboard.writeText(`${title}\n${desc}\n${data.url}`).then(() => showToast('📋 Copied', 'Link copied to clipboard!')); }
}

// ─── Auth ───
function updateHeader() {
  const loginBtn = document.getElementById('login-btn');
  if (loginBtn) {
    const user = localStorage.getItem('currentUser');
    loginBtn.textContent = isLoggedIn ? `${t('Navigation.logout')} (${user || ''})` : t('Navigation.login');
  }
}

function handleAuth() {
  if (isLoggedIn) {
    handleLogout();
  } else {
    navigate('login');
  }
}

function renderLogin() {
  return `
  <section class="form-section"><div class="container" style="max-width:400px;padding:4rem 0">
    <div class="card form-card reveal">
      <div class="card-header"><h2 style="text-align:center">${t('Navigation.login')}</h2></div>
      <div class="card-body">
        <form onsubmit="submitLogin(event)">
          <div class="form-group"><label>${t('Auth.username')}</label><input class="form-input" type="text" id="l-user" placeholder="e.g. john_doe" required></div>
          <div class="form-group"><label>${t('Auth.password')}</label><input class="form-input" type="password" id="l-pass" placeholder="••••••••" required></div>
          <button type="submit" class="btn btn-primary btn-full btn-lg btn-tricolor" style="margin-top:1.5rem">${t('Navigation.login')}</button>
          <p style="text-align:center;margin-top:1rem;font-size:0.875rem;color:var(--muted-fg)">${t('Auth.noAccount')} <a href="#" onclick="navigate('signup')" style="color:var(--primary)">${t('Navigation.signup')}</a></p>
        </form>
      </div>
    </div>
  </div></section>`;
}

function renderSignup() {
  return `
  <section class="form-section"><div class="container" style="max-width:400px;padding:4rem 0">
    <div class="card form-card reveal">
      <div class="card-header"><h2 style="text-align:center">${t('Navigation.signup')}</h2></div>
      <div class="card-body">
        <form onsubmit="submitSignup(event)">
          <div class="form-group"><label>${t('Auth.username')}</label><input class="form-input" type="text" id="s-user" placeholder="e.g. john_doe" required></div>
          <div class="form-group"><label>${t('Auth.emailMobile')}</label><input class="form-input" type="text" id="s-email" placeholder="john@example.com" required></div>
          <div class="form-group"><label>${t('Auth.password')}</label><input class="form-input" type="password" id="s-pass" placeholder="••••••••" required></div>
          <div class="form-group"><label>${t('Auth.confirmPassword')}</label><input class="form-input" type="password" id="s-confirm" placeholder="••••••••" required></div>
          <button type="submit" class="btn btn-primary btn-full btn-lg btn-tricolor" style="margin-top:1.5rem">${t('Navigation.signup')}</button>
          <p style="text-align:center;margin-top:1rem;font-size:0.875rem;color:var(--muted-fg)">${t('Auth.hasAccount')} <a href="#" onclick="navigate('login')" style="color:var(--primary)">${t('Navigation.login')}</a></p>
        </form>
      </div>
    </div>
  </div></section>`;
}

function submitLogin(e) {
  e.preventDefault();
  const user = document.getElementById('l-user').value;
  if (!user) return;
  isLoggedIn = true;
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('currentUser', user);
  showToast('✅ Welcome Back', `Hello, ${user}!`);
  navigate('home');
}

function submitSignup(e) {
  e.preventDefault();
  const user = document.getElementById('s-user').value;
  const pass = document.getElementById('s-pass').value;
  const confirm = document.getElementById('s-confirm').value;

  if (pass !== confirm) {
    alert('Passwords do not match!');
    return;
  }

  isLoggedIn = true;
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('currentUser', user);
  showToast('🎊 Welcome', 'Account created successfully!');
  navigate('home');
}

function handleLogout() {
  isLoggedIn = false;
  localStorage.setItem('isLoggedIn', 'false');
  localStorage.removeItem('currentUser');
  showToast('👋 Goodbye', 'Logged out successfully!');
  navigate('home');
}

// ─── Init ───
navigate('home');
updateHeader();
