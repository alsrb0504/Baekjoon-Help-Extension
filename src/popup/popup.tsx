import React from "react";
import "./popup.css";
import logo from "../assets/logo.png";
import git_icon from "../assets/git.svg";

const Popup = () => {
  return (
    <div className="popup">
      <header className="popup-header header">
        <img className="header-icon" src={logo} alt="logo" />
        <h1 className="header-title">백준 헬프</h1>
        <a
          className="header-git"
          href="https://github.com/alsrb0504/Backjoon-Help-Extension"
        >
          <img src={git_icon} alt="git_icon" />
        </a>
      </header>

      <form className="popup-form">
        <label className="form-label" htmlFor="lang">
          Used Language
        </label>
        <input
          className="form-input"
          type="text"
          id="lang"
          placeholder="사용언어"
        />
        <button className="form-submit" type="submit">
          설정
        </button>
      </form>
    </div>
  );
};

export default Popup;
