# <img src="https://user-images.githubusercontent.com/65377787/210303645-1c9c2a09-24bc-4bc2-a558-29de13914f2c.png"  width="32" height="32" /> Baekjoon Help

백준 풀이 검색 및 빠른 반례 찾기를 위한 크롬 확장 프로그램.

## 사용 방법

[크롬 웹 스토어 : 백준 헬프](https://chrome.google.com/webstore/detail/%EB%B0%B1%EC%A4%80-%ED%97%AC%ED%94%84-baekjoon-help/pdemnkinpcpgaoifngpojlfdmngbpaha?hl=ko)

## 개발 동기

백준 문제를 풀이하다 막혔을 때, 우리는 주로 구글에 문제 번호를 검색하거나 질문 게시판에서 도움을 받습니다.
하지만 기존 질문 게시판은 가시성이 좋지 않기에 질문만 존재하고 답변이 없는 글들이 유용한 글들과 잘 구별되지 않습니다. 또한 구글에 문제 번호 검색도 매번 새 탭을 띄우고 직접 문제 번호를 입력해야 한다는 번거로움이 존재합니다.
</br>
이러한 불편함을 해소하고자 간단한 크롬 확장 프로그램인 **Baekjoon Help**를 만들게 되었습니다.

## 기능

##### 1. 도움 받기 버튼으로 빠른 검색 기능.

##### 2. 질문 게시판 유용한 글 강조.

##### 3. 검색 시, 디폴트 언어 설정 기능.

---

### 1. 백준 문제 메뉴에 도움받기 버튼 추가.

- 기존 문제 메뉴바에 `도움받기` 버튼을 추가.
- `도움 받기` 버튼 클릭 시, 구글에 문제 번호로 풀이 검색 + 질문 게시판 이동.

### before

![image](https://user-images.githubusercontent.com/65377787/209573123-8d916dc6-bd9e-4bf9-9d0f-bdc6ffd6cb47.png)

---

### after

![image](https://user-images.githubusercontent.com/65377787/209571618-fbebcdb8-fd86-4f35-a97b-b5bda5578726.png)

- 버튼 클릭 시, 구글에 문제 번호로 검색.
  ![image](https://user-images.githubusercontent.com/65377787/209573335-62e16e84-793a-47cb-af2a-dd3deb5247a2.png)

---

### 2. 질문 게시판 유용한 글 강조 기능.

- 기존 질문 게시판의 글들은 어떤 글이 답변이 있는 글인지, 답변이 없는 채로 질문만 있는 글인지 구분이 되지 않음.
- 빠르게 유용한 글 만을 확인할 수 있도록 답변이 있는 글은 ![##eafdfc](https://placehold.co/15x15/eafdfc/eafdfc.png), 좋아요가 있는 글은 ![#fff6bd](https://placehold.co/15x15/fff6bd/fff6bd.png) 으로 강조.

### before

![image](https://user-images.githubusercontent.com/65377787/209572164-a395973a-2c5b-477c-bc07-133006018a6c.png)

---

### after

![image](https://user-images.githubusercontent.com/65377787/209572136-609db257-82fb-4f6d-b83c-4c5ccefc7d1d.png)

---

### 3. 팝업 페이지 디폴트 언어 설정.

- 문제 번호 검색 시, 본인이 사용하는 언어로 검색하도록 언어 설정 가능.

![image](https://user-images.githubusercontent.com/65377787/210343385-2c17fad9-2114-43f4-9e7b-49085ef32ed1.png)

- 언어 설정 후, 검색 화면
- 문제 번호 + 설정 언어로 검색
  <br/>

![image](https://user-images.githubusercontent.com/65377787/210343638-b8b2358d-6d30-48da-8815-ca416413c867.png)

## 버전

###

#### 1.0.0

- 위의 3개의 기능 동작.
- 크롬 익스텐션 업로드.

#### 1.0.1

- `도움 받기` 버튼 클릭 시,기존 질문게시판 + 문제번호 검색 2개의 탭을 띄우는 것에서 문제번호 검색 탭만 띄우는 것으로 변경.
