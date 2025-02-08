import { useState } from "react";
import Button from "../game-button/game-button";
import "./login.css";

const Login = ({ handleLogin }) => {
  const [userName, setUserName] = useState("User");
  const [userSurName, setUserSurName] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value.trim());
  };
  const handleUserSurName = (e) => {
    setUserSurName(e.target.value.trim());
  };

  const submit = (e) => {
    e.preventDefault();
    if (userName === "") {
      handleLogin("User");
      return;
    }
    handleLogin(`${userName} ${userSurName}`);
  };

  return (
    <form className="vh-100 " onSubmit={submit}>
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong game-login">
              <div className="card-body p-5 text-center">
                <h3 className="mb-5 title">Sign in and start game</h3>

                <div
                  data-mdb-input-init
                  className="form-outline mb-4 login-input"
                >
                  <label className="form-label" htmlFor="userName">
                    Name
                  </label>
                  <input
                    type="text"
                    id="userName"
                    placeholder="User"
                    className="form-control form-control-lg"
                    onChange={handleUserName}
                  />
                </div>

                <div
                  data-mdb-input-init
                  className="form-outline mb-4 login-input"
                >
                  <label className="form-label" htmlFor="userSurName">
                    Surname
                  </label>
                  <input
                    type="text"
                    id="userSurName"
                    className="form-control form-control-lg"
                    onChange={handleUserSurName}
                  />
                </div>
                <Button name={"Login"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
