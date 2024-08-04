# HODU 오픈마켓 쇼핑몰🛒
<img src="https://ifh.cc/g/SrsfL7.jpg" width="800" alt="HODU 오픈마켓 메인페이지" />

## [HODU 오픈마켓 쇼핑몰 Figma 디자인🛒](https://www.figma.com/design/9VhAObwi2EXeLe4Ugkcb2e/EST_%EC%98%A4%EB%A5%B4%EB%AF%B8(FE)?node-id=49-1747&t=sfRtaXKMxzCfmFZP-0)
> 비밀번호 : ESTFE
- ESsoft 부트캠프 과정 중 주식회사 WeNiv의 디자인을 제공받아 제작하였습니다.
- 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
- 수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.

## 1. 목표와 메인 기능
- 오픈마켓 서비스는 판매자와 구매자를 구별하여 판매자가 상품을 등록, 판매하며 구매자는 구매하는 서비스입니다.
- 상품을 판매하려고 한다면 판매자로 로그인하여 상품 정보를 등록 및 수정할 수 있습니다.
- 오픈마켓에 등록되어 있는 상품을 구매하고자 한다면 상품의 세부사항을 확인한 뒤, 장바구니에 넣어, 상품을 구매할 수 있습니다.

## 2. 개발 환경 및 배포 URL
### 2.1. 개발 환경
- OS : Windows 10

### 2.2. 기술 스택
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
<br />

### 2.2 GitHub 배포 URL
- [HODU 오픈마켓 쇼핑몰 바로가기](http://nodebird.xyz/)

## 3. 폴더와 파일 구조
```
┏ open-market(root folder)
┣ 📂.git
┣ 📂css
┃ ┣ error_404.css
┃ ┣ login_buyer.css
┃ ┣ product_buyer.css
┃ ┣ reset.css
┃ ┗ shopping_cart.css
┣ 📂image
┣ 📂js
┃ ┣ error_404.js
┃ ┣ login_buyer.js
┃ ┣ product_buyer.js
┃ ┗ shopping_cart.js
┣ error_404.html
┣ login_buyer.html
┣ product_buyer.html
┗ shopping_cart.html
```

## 4. URL 구조
[HODU 오픈마켓 API 명세](https://paullabworkspace.notion.site/API-7b57a2b656fd4e3790a6a360b69aa3ad)

접속하기/요청 URL
- https://openmarket.weniv.co.kr/

## 5. 개발 일정
### 2024년 8월 2일 금요일 ~ 8월 12일 월요일
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                  ┃
┣ 📅 8월 2일
┃ ┣ 프로젝트 기획
┃ ┣ 파일 구조 작성(file-tree-generator 사용)
┃ ┗ readme.md 작성
┃
┃
┣ 📅 8월 3일
┃ ┣ 상품 목록 페이지 html, css 제작
┃ ┣ URL 표 작성
┃ ┗ readme.md 작성
┃
┃
┣ 📅 8월 4일
┃ ┣ 로그인 페이지 html, css 제작
┃ ┗ 
┃
┃
┣ 📅 8월 5일
┃ ┣ 장바구니 페이지 html, css 제작
┃ ┗ 
┃                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛


+ 추후 SPA나 React로 리팩토링 예정
```