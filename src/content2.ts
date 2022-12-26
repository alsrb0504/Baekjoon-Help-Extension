import "./board.css";

const table_body: HTMLTableSectionElement = document.querySelector("tbody")!;
const table_nodelist: NodeList = table_body.querySelectorAll("tr");
const table_array = Array.from(table_nodelist) as HTMLTableRowElement[];

// 공지글 필터링 후, 반례나 도움이 될 가능성이 높은 글들 강조.
table_array
  .filter((list) => !list.classList.contains("success"))
  .forEach((el) => {
    const children = el.children;

    // 좋아요가 있을 경우 -> 도움되는 글일 확률이 높음 -> 노란색으로 강조.
    if (children[5].innerHTML !== "0") {
      el.classList.add("is-help");

      const help_label = document.createElement("span");
      help_label.classList.add("label", "label-help");
      help_label.innerText = "유용!";

      children[0].appendChild(help_label);
    }

    // 좋아요가 없지만 답변이 있는 경우 -> 답변 있는 글을 구분하기 위해 연한 파랑으로 강조.
    else if (children[4].innerHTML !== "0") {
      el.classList.add("is-answer");

      const answer_label = document.createElement("span");
      answer_label.classList.add("label", "label-answer");
      answer_label.innerText = "답변";

      children[0].appendChild(answer_label);
    }
    // }
  });
