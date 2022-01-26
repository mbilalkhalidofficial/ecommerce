import React from "react";

export default function InputBox({
  type,
  placeholder,
  inputStyle,
  onChange,
  value,
}) {
  return (
    <input
      type={type}
      className="login__form__input"
      placeholder={placeholder}
      style={inputStyle}
      onChange={onChange}
      value={value}
    />
  );
}
