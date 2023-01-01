import React from "react";
import "./popup.css";
import PopupHeader from "./components/popupHeader/popup_header";
import PopupForm from "./components/popupForm/popup_form";

const Popup = () => {
  return (
    <div className="popup">
      <PopupHeader />
      <PopupForm />
    </div>
  );
};

export default Popup;
