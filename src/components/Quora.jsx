import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";
import Errror from "./Error";

function Quora() {
  const [loginUser, setLoginUser] = useState([]);
  // console.log("Quara Page", loginUser);

  useEffect(() => {
    const storedLogin = JSON.parse(localStorage.getItem("user_login"));
    // console.log("Stored login data:", storedLogin);

    if (storedLogin) {
      setLoginUser(storedLogin[0].name);
    }
  }, []);
  return (
    <>
      {loginUser.length === 0 ? (
        <Errror />
      ) : (
        <>
          <Navbar />
          <Feed />
        </>
      )}
    </>
  );
}

export default Quora;
