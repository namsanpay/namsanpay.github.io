# 노무법인 남산 급여·4대보험 아웃소싱 홈페이지

## 자주 바꾸는 곳
- 연락처·주소·단가·고객사·문의 폼 주소: `src/_data/site.js` (빈 값은 화면에 표시되지 않음)
- 메인 문구: `src/index.njk`
- 게시글: `src/posts/` 폴더에 `.md` 파일 추가 (`_글쓰기-양식.md` 참고)

## 게시글 올리기
1. `src/posts/_글쓰기-양식.md`를 복사해 파일명을 영문으로 바꿉니다. 예) `daily-wage.md`
2. 제목, 날짜, 분류, 본문을 씁니다. 분류는 급여 실무 / 4대보험 / 업무사례 / 공지
3. `draft: true` 줄을 지우고 저장하면 게시판·메인 최근 글·사이트맵에 자동 반영됩니다.

## 게시 (GitHub Pages)
main 브랜치에 올리면 `.github/workflows/deploy.yml`이 자동으로 빌드·게시합니다.
저장소 Settings › Pages › Source 를 "GitHub Actions"로 한 번 지정해야 합니다.

## 내 컴퓨터에서 미리 보기
npm install
npm start   # http://localhost:8080
