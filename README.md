# React Darkmode
사용자 경험을 최상으로 이끌어주는 디자인 트렌드 `다크모드 UI`를 리액트 애플리케이션에 적용한 서비스입니다.
<br/>
다크모드 UI 적용을 위해 `styled-components`, 테마 상태관리를 위해 `context api` 및 `custom hook`을 사용했습니다.

## 🚀 Quick Start
- 애플리케이션 설치
```bash
$> npm i
```
- 애플리케이션 실행
```bash
$> npm start
```

<br/>

## 🔎 Features
1. 다크모드 테마 & 글로벌 스타일 설정
2. Context API로 ThemeProvider 커스텀
3. Custom hook으로 테마 관리 및 로컬 스토리지 상태 저장
4. 다크모드 토글 버튼 생성
5. 다크모드 context value로 custom style 적용

<br/>

## 🛠 Project Structure

#### 프로젝트 구조 (/src)

- `assets` : 이미지 파일 디렉토리
- `components` : view 컴포넌트 디렉토리
- `context` : darkmode context api 디렉토리
- `style` : styled-components를 이용한 공통 style 디렉토리
- `theme` : 다크모드 테마, 토글 버튼 디렉토리
- `App.js` : Route 처리 및 Theme Context 적용 
- `index.js` : 애플리케이션 엔트리 포인트

```text
src
├── assets ───────────────  이미지 파일
│   └── logo
│
├── components ───────────  view 컴포넌트
│   ├── AppLayout
│   ├── Header
│   ├── Main
│   └── Sub
│
├── context ──────────────  darkmode context api
│   └── themeProvider
│
├── style ────────────────  styled-components' custom style
│   ├── media_query
│   └── styles
│
├── theme ────────────────  다크모드 테마, 토글 버튼 디렉토리
│   ├── GlobalStyles
│   ├── ThemeToggle
│   └── theme
│
├── App.js ───────────────  Route 처리 및 Theme Context 적용
├── index.css ────────────  공통 css
└── index.js ─────────────  애플리케이션 엔트리 포인트
```

<br/>

#### 중요 라이브러리 (package)
```text
package.json
├── react : 리액트 라이브러리
├── styled-components : UI 라이브러리
├── styled-reset : css 초기화 라이브러리
└── react-router-dom : 리액트 라우트 처리
```
