import { useState, useCallback } from "react";
export default function useSetting() {
  const [lang, setLang] = useState("");

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
    setLang,
    GetSettings,
    SetSettings,
  };
}
