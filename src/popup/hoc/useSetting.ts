import { useState, useCallback } from "react";
export default function useSetting() {
  const [lang, setLang] = useState("");

  const lang_options = [
    { value: "", text: "Empty" },
    { value: "C", text: "C" },
    { value: "C++", text: "C++" },
    { value: "C#", text: "C#" },
    { value: "Python", text: "Python" },
    { value: "Java", text: "Java" },
    { value: "Node.js", text: "Node.js" },
    { value: "Kotlin", text: "Kotlin" },
    { value: "Swift", text: "Swift" },
    { value: "PHP", text: "PHP" },
    { value: "Rust", text: "Rust" },
  ];

  const GetSettings = useCallback(() => {
    chrome.runtime.sendMessage({ action: "GET_SETTING" }, (res) => {
      setLang(res.lang);
    });
  }, [chrome, setLang]);

  const SetSettings = useCallback(
    (new_lang: string) =>
      chrome.runtime.sendMessage(
        {
          action: "SET_SETTING",
          data: new_lang,
        },
        () => {
          setLang(new_lang);
        }
      ),
    [chrome, setLang]
  );

  return {
    lang,
    lang_options,
    setLang,
    GetSettings,
    SetSettings,
  };
}
