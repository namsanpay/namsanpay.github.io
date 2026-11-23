// 홈페이지 기본 정보 — 빈 값("")인 항목은 화면에 표시되지 않습니다.
export default {
  name: "노무법인 남산",
  service: "급여·4대보험 아웃소싱",
  // 실제 주소가 정해지면 바꿉니다. 예: "https://payroll.namsan.co.kr"
  url: "https://namsanpay.github.io",
  description:
    "노무법인 남산의 급여·4대보험 아웃소싱. 급여 계산, 4대보험 신고, 퇴직금 산정을 공인노무사가 노동법 기준으로 검토하며 처리합니다.",

  phone: "",            // 예: "02-000-0000"
  email: "",            // 예: "payroll@namsan.co.kr"
  ceo: "",              // 대표 공인노무사 성명
  bizNo: "",            // 사업자등록번호
  offices: [
    { label: "서울 본사", address: "서울특별시 중구 장교동" },
    { label: "당진 지사", address: "" },
  ],

  // 문의 폼 접수 주소 (Formspree 등에서 발급). 비어 있으면 폼 대신 연락처 안내가 나옵니다.
  formAction: "",

  // 비용 안내 — price 가 비어 있으면 "상담 후 안내"로 표시
  vatNote: "부가가치세 별도",
  prices: [
    { range: "1 ~ 50인", price: "" },
    { range: "51 ~ 300인", price: "" },
    { range: "301 ~ 1,000인", price: "" },
    { range: "1,000인 이상", price: "별도 협의" },
  ],

  clients: ["삼성그룹 계열사", "청호나이스", "쿠팡CLS"],

  categories: ["급여 실무", "4대보험", "업무사례", "공지"],

  privacyOfficer: "",   // 개인정보 보호책임자 성명
  privacyRetention: "", // 문의 정보 보유기간. 예: "문의 처리 완료 후 1년"
};
