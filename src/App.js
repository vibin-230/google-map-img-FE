import React, { useEffect, useState } from "react";
import SceneWrapper from "./component/sceneWrapper/SceneWrapper";
import "./App.css";
import { getUser } from "./action";
import venueManager from "./component/venueManager.png";
import Map from "./component/map/Map";
import { LoginPage } from "./component/loginPage/LoginPage";

const App = () => {
  const [userName, setUserName] = useState();
  const [loginScreen, setLoginScreen] = useState(true);
  const [image, setImage] = useState();
  const [loggedInUser, setLoggedInUser] = useState({});
  const [imageUpdated, setImageUpdated] = useState(true);
  const [captureMap, setCaptureMap] = useState(venueManager);

  const onSignOutClick = () => {
    window.location.reload();
  };
  useEffect(() => {
    if (!loginScreen) {
      let body = {
        username: loggedInUser.username,
        password: loggedInUser.password,
      };
      getUser(body).then((res) => {
        console.log("user data", res);
        setUserName(res.data.result.username);
        setImage(res.data.result.img);
      });
    }
  }, [imageUpdated, loginScreen]);
  return (
    <div className="app">
      {loginScreen ? (
        <LoginPage
          setLoginScreen={setLoginScreen}
          setLoggedInUser={setLoggedInUser}
        />
      ) : (
        <>
          <div className="map">
            <Map
              loggedInUser={loggedInUser}
              setCaptureMap={setCaptureMap}
              captureMap={captureMap}
              setImageUpdated={setImageUpdated}
              imageUpdated={imageUpdated}
            />
            <div className="details_container">
              <span>
                User: <span>{userName}</span>{" "}
              </span>
              <span>
                {" "}
                Saved image:{" "}
                {
                  <img
                    src={image}
                    alt="user_map_image"
                    style={{ width: "100px", height: "100px" }}
                  />
                }
              </span>
              <button onClick={onSignOutClick}>Sign Out</button>
            </div>
          </div>
          <div className="scene">
            <SceneWrapper captureMap={captureMap} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
