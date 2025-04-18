# 기본 퍼블리싱 세팅

## 1. Node.js 설치

- 설치(https://nodejs.org)
  - LTS 버전은 안정된 버전
  - 긍정적인 버튼을 선택해서 기본설치 하면 됨
  - `추후 NVM(Node Version Manager)로 버전 관리`
- Node.js 는 PC 환경에서 JS 를 실행하도록 해줌
- Node.js 는 Server, DB, Clinent 프로그램 제작 지원

## 2. 기본 VSCode 설치

- 설치(https://code.visualstudio.com)

### 2-1. 퍼블리싱 추천 Extension ( 플러그인 )

```
- Auto Colse Tag
- Auto Rename Tag
- Bracket Pari Clor DLW
- CSS Peak
- HTML CSS Support
- HTML to CSS autocompletion
- Image preview
- indent - rainbow
- Korean Language Pack for...(VSCode 재실행 후 확인)
- Live Server
- Markdown Prewiew Enhanced
- Material Icon Theme
- Night Owl(테마)
- Prettier - Code formatter(별도 참조)
```

### 2-2. Prettier 세팅( 코딩 컨벤션 도구 )

- 파일 저장 시 자동 정렬

```
- 관리 버튼 클릭 > 설정 메뉴 선택 > Format On Save 검색
- Editor : Format On Save 체크 버튼 확인
```

- 기본 문서포맷도구 설정

```
- 관리 버튼 클릭 > 설정 메뉴 선택 > Default Formatter 검색
- Prettier - Code formatter로 선택
```

### 2-3. Live Server 세팅( 일부 실행 오류 발견됨 )

- 파악 후 업데이트 예정

# WAS( Web Application Server )

## 1. 기본 추천 폴더 구조

- `프로젝트명/public` 폴더 생성
- `프로젝트명/public/imange` 폴더 생성

```
jpg, png(추천), gif, svg(추천), webp(추천 : 용량최소) 등
```

- `프로젝트명/public/css` 폴더 생성

```
common,css(공통적용), header, css, footer, css 등 영역별로 생성
```

- `프로젝트명/public/js` 폴더 생성

```
각 종류의 라이브러리.js, header.js, footer.js 등 영역별로 생성
```

- `프로젝트명/public/assets` 폴더 생성

```
프로젝트 관련문서(회의록, 요구사항명세서, 계약서 등), 디자인 및 멀티미디어 리소스 등
```

## 2. 홈페이지 ( index.html )

- 파일명 준수 (소문자 기준)
- `프로젝트명/public/index.html`파일 생성
- 키보드 단축키 활용 : `! + tab`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

### 2-1. 기본 수정 사항

- 문서 기본 언어 수정(ko)

```html
<html lang="ko"></html>
```

- 문서 기본 타이틀 수정

```html
<title>서비스명</title>
```

### 2-2. body 와 내용영역 구분 추천

```html
<body>
  <!-- 전체 레이아웃 -->
  <div></div>
</body>
```

### 2-3. 기본적으로 header, main, footer 를 구분하기를 권장

- 시멘틱태그 : 태그의 단어가 내용을 설명하는 역할을 말함

```html
<body>
  <!-- 전체 레이아웃 -->
  <div>
    <!-- 문서 상단 -->
    <header></header>
    <!-- 문서 내용 -->
    <main></main>
    <!-- 문서 하단 -->
    <footer></footer>
  </div>
</body>
```

### 2-4. 위 구조 기본 작성 후 각 내용을 div 태그로 분할한다.

- 인터파크 사이트의 경우

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>나의 til</title>
  </head>
  <body>
    <!-- 전체 레이아웃 -->
    <div>
      <!-- 상단 -->
      <haeder>
        <div></div>
      </haeder>
      <!-- 메인 -->
      <main>
        <div></div>
      </main>
      <!-- 하단 -->
      <footer>
        <div></div>
      </footer>
    </div>
  </body>
</html>
```

# Git (버전 관리 도구)

## 1. Git 관리

- 내 PC 에서 코딩 버전을 관리하는 도구
- 설치(https://git-scm.com/)
- 64-bit Git for windows Setup.

#### 1-1. 설치확인 방법

- `윈도우 로고 + R` 키 입력 > `cmd 로 터미널` 실행

```bash
git --version
```

#### 1-2. VSCode 에서 Git 관리 하기

- 터미널 입력창을 Git Bash 로 세팅해서 관리

- Git Bash 를 선택한 이유는 Linux, MacOS 운영체제의 터미널 사용

```
관리도구 버튼 > Settings > 입력창 : default:Windows > Git Bash 선택
```

- 설정확인

```
 VSCod 주메뉴 > Terminal > Terminal 보기 선택 > Bash 확인
```

- 버전 확인 해보기

```bash
git -v
```

#### 1-3. 기본 저장소(Repository) 이름 설정하기

- 옛날에는 브랜치 명 `master` 라고 생성이 되었습니다.

- 현대에는 `main` 으로 생성해야 합니다.

```bash
git config --global init.defaultBranch main
```

#### 1-4. Enter 키에 의한 줄내림 통일하기(Linux, MacOS, Window)

```bash
git config --global core.autocrlf true
```

#### 1-5. git 명령어의 추가 내용 작성을 VSCode 로 하도록 설정

```bash
git config --global core.editor "code --wait"
```

#### 1-6. 사용자 아이디 저장

```bash
git config --global user.name "id"
git config --global user.email "id@gmail.com"
```

## 2. Git 명령어 실행하기

## 3. GitHub 관리

- 웹 에서 나의 계정에 코딩 버전을 관리하는 도구
