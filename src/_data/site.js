// 홈페이지 기본 정보 — 빈 값("")인 항목은 화면에 표시되지 않습니다.
export default {
  name: "노무법인 남산",
  service: "남산PAY 급여아웃소싱",
  brand: "남산PAY",
  url: "https://namsanpay.com",
  title: "급여아웃소싱·급여대행 | 남산PAY - 노무법인 남산",
  description:
    "2008년 설립 노무법인 남산의 급여아웃소싱 서비스 남산PAY. 공인노무사와 급여 전문 실무자가 함께 급여계산, 4대보험 신고, 법정수당과 퇴직금 정산을 관리합니다. 10인 미만 월 15만 원부터(VAT 별도).",

  phone: "02-585-7747~8",
  email: "namsan@namsanhr.com",
  // 급여아웃소싱 상담 담당 — 아웃소싱사 명단(2026-09-26 기준) 담당자. 인원 바뀌면 여기만 수정
  payrollTeam: { lead: "이슬 팀장", members: ["김경미", "노유선", "안재민", "임지윤", "최다혜", "한아름"] },
  // 일터혁신 컨설팅 담당 — 박주희 노무사 직통번호·이메일을 받으면 여기만 바꾸면 됨
  workplace: { name: "박주희 공인노무사", phone: "010-8423-2272", email: "jh.park@namsanhr.com" },
  fax: "02-585-7743",
  hours: "평일 09:00 – 18:00 (점심 12:00 – 13:00)",
  mainSite: "https://www.namsanhr.com",
  ceo: "정규형",          // 대표 공인노무사 성명
  bizNo: "",            // 사업자등록번호
  offices: [
    { label: "서울 본사", region: "서울특별시", locality: "중구", street: "삼일대로 363 장교빌딩 2601호", address: "서울특별시 중구 삼일대로 363 장교빌딩 2601호, 2602호 (서울지방고용노동청 26층)", phone: "02-585-7747~8", fax: "02-585-7743" },
    { label: "당진 지사", region: "충청남도", locality: "당진시", street: "무수동로 20 홍헌빌딩 3층", address: "충남 당진시 무수동로 20 홍헌빌딩 3층", phone: "041-357-7955~6", fax: "041-357-7743" },
  ],

  // 문의 폼 접수 주소 (Formspree 등에서 발급). 비어 있으면 폼 대신 연락처 안내가 나옵니다.
  formAction: "",

  // 비용 — 「[남산] 자문 및 급여아웃소싱 제안서_260910」 기준
  pricing: {
    base: 150000,          // 기본 수수료 (월)
    baseUntil: 10,         // 기본 수수료에 포함되는 인원
    perHead: 10000,        // 초과 1인당 (월)
    negotiateFrom: 100,    // 이 인원 이상은 별도 협의
    taxOne: 15000,         // 원천징수 또는 연말정산 1개 위임 시 1인당
    taxBoth: 12000,        // 원천징수와 연말정산 동시 위임 시 1인당
    vat: "부가가치세 별도",
  },

  // 업종별 급여 아웃소싱 고객사 수 — 「자문+아웃소싱_260422.xlsx」 아웃소싱사 명단(기준일 2026-09-26)
  industriesAsOf: "2026년 9월",
  industries: [
    { name: "제조", count: 45, note: "식품·제지·금속·전기·인쇄 등" },
    { name: "도소매·유통", count: 25, note: "식자재·자동차부품·주유소 등" },
    { name: "서비스", count: 20, note: "골프장 운영·시설관리·환경위생·교육·숙박 등" },
    { name: "병의원·요양", count: 16, note: "의원·치과·한의원·요양원 등" },
    { name: "음식점·프랜차이즈", count: 15, note: "프랜차이즈 가맹점·외식업" },
    { name: "광고·IT", count: 6, note: "광고대행·소프트웨어·정보통신" },
    { name: "운수·물류", count: 3, note: "물류·운송" },
    { name: "농업", count: 2, note: "작물재배·영농법인" },
    { name: "건설", count: 1, note: "" },
  ],

  categories: ["급여 실무", "4대보험", "노무제공자", "업무사례", "공지"],

  privacyOfficer: "",   // 개인정보 보호책임자 성명
  privacyRetention: "", // 문의 정보 보유기간. 예: "문의 처리 완료 후 1년"

  // 검색엔진 소유 확인 코드 (네이버 서치어드바이저 / 구글 서치콘솔에서 발급받아 넣음)
  naverVerification: "f7b880f42663430b98f58b3fad511b33f91e2d9f",
  googleVerification: "",
};
