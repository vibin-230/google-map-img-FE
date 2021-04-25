import React, { useState, useEffect } from "react";
import { createUser, getUser } from "../../action";
import "./LoginPage.css";
export const LoginPage = (props) => {
  const [username, setUserName] = useState("");
  const [popUp, setPopUp] = useState("");
  const [userNameLength, setUserNameLength] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  const [password, setPassword] = useState("");
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSignUpClick = () => {
    if (username.length > 2 && password.length > 4) {
      console.log("sign up clicked", username, password);
      let body = {
        username: username,
        password: password,
      };
      createUser(body).then((res) => {
        if (res.data.message === "Success") setPopUp("created");
      });
    } else {
      if (username.length < 3) {
        setUserNameLength(true);
      }
      if (password.length < 5) {
        setPasswordLength(true);
      }
    }
  };
  const onSignInClick = () => {
    let body = {
      username: username,
      password: password,
    };

    console.log("signin", body);
    getUser(body)
      .then((res) => {
        if (res.data.message === "Success") {
          let userDate = {
            username: res.data.result.username,
            password: res.data.result.password,
            img: res.data.result.img,
          };
          props.setLoggedInUser(userDate);
          props.setLoginScreen(false);
        } else setPopUp("no_user");
      })
      .catch((err) => console.log("login error", err));
  };

  useEffect(() => {
    if (popUp === "creted" || popUp === "no_user") {
      setTimeout(() => {
        setPopUp("");
      }, 700);
    }
  }, [popUp]);
  return (
    <div className="backdrop">
      <div className="login_container">
        <div>
          <span>
            <span>User Name</span>
            <input onChange={onChangeUserName} />
          </span>
          {userNameLength && (
            <span className="error">Enter atleast 3 characters</span>
          )}
        </div>
        <div>
          <span>
            <span>Password</span>
            <input type="password" onChange={onChangePassword} />
          </span>
          {passwordLength && (
            <span className="error">Enter atleast 5 characters</span>
          )}
        </div>
        <div className="login_button_contianer">
          <button onClick={() => onSignUpClick()}>Sign Up</button>
          <button onClick={() => onSignInClick()}>Sign In</button>
        </div>
      </div>
      {popUp !== "" && (
        <div className="success_popup">
          {popUp === "created" && "USER CREATED, Login to continue"}
          {popUp === "no_user" && "User not found"}
        </div>
      )}
    </div>
  );
};
