import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./hook/StoreHooks";
import { loginUser, logOutUser } from "./state/slice/LoginUserSlice";
import { ILoginUserInfo } from "./state/store/StoreTypes";

function App() {
  const [userName, setUserName] = useState<string>("");
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state);

  const btnLoginOnClickHandler = () => {
    dispatch(loginUser({ userName: userName } as ILoginUserInfo));
    setUserName("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: "50px",
            padding: "20px 20px 20px 20px",
            textAlign: "center",
            width: "500px",
            boxShadow: "10px 10px 20px black",
          }}
        >
          <TextField
            key={"txtUserName"}
            label="User Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserName(e.target.value);
            }}
            value={userName}
          />
          <br />
          <Button
            key={"btnLogin"}
            variant="contained"
            style={{ marginTop: "10px" }}
            onClick={btnLoginOnClickHandler}
          >
            Login
          </Button>
          <Button
            key={"btnLogout"}
            variant="contained"
            style={{ marginTop: "10px", marginLeft: "5px" }}
            onClick={() => {
              dispatch(logOutUser(null));
            }}
          >
            Logout
          </Button>
          <br />
          <h4>
            Login User Info :
            {JSON.stringify(selector.loginUserSlice.loginUserInfo)}
          </h4>
        </div>
      </div>
    </>
  );
}

export default App;
