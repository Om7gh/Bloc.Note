import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "./Input.tsx";

interface typeProps {
  bName: string;
}
const Form = (props: typeProps) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });

  const Inputs = [
    {
      id: "1",
      type: "text",
      name: "username",
      placeholder: "username...",
      required: true,
      pattern: "^[A-Za-z0-9]{4,16}$",
      errorMessage:
        "Username should be 4-16 character and should not include any special character !",
    },
    {
      id: "2",
      type: "password",
      name: "password",
      placeholder: "password...",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%,^&*])[a-zA-Z0-9!@#$%^,&*]{8,20}$`,
      errorMessage:
        "Password should be 8-20 character and include at least 1 letter, 1 number, 1 special character !",
    },
  ];

  const Login = [
    {
      id: "1",
      type: "text",
      name: "username",
      placeholder: "username...",
      required: true,
      pattern: "^[A-Za-z0-9]{4,16}$",
      errorMessage: "Please Enter your correct username !",
    },
    {
      id: "2",
      type: "password",
      name: "password",
      placeholder: "password...",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%,^&*])[a-zA-Z0-9!@#$%^,&*]{8,20}$`,
      errorMessage: "Please enter you password !",
    },
  ];

  function hundlerChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const history: any = useNavigate();

  const goTo = (e: any) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    let user = localStorage.getItem("user");

    if (user) {
      setTimeout(() => history("/notePage"), 2000);
    } else {
      history("/registrition");
      window.location.reload();
    }
  };

  return (
    <form onSubmit={goTo}>
      <h2 style={{ textAlign: "center" }}>{props.bName}</h2>
      {props.bName === "Register" && (
        <>
          {Inputs.map((input, index) => (
            <div>
              <Input
                className="input"
                key={input.id}
                {...input}
                value={form[input.name]}
                onChange={hundlerChange}
              />
              <span>{input.errorMessage}</span>
            </div>
          ))}

          <div>
            <Input
              name="repeatPassword"
              type="password"
              placeholder="repeat Password..."
              className="input"
              required
              pattern={form.password}
            />
            <span>Password not Matched !</span>
          </div>
        </>
      )}

      {props.bName === "Login" && (
        <>
          {Login.map((input, index) => (
            <div>
              <Input
                className="input"
                key={input.id}
                {...input}
                value={form[input.name]}
                onChange={hundlerChange}
              />
              <span></span>
            </div>
          ))}
        </>
      )}

      <button onSubmit={() => goTo} type="submit">
        {props.bName}
      </button>
    </form>
  );
};

export default Form;
