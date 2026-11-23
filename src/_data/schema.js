// 검색엔진·AI 검색용 구조화 데이터(JSON-LD). site.js·faq.js 값으로 자동 생성됩니다.
import site from "./site.js";
import faq from "./faq.js";

const tel = (s) => (s || "").split("~")[0];
const p = site.pricing;

const org = {
  "@type": ["ProfessionalService", "LegalService"],
  "@id": `${site.url}/#org`,
  name: site.name,
  alternateName: ["남산PAY", "NAMSAN PAY", "노무법인 남산 급여아웃소싱", "Namsan Labor Law Firm"],
  url: `${site.url}/`,
  logo: `${site.url}/assets/brand/apple-touch-icon.png`,
  image: `${site.url}/assets/brand/og.png`,
  description: site.description,
  telephone: tel(site.phone),
  email: site.email,
  sameAs: [site.mainSite],
  founder: { "@type": "Person", name: site.ceo, jobTitle: "대표 공인노무사" },
  foundingDate: "2008-11-17",
  areaServed: { "@type": "Country", name: "대한민국" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "KR",
    addressRegion: site.offices[0].region,
    addressLocality: site.offices[0].locality,
    streetAddress: site.offices[0].street,
  },
  department: site.offices.slice(1).map((o) => ({
    "@type": "ProfessionalService",
    name: `${site.name} ${o.label}`,
    telephone: tel(o.phone),
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressRegion: o.region,
      addressLocality: o.locality,
      streetAddress: o.street,
    },
  })),
  knowsAbout: [
    "급여아웃소싱", "급여대행", "급여관리대행", "4대보험 신고 대행", "임금명세서", "연차수당 산정",
    "퇴직금 산정", "통상임금", "노무제공자 고용보험·산재보험", "인사노무 자문", "일터혁신 상생컨설팅", "임금체계 개편",
  ],
};

const service = {
  "@type": "Service",
  "@id": `${site.url}/#payroll`,
  name: "남산PAY 급여아웃소싱·4대보험 신고 대행",
  alternateName: ["급여아웃소싱", "급여대행", "급여관리대행"],
  serviceType: "급여 아웃소싱",
  provider: { "@id": `${site.url}/#org` },
  areaServed: { "@type": "Country", name: "대한민국" },
  description:
    "월 급여 계산과 임금명세서 발송, 연장·야간·휴일근로수당·연차수당·퇴직금 산정, 4대보험 자격 취득·상실·보수총액 신고, 원천세·연말정산 급여자료 정리를 공인노무사 검토와 함께 대행합니다.",
  offers: [
    {
      "@type": "Offer",
      name: `근로자 ${p.baseUntil}인 미만`,
      priceCurrency: "KRW",
      price: p.base,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: p.base,
        priceCurrency: "KRW",
        unitText: "월",
        valueAddedTaxIncluded: false,
      },
    },
    {
      "@type": "Offer",
      name: `근로자 ${p.baseUntil}인 이상 ${p.negotiateFrom}인 미만`,
      description: `기본 ${p.base.toLocaleString("ko-KR")}원 + ${p.baseUntil}인 초과 1인당 ${p.perHead.toLocaleString("ko-KR")}원 (월, 부가가치세 별도)`,
      priceCurrency: "KRW",
      priceSpecification: [
        { "@type": "UnitPriceSpecification", price: p.base, priceCurrency: "KRW", unitText: "월 기본", valueAddedTaxIncluded: false },
        { "@type": "UnitPriceSpecification", price: p.perHead, priceCurrency: "KRW", unitText: "월 1인당(초과 인원)", valueAddedTaxIncluded: false },
      ],
    },
  ],
};

const faqPage = {
  "@type": "FAQPage",
  "@id": `${site.url}/#faq`,
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const website = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: `${site.url}/`,
  name: `${site.name} ${site.service}`,
  inLanguage: "ko-KR",
  publisher: { "@id": `${site.url}/#org` },
};

export default {
  home: { "@context": "https://schema.org", "@graph": [website, org, service, faqPage] },
};
