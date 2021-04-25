import React, { Component } from "react";
import html2canvas from "html2canvas";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import "./Map.css";
import { ThinMaterialHelper, TimerState } from "@babylonjs/core";
import { editPhotos } from "../../action";

export default class Map extends Component {
  state = {
    marker_lat: 13.0827,
    marker_lng: 80.2376,
    img: "",
  };

  onMarkerDragEnd = (e) => {
    let new_lat = e.latLng.lat();
    let new_lng = e.latLng.lng();
    this.setState({ marker_lat: new_lat, marker_lng: new_lng });
  };

  captureMapOnClick = () => {
    html2canvas(document.querySelector("#map-container"), {
      logging: true,
      letterRendering: 1,
      allowTaint: false,
      useCORS: true,
    }).then((canvas) => {
      this.props.setCaptureMap(canvas.toDataURL("image/webp"));
    });
  };

  saveImage = (e) => {
    let name = this.props.loggedInUser.username;
    let body = {
      text: "edit",
      img: this.props.captureMap,
    };
    console.log("saveimage clicked");
    editPhotos(name, body).then((res) =>
      this.setState({ img: res.data.res.img }, () =>
        this.props.setImageUpdated(!this.props.imageUpdated)
      )
    );
  };
  render() {
    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{
            lat: this.state.marker_lat,
            lng: this.state.marker_lng,
          }}
        >
          <Marker
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.marker_lat,
              lng: this.state.marker_lng,
            }}
          />
        </GoogleMap>
      ))
    );

    return (
      <>
        <div id="map-container">
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMG_RDX0SnmkWUy7vBSMURe7n15q0q6aA&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%`, width: "100%" }} />}
            containerElement={
              <div style={{ height: `400px`, minWidth: "400px" }} />
            }
            mapElement={<div style={{ height: `100%`, width: "100%" }} />}
          />
        </div>
        <button
          className="capture_button"
          onClick={() => this.captureMapOnClick()}
        >
          Capture
        </button>

        <button className="save_button" onClick={() => this.saveImage()}>
          Save Image
        </button>
      </>
    );
  }
}
