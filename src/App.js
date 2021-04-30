import React, { useEffect, useState, useRef } from "react";
import SceneWrapper from "./component/sceneWrapper/SceneWrapper";
import "./App.css";
import { getUser } from "./action";
import venueManager from "./component/venueManager.png";
import Map from "./component/map/Map";
import { LoginPage } from "./component/loginPage/LoginPage";
import { NavBar } from "./component/navbar/NavBar";
import { shadowMapFragment } from "@babylonjs/core/Shaders/ShadersInclude/shadowMapFragment";

const App = () => {
  const [userName, setUserName] = useState();
  const [loginScreen, setLoginScreen] = useState(true);
  const [image, setImage] = useState();
  const [loggedInUser, setLoggedInUser] = useState({});
  const [imageUpdated, setImageUpdated] = useState(true);
  const [captureMap, setCaptureMap] = useState(venueManager);
  const [noOfBoxes, setNoOfBoxes] = useState(0);
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState({
    show: false,
    top: 0,
    left: 0,
  });
  const [rightDialogueValue, setRightDialogueValue] = useState("");
  const rightDialogueRef = useRef(null);

  let arrayOfWord = [
    "searching",
    "text",
    "copy",
    "paste",
    "image",
    "pixel",
    "working",
  ];

  const handleClickOutside = (e) => {
    console.log(rightDialogueRef);
    if (
      rightDialogueRef.current !== null &&
      !rightDialogueRef.current.contains(e.target)
    ) {
      setRightDialogueValue("");
      setText("");
    }
  };

  // const handleClickInside = () => setClickedOutside(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  useEffect(() => {
    console.log("suggestion", suggestion);
  }, [suggestion]);

  useEffect(() => {
    console.log("number of boxes", noOfBoxes);
  }, [noOfBoxes]);
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

  const onClickRightDialogue = (e) => {
    setRightDialogueValue(e);
  };
  let filtered = arrayOfWord.filter((a) => a.includes(text));
  return (
    <div className="app">
      {/* {loginScreen ? (
        <LoginPage
          setLoginScreen={setLoginScreen}
          setLoggedInUser={setLoggedInUser}
        />
      ) : ( */}
      <>
        <NavBar />
        <div className="base_wrapper">
          {/* <div className="map">
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

                <span>No of boxes : {noOfBoxes}</span>
                <button onClick={onSignOutClick}>Sign Out</button>
              </div>
            </div> */}
          <div className="scene">
            <div className="right_controls">
              <span
                style={{
                  border:
                    rightDialogueValue === "map"
                      ? "1px solid black"
                      : "1px solid transparent",
                }}
                onClick={() => onClickRightDialogue("map")}
              >
                Map
              </span>
              <span
                style={{
                  border:
                    rightDialogueValue === "account"
                      ? "1px solid black"
                      : "1px solid transparent",
                }}
                onClick={() => onClickRightDialogue("account")}
              >
                Acc.
              </span>
            </div>

            {rightDialogueValue === "map" && (
              <>
                <div className="map_dialogue_box" ref={rightDialogueRef}>
                  <div>
                    <Map
                      loggedInUser={loggedInUser}
                      setCaptureMap={setCaptureMap}
                      captureMap={captureMap}
                      setImageUpdated={setImageUpdated}
                      imageUpdated={imageUpdated}
                    />
                  </div>
                </div>
              </>
            )}
            {rightDialogueValue === "account" && (
              <>
                <div className="map_dialogue_box" ref={rightDialogueRef}>
                  <div className="details_container">
                    <span>
                      User: <span>{userName}</span>{" "}
                    </span>
                    <span className="details_contianer_img">
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

                    <span>No of boxes : {noOfBoxes}</span>
                  </div>
                </div>
              </>
            )}
            <div className="scene_wrapper">
              {suggestion.show && filtered.length > 0 && (
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: suggestion.top,
                    left: suggestion.left,
                    background: "#ffffff",
                    width: "fit-content",
                    padding: "10px",
                    height: 100,
                    overflow: "scroll",
                  }}
                >
                  {filtered.map((a) => (
                    <span>{a}</span>
                  ))}
                </span>
              )}
              <SceneWrapper
                captureMap={captureMap}
                words={arrayOfWord}
                setSuggestion={setSuggestion}
                setCaptureMap={setCaptureMap}
                setNoOfBoxes={setNoOfBoxes}
                setText={setText}
                noOfBoxes={noOfBoxes}
                onClickRightDialogue={onClickRightDialogue}
              />
            </div>
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default App;
