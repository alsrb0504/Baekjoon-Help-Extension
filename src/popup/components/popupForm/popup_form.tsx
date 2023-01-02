import React, { ChangeEvent, FormEvent, useCallback, useEffect } from "react";
import "./popup_form.css";
import useSetting from "../../hoc/useSetting";

const PopupForm = () => {
  const { lang, setLang, GetSettings, SetSettings } = useSetting();

  useEffect(() => {
    GetSettings();
  }, [GetSettings]);

  const OnChange = useCallback(
    (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement;
      setLang(target.value);
    },
    [setLang]
  );

  const OnSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      SetSettings(lang);
    },
    [lang, setLang, SetSettings]
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
