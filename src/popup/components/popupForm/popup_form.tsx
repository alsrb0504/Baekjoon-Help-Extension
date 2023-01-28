import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import "./popup_form.css";
import useSetting from "../../hoc/useSetting";

const PopupForm = () => {
  const { lang, lang_options, setLang, GetSettings, SetSettings } =
    useSetting();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetSettings();
  }, [GetSettings]);

  const OnChange = useCallback(
    (e: ChangeEvent) => {
      const target = e.target as HTMLSelectElement;
      setLang(target.value);
    },
    [setLang]
  );

  const OnSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      SetSettings(lang);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        window.close();
      }, 300);
    },
    [lang, setLang, SetSettings]
  );

  return (
    <form className="popup-form" onSubmit={OnSubmit}>
      <label className="form-label" htmlFor="lang">
        Used Language
      </label>

      <select
        className="form-select"
        id="lang"
        onChange={OnChange}
        value={lang}
      >
        {lang_options.map((el) => (
          <option value={el.value}>{el.text}</option>
        ))}
      </select>

      {/* 버튼 로딩 */}
      {!loading && (
        <button className="form-btn form-submit" type="submit">
          설정
        </button>
      )}
      {loading && (
        <button disabled className="form-btn form-loading">
          loading...
        </button>
      )}
    </form>
  );
};

export default PopupForm;
