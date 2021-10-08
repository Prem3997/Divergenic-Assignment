import axios from "axios";
import React, { useState } from "react";
import "./UserForm.css";
export default function UserForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customer, setCustomer] = useState("");
  const [activeDate, setActiveDate] = useState("");
  const [inActiveDate, setInActiveDate] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password, customer, activeDate, inActiveDate);
    axios
      .post("http://65.2.130.21/api/user/create-super-admin/", {
        email: email,
        password: password,
        customer: 1,
        active_date: activeDate,
        inactive_date: inActiveDate,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handleInputEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleInputCustomerChange = (e) => {
    setCustomer(e.target.value);
  };
  const handleInputActiveChange = (e) => {
    setActiveDate(e.target.value);
  };
  const handleInputInActiveChange = (e) => {
    setInActiveDate(e.target.value);
  };
  return (
    <div>
      <form className="userform" onSubmit={submitHandler}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputEmailChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputPasswordChange}
          required
        />
        <div>
          Customer :
          <select
            onChange={handleInputCustomerChange}
            value={customer}
            style={{ width: "40px" }}
          >
            <option>1</option>
          </select>
        </div>
        <div>
          Active Date :
          <input
            type="date"
            name="active_date"
            placeholder="Active Date"
            value={activeDate}
            onChange={handleInputActiveChange}
            required
          />
        </div>
        <div>
          InActive Date :
          <input
            type="date"
            name="active_date"
            placeholder="Active Date"
            value={inActiveDate}
            onChange={handleInputInActiveChange}
            required
          />
        </div>
        <input type="submit" name="Submit" />
      </form>
    </div>
  );
}
