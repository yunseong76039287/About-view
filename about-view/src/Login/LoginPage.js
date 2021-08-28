import React from "react";
import "./LoginPage.css";
const LoginPage = () => {
  return (
    <div className="login-page">
      <p className="login-page-title">About</p>
      <input className="login-page-input-id" placeholder="아이디"></input>
      <input
        className="login-page-input-password"
        placeholder="비밀번호"
      ></input>
      <span className="login-page-sign-up">회원가입</span>
      <button className="login-page-login-button">로그인</button>
    </div>
  );
};

export default LoginPage;
