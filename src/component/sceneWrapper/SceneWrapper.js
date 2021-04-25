import React from "react";
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
} from "@babylonjs/core";
import SceneComponent from "../scene";
import venueManager from "../venueManager.png";
import "./SceneWrapper.css";

let box;

const onSceneReady = (scene, img) => {
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

export default (props) => (
  <div>
    <SceneComponent
      antialias
      onSceneReady={onSceneReady}
      captureMap={props.captureMap}
      onRender={onRender}
      id="my-canvas"
    />
  </div>
);
