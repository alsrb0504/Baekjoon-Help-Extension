import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import "./popup_form.css";

const PopupForm = () => {
  const [lang, setLang] = useState("");

  useEffect(() => {
    chrome.runtime.sendMessage({ action: "GET_SETTING" }, (res) => {
      setLang(res.lang);
    });
  }, []);

  const OnChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setLang(target.value);
  };

  const OnSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      chrome.runtime.sendMessage(
        {
          action: "SET_SETTING",
          data: lang,
        },
        () => {
          setLang(lang);
        }
      );
    },
    [lang]
  );

  return (
    <form className="popup-form" onSubmit={OnSubmit}>
      <label className="form-label" htmlFor="lang">
        Used Language
      </label>
      <input
        className="form-input"
        type="text"
        id="lang"
        placeholder="사용언어"
        onChange={OnChange}
        value={lang}
      />
      <button className="form-submit" type="submit">
        설정
      </button>
    </form>
  );
};

export default PopupForm;
