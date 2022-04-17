import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginSuccess,
  loginLoading,
} from "../Redux/Login/action";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [email, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = () => {
    const userDetail = {
      email,
      password,
    };
    dispatch(loginLoading());
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(userDetail),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(loginSuccess(res.token));
        navigate("/");
      }) // set token and auth status
      .catch((err) => dispatch(loginFailure()));
  };

  return (
    <>
      <input
        type="text"
        placeholder="enter user Id"
        value={email}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br></br>
      <input
        type="text"
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </>
    // return (
    // <div>hello</div>
  );
};
