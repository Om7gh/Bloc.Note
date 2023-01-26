import React, { useState } from "react";

interface typeProps {
  type: string;
  placeholder: string;
  name: string;
  onChange: any;
  className: string;
  key: number;
  required: boolean;
  errorMessage: string;
  pattern: string;
  focused: string;
}
const Input = (props: typeProps) => {
  const [focused, setFocused] = useState(false);

  const handelFocus = () => {
    setFocused(true);
  };
  return (
    <>
      <input
        key={props.key}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        onChange={props.onChange}
        required
        pattern={props.pattern}
        onBlur={handelFocus}
        focused={focused.toString()}
        onFocus={() => props.name === "repeatPassword" && setFocused(true)}
      />
      <span>{props.errorMessage}</span>{" "}
    </>
  );
};

export default Input;
