# :: 원티드 프리온보딩 프론트엔드 코스 사전과제

안녕하세요, 프론트엔드 개발자를 목표로 공부하는 서소희입니다.
<br>
제 [소개글](https://www.notion.so/greenish0902/25bddda3cacc45c9af58687f5d88b27a)과 프리온보딩 지원
[숏에세이](https://velog.io/@greenish0902/%EC%A7%80%EC%9B%90-%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EC%BD%94%EC%8A%A4)도 확인해보실 수 있습니다.

사전과제 수행은 제시된 [참고 이미지](https://bclef25.notion.site/1ed6d5b2192b45eeb4104a67f6a77250)와 과제에 따라 인스타그램 웹사이트 UI를 유사하게 구현했습니다.

## 디렉토리 구조

### public 폴더

```zsh
public
├── data
│   └── db.json
(생략)
```

문제 요구사항에 따라 public 폴더 아래에 data 폴더를 생성, db.json 파일을 임시로 작성하였고 json-server를 통해 임시로 서버를 구현, axios를 사용해 통신합니다.

### src 폴더

```zsh
src
├── App.jsx
├── components
│   ├── CommentForm.jsx
│   ├── CommentItem.jsx
│   ├── FeedItem.jsx
│   ├── Feeds.jsx
│   ├── GNB.jsx
│   └── LoginForm.jsx
├── exceptions
│   └── BadRequestException.js
├── index.js
├── libs
│   └── RegexHelper.js
├── pages
│   ├── Home.jsx
│   └── PreAssignmentGuide.jsx
└── styles
    ├── colors.scss
    └── globalStyles.js
```

라우팅 및 각 요소별 UI 구현을 위해 컴포넌트를 나누고, 정규식 및 예외처리를 위한 파일을 작성했습니다.

## 개발 과정

- 마감일에 임박해 정보를 얻고 지원하게 되어, 구현 완료를 최우선 목표로 진행했습니다.
- 과제를 크게 로그인 / 피드 두 가지로 분류하여, 하나씩 Assignment 중심으로 UI구현 - 기능개발 순으로 개발했습니다.
- 구현을 마친 후, React Hooks를 이용해 컴포넌트 및 함수를 최적화했습니다.

## 과제

---

### Assignment 1: Login

<br>
<div align="center" >
    <img src="./screenshots/01.png" width="30%">
</div>

- `LoginForm.jsx`
- 성공한 로그인 정보는 localStorage에 저장됩니다.

---

### Assignment 2: GNB

<br>
<div align="center" >
    <img src="./screenshots/03.png" width="68%">
    <img src="./screenshots/05.png" width="30%">
</div>
<br>

- `GNB.jsx`
- UI구현 후 `@media`쿼리를 이용해 반응형을 적용하였습니다.
- react-icons 사용

---

### Assignment3: Validation

<br>
<div align="center" >
    <img src="./screenshots/02.png" width="30%">
</div>
<br>

- `LoginForm.jsx`, `regexHelper.js`, `BadRequestException.js`
- Login: blur 이벤트로 input 태그의 변화를 감지하고, try catch 문으로 validation check 를 수행합니다.
- data 프로퍼티의 id, password를 모두 상태로 관리하며, 두 가지가 모두 입력되면 로그인 버튼의 색상이 변경되어 클릭이 가능합니다.
- 사전에 정의해둔 정규식 처리를 위한 소스코드를 libs 폴더에, 에러 관리를 위한 파일을 exceptions 폴더에 저장해 import 해 사용했습니다.

---

### Assignment 4: Routing

- `App.jsx`
- localStorage에 key = username 인 value가 존재하는지의 여부에 따라 라우팅을 처리하였습니다.
- useNaviate, Routes, Route path 사용

---

### Assignment5: Feeds

<br>
<div align="center" >
    <img src="./screenshots/06.png" width="30%">
</div>
<br>

- `Feeds.jsx`, `FeedItem.jsx`, `CommentItem.jsx`, `CommentForm.jsx`
- Feeds 아래에 개별 피드인 FeedItem.jsx 을 렌더링합니다.
- FeedItem.jsx 하위에 댓글 확인 및 작성 컴포넌트인 CommentItem.jsx, CommentForm.jsx 가 포함됩니다.
- onLoad 프로퍼티를 이용해 FeedItem의 렌더링 시점을 이미지 로딩 후로 설정하였습니다.
