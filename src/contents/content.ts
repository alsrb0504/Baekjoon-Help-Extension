// 문제 메뉴바.
const problem_menus = document.querySelector(
  ".problem-menu"
) as HTMLUListElement;

// 메뉴바의 첫 번째 자식이 문제번호를 가지고 있음.
const first_menu = problem_menus.firstElementChild as HTMLLIElement;
// 1000번 -> 1000 추출.
const problem_number: string = first_menu
  .querySelector("a")!
  .innerText.split("번")[0]
  .trim();

// *
// 도움 받기 기능 구현 함수.
// *
const OpenHelp = () => {
  let default_lang = "";

  chrome.runtime.sendMessage({ action: "GET_SETTING" }, (res) => {
    default_lang = res.lang;

    const search_param = `${problem_number}${
      default_lang ? ` ` + default_lang : ""
    }`;

    window.open(
      `https://www.acmicpc.net/board/search/all/problem/${problem_number}`
    );

    window.open(
      `https://www.google.com/search?q=%EB%B0%B1%EC%A4%80+${search_param}&oq=%EB%B0%B1%EC%A4%80+${search_param}&aqs=chrome.0.69i59j0i512l9.3745j0j7&sourceid=chrome&ie=UTF-8`
    );
  });
};

// 도움 받기 엘리먼트 생성 및 기능 추가.
const help_list_container: HTMLLIElement = document.createElement("li");
const help_anchor: HTMLAnchorElement = document.createElement("a");
help_anchor.setAttribute("href", "#");
help_anchor.onclick = OpenHelp;
help_anchor.innerText = "도움 받기!";

// 화면에 추가.
help_list_container.append(help_anchor);
problem_menus.append(help_list_container);
