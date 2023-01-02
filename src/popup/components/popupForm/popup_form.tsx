import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./popup_form.css";
import useSetting from "../../hoc/useSetting";

const PopupForm = () => {
  const { lang, setLang, GetSettings, SetSettings } = useSetting();
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    GetSettings();
    inputRef.current?.focus();
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

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        // window.close();  // 팝업 자동 종료 (고려)
      }, 300);
    },
    [lang, setLang, SetSettings]
  );

  return (
    <form className="popup-form" onSubmit={OnSubmit}>
      <label className="form-label" htmlFor="lang">
        Used Language
      </label>
      <input
        ref={inputRef}
        className="form-input"
        type="text"
        id="lang"
        placeholder="사용언어"
        onChange={OnChange}
        value={lang}
      />
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
