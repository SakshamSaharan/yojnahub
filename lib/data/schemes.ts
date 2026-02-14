import { Scheme } from "@prisma/client"

// Mock data matching the Prisma Scheme model
export const MOCK_SCHEMES: Scheme[] = [
    {
        id: "scheme-1",
        name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
        description: "Income support of ₹6,000 per year for all landholding farmer families.",
        ministry: "Ministry of Agriculture and Farmers Welfare",
        category: "Agriculture",
        officialLink: "https://pmkisan.gov.in/",
        applicationProcess: "Apply online at official portal or via CSC.",
        documentsRequired: JSON.stringify(["Aadhaar Card", "Landholding Papers", "Bank Account Details"]),
        eligibilityRules: {
            occupation: ["farmer"],
            income: { max: 10000000 } // Technically available to small farmers, simplifed rule
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Pradhan Mantri Awas Yojana (Urban)",
        id: "scheme-2",
        description: "Housing for All in urban areas. Interest subsidy on home loans.",
        ministry: "Ministry of Housing and Urban Affairs",
        category: "Housing",
        officialLink: "https://pmaymis.gov.in/",
        applicationProcess: "Apply via PMAY(U) MIS portal or CSC.",
        documentsRequired: JSON.stringify(["Aadhaar", "Income Proof", "Property Documents"]),
        eligibilityRules: {
            income: { max: 1800000 },
            age: { min: 21, max: 55 },
            occupation: ["salaried", "self_employed"]
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Sukanya Samriddhi Yojana",
        id: "scheme-3",
        description: "Small deposit scheme for the girl child. High interest rate.",
        ministry: "Ministry of Finance",
        category: "Child Welfare",
        officialLink: "https://www.nsiindia.gov.in/",
        applicationProcess: "Open account at Post Office or designated banks.",
        documentsRequired: JSON.stringify(["Birth Certificate of Girl Child", "ID Proof of Guardian"]),
        eligibilityRules: {
            gender: "female", // Our form doesn't capture gender of child, but maybe user needs to be guardian?
            // Simplifying: available to all for demo if age < 10 (child age)
            // Since we capture 'age' of User, this might not match perfectly.
            // Let's assume User is the beneficiary.
            genderKey: "female", // Custom logic needed in matcher if we strictly check user gender
            age: { max: 10 }
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Atal Pension Yojana",
        id: "scheme-4",
        description: "Pension scheme for unorganized sector workers.",
        ministry: "Ministry of Finance",
        category: "Pension",
        officialLink: "https://www.npscra.nsdl.co.in/",
        applicationProcess: "Visit bank branch.",
        documentsRequired: JSON.stringify(["Aadhaar", "Savings Bank Account"]),
        eligibilityRules: {
            age: { min: 18, max: 40 },
            occupation: ["unorganized", "self_employed", "student", "unemployed", "farmer"] // loose category
        },
        createdAt: new Date(),
        updatedAt: new Date()
    }
]
