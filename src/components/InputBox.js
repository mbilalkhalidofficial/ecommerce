import React from "react";

export default function InputBox({ type, placeholder, inputStyle }) {
  return (
    <input
      type={type}
      className="login__form__input"
      placeholder={placeholder}
      style={inputStyle}
    />
  );
}
