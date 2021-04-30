import React, { useEffect } from "react";
import "pepjs";
import {
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  ArcRotateCamera,
  StandardMaterial,
  Texture,
  PointLight,
  DirectionalLight,
  Color3,
  PointerEventTypes,
  Mesh,
} from "@babylonjs/core";
import SceneComponent from "../scene";
import venueManager from "../venueManager.png";
import "./SceneWrapper.css";
import { AdvancedDynamicTexture, InputText, TextBlock } from "babylonjs-gui";

let box;

const onSceneReady = (
  scene,
  img,
  onClickRightDialogue,
  setSuggestion,
  setText
) => {
  // This creates and positions a free camera (non-mesh)
  var camera = new ArcRotateCamera(
    "camera1",
    -(Math.PI / 2),
    Math.PI / 2,
    4,
    new Vector3.Zero(1, 1, 0),
    scene
  );
  let left = 40;
  let top = 45;
  const canvas = scene.getEngine().getRenderingCanvas();
  scene.clearColor = new Color3(0.8, 0.8, 0.8);

  const box = new MeshBuilder.CreateBox("box", {
    height: 1,
    width: 1,
    depth: 0.25,
  });
  scene.onPointerObservable.add((pointerInfo) => {
    switch (pointerInfo.type) {
      case PointerEventTypes.POINTERDOWN:
        onClickRightDialogue("");
        break;
      case PointerEventTypes.POINTERDOUBLETAP:
        createInput(pointerInfo);
        break;
    }
  });

  camera.attachControl(canvas, true);

  var light = new HemisphericLight("light", new Vector3(1, -1, -2), scene);
  light.intensity = 1;

  const createInput = (info) => {
    let advancedTexture = new AdvancedDynamicTexture.CreateForMesh(box);
    console.log(info);
    let input1 = new InputText();
    input1.width = "400px";
    input1.height = "100px";
    input1.color = "white";
    input1.background = "grey";
    input1.fontSize = "80px";
    input1.top = `${top}%`;
    input1.left = `${left}%`;
    input1.onTextChangedObservable.add(() => {
      if (input1.text.length > 0) {
        setText(input1.text);
        setSuggestion({
          show: true,
          top: "50vh",
          left: "50vw",
        });
      }
      // createBox();
    });
    console.log(input1);

    advancedTexture.addControl(input1);
    input1.linkWithMesh(box);
  };

  const createBox = () => {
    let outerBox = box.clone("outerBox");
    outerBox.material = materialImg;
    let advancedTexture = new AdvancedDynamicTexture.CreateForMesh(outerBox);

    let input1 = new TextBlock();
    input1.width = "400px";
    input1.height = "400px";
    input1.color = "white";
    input1.background = "grey";
    input1.fontSize = "80px";
    input1.top = `${top}%`;
    input1.left = `${left}%`;

    console.log(input1);

    advancedTexture.addControl(input1);
    input1.linkWithMesh(outerBox);
  };

  // add image
  const materialImg = new StandardMaterial("materialImg", scene);
  materialImg.diffuseTexture = new Texture(img, scene);

  let innerBox = box.clone("innerBox");
  innerBox.material = materialImg;
};

const onRender = (scene) => {
  if (box !== undefined) {
    var deltaTimeInMillis = scene.getEngine().getDeltaTime();

    const rpm = 5;
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
};

export default (props) => {
  const getNumOfBoxes = (props) => {
    props.setNoOfBoxes(8);
  };
  useEffect(() => {
    getNumOfBoxes(props);
  }, []);

  return (
    <SceneComponent
      antialias
      onSceneReady={onSceneReady}
      setCaptureMap={props.setCaptureMap}
      captureMap={props.captureMap}
      onClickRightDialogue={props.onClickRightDialogue}
      setText={props.setText}
      onRender={onRender}
      setSuggestion={props.setSuggestion}
      id="my-canvas"
    />
  );
};
