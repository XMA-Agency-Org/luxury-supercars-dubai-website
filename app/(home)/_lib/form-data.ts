type RegionCode = {
  code: string
  country: string
  flag: string
}

const REGION_CODES: RegionCode[] = [
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+966", country: "SA", flag: "🇸🇦" },
  { code: "+974", country: "QA", flag: "🇶🇦" },
  { code: "+973", country: "BH", flag: "🇧🇭" },
  { code: "+968", country: "OM", flag: "🇴🇲" },
  { code: "+965", country: "KW", flag: "🇰🇼" },
  { code: "+44", country: "GB", flag: "🇬🇧" },
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+7", country: "RU", flag: "🇷🇺" },
]

const BRAND_OPTIONS = [
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Cadillac",
  "Ferrari",
  "Lamborghini",
  "Maserati",
  "McLaren",
  "Mercedes Benz",
  "Polaris",
  "Porsche",
  "Range Rover",
  "Rolls Royce",
]

export { REGION_CODES, BRAND_OPTIONS, type RegionCode }
