import React from "react";
import "./popup_header.css";
import logo from "../../../assets/imgs/logo.png";
import git_icon from "../../../assets/imgs/git.svg";

const PopupHeader = () => {
  return (
    <header className="popup-header header">
      <img className="header-icon" src={logo} alt="logo" />
      <h1 className="header-title">백준 헬프</h1>
      <a
        className="header-git"
        target="_blank"
        href="https://github.com/alsrb0504/Backjoon-Help-Extension"
      >
        <img src={git_icon} alt="git_icon" />
      </a>
    </header>
  );
};

export default PopupHeader;
