# <img src="https://user-images.githubusercontent.com/65377787/210303645-1c9c2a09-24bc-4bc2-a558-29de13914f2c.png"  width="32" height="32" /> Baekjoon Help

백준 풀이 검색 및 빠른 반례 찾기를 위한 크롬 확장 프로그램.

## 사용 방법
##### 1. [크롬 웹 스토어 : 백준 헬프](https://chrome.google.com/webstore/detail/%EB%B0%B1%EC%A4%80-%ED%97%AC%ED%94%84-baekjoon-help/pdemnkinpcpgaoifngpojlfdmngbpaha?hl=ko)에서 다운로드

##### 2. 백준 문제 페이지 및 질문 게시판 접속 시, 자동 실행


## 개발 동기

백준에서 문제 풀이 중 막히는 경우, 문제 번호로 검색하거나 백준의 질문 게시판에서 정보를 찾아야 합니다. 저는 이 정보를 얻는 과정에서 매번 문제 번호로 검색하는 반복적인 작업과 질문 게시판에서 유용한 글과 그렇지 않은 글의 구별이 힘든 점이 불편했습니다.
</br>
이러한 불편함을 해소하여 더 나은 백준 풀이 경험을 만들기 위해 간단한 크롬 확장 프로그램인 **Baekjoon Help**를 만들게 되었습니다.


## 기능

##### 1. 도움 받기 버튼으로 빠른 검색 기능

##### 2. 질문 게시판 유용한 글 강조

##### 3. 검색 시, 디폴트 언어 설정 기능

## 1. 백준 문제 메뉴에 도움받기 버튼 추가

- 기존 문제 메뉴바에 `도움받기` 버튼을 추가
- `도움 받기` 버튼 클릭 시, 구글에 문제 번호로 풀이 검색

![도움 받기 사진](https://user-images.githubusercontent.com/65377787/213765078-4439ca08-cc59-4deb-b0a0-67deb2eb5f0e.png)

## 2. 질문 게시판 유용한 글 강조 기능

- 기존 질문 게시판의 글들은 어떤 글이 답변이 있는 글인지, 답변이 없는 채로 질문만 있는 글인지 구분이 되지 않음.
- 빠르게 유용한 글 만을 확인할 수 있도록 답변이 있는 글은 ![##eafdfc](https://placehold.co/15x15/eafdfc/eafdfc.png), 좋아요가 있는 글은 ![#fff6bd](https://placehold.co/15x15/fff6bd/fff6bd.png) 으로 강조.
  ![보드 사진](https://user-images.githubusercontent.com/65377787/213765400-f8c993ef-76d1-42e8-ae0b-4db253175129.png)

## 3. 팝업 페이지 디폴트 언어 설정

- 문제 번호 검색 시, 본인이 사용하는 언어로 검색하도록 언어 설정 기능.

![Group 280](https://user-images.githubusercontent.com/65377787/215256926-bebc2e63-00ee-4759-88a7-400d7172bfd9.png)

<br/>

## 버전

###

#### 1.0.0

- 위의 3개의 기능 동작.
- 크롬 익스텐션 업로드.

#### 1.0.1

- `도움 받기` 버튼 클릭 시,기존 질문게시판 + 문제번호 검색 2개의 탭을 띄우는 것에서 문제번호 검색 탭만 띄우는 것으로 변경.

#### 1.0.2

- 팝업 페이지 언어 설정 기능 input -> select 형식으로 변경.

## 노션 소개 페이지

[노션 링크](https://www.notion.so/Baekjoon-Help-0ce3e57ea19e462e85bd61b998abaaca)
