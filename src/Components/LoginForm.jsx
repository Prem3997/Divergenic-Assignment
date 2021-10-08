import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./LoginForm.css";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/display");
    }
  }, [history]);
  
  const inputEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const inputPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const buttonClickHandler = () => {
    console.log("clicked");
    //"http://65.2.130.21/user/create-super-admin/
    if (password.length > 6) {
      axios
        .post("http://65.2.130.21/api/user/login/", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            setEmail("");
            setPassword("");
            history.push("/display");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="loginform">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={inputEmailChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={inputPasswordChange}
        required
      />
      <button onClick={buttonClickHandler}>Submit</button>
    </div>
  );
}
