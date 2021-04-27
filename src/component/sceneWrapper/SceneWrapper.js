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
} from "@babylonjs/core";
import SceneComponent from "../scene";
import venueManager from "../venueManager.png";
import "./SceneWrapper.css";

let box;

const onSceneReady = (scene, img, onClickRightDialogue) => {
  // This creates and positions a free camera (non-mesh)
  var camera = new ArcRotateCamera(
    "camera1",
    -(Math.PI / 2),
    Math.PI / 2,
    4,
    new Vector3.Zero(1, 1, 0),
    scene
  );

  const canvas = scene.getEngine().getRenderingCanvas();
  scene.clearColor = new Color3(0.8, 0.8, 0.8);

  scene.onPointerObservable.add((pointerInfo) => {
    switch (pointerInfo.type) {
      case PointerEventTypes.POINTERDOWN:
        onClickRightDialogue("");
        break;
    }
  });

  camera.attachControl(canvas, true);

  var light = new HemisphericLight("light", new Vector3(1, -1, -2), scene);
  light.intensity = 1;

  const box = new MeshBuilder.CreateBox("box", {
    height: 1,
    width: 1,
    depth: 0.25,
  });

  // add image
  const materialImg = new StandardMaterial("materialImg", scene);
  materialImg.diffuseTexture = new Texture(img, scene);

  box.material = materialImg;
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
      onRender={onRender}
      id="my-canvas"
    />
  );
};
