(this.webpackJsonpsnaptrude=this.webpackJsonpsnaptrude||[]).push([[0],{193:function(e,t,n){},196:function(e,t,n){},198:function(e,t,n){},416:function(e,t,n){},417:function(e,t,n){},418:function(e,t,n){},419:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),r=n(83),o=n.n(r),s=(n(193),n(21)),i=(n(194),n(25)),u=n(187),l=n(188),d=n(9),p=function(e){var t=Object(a.useRef)(null),n=e.antialias,c=e.engineOptions,r=e.adaptToDeviceRatio,o=e.sceneOptions,s=e.onRender,p=e.onSceneReady,g=Object(l.a)(e,["antialias","engineOptions","adaptToDeviceRatio","sceneOptions","onRender","onSceneReady"]);return Object(a.useEffect)((function(){if(t.current){var a=new i.c(t.current,n,c,r),u=new i.g(a,o);u.isReady()?p(u,e.captureMap,e.onClickRightDialogue,e.setSuggestion,e.setText):u.onReadyObservable.addOnce((function(t){return p(t,e.captureMap,e.onClickRightDialogue,e.setSuggestion,e.setText)})),a.runRenderLoop((function(){"function"===typeof s&&s(u),u.render()}));var l=function(){u.getEngine().resize()};return window&&window.addEventListener("resize",l),function(){u.getEngine().dispose(),window&&window.removeEventListener("resize",l)}}}),[t,e.captureMap]),Object(d.jsx)("canvas",Object(u.a)({ref:t},g))},g=n.p+"static/media/venueManager.9d5088c3.png",j=(n(196),n(61)),b=function(e,t,n,a,c){var r=new i.a("camera1",-Math.PI/2,Math.PI/2,4,new i.j.Zero(1,1,0),e),o=e.getEngine().getRenderingCanvas();e.clearColor=new i.b(.8,.8,.8);var s=new i.e.CreateBox("box",{height:1,width:1,depth:.25});e.onPointerObservable.add((function(e){switch(e.type){case i.f.POINTERDOWN:n("");break;case i.f.POINTERDOUBLETAP:u(e)}})),r.attachControl(o,!0),new i.d("light",new i.j(1,-1,-2),e).intensity=1;var u=function(e){var t=new j.AdvancedDynamicTexture.CreateForMesh(s);console.log(e);var n=new j.InputText;n.width="400px",n.height="100px",n.color="white",n.background="grey",n.fontSize="80px",n.top="".concat(45,"%"),n.left="".concat(40,"%"),n.onTextChangedObservable.add((function(){n.text.length>0?(c(n.text),a({show:!0,top:"50vh",left:"50vw"})):(c(""),a({show:!1}))})),console.log(n),t.addControl(n),n.linkWithMesh(s)},l=new i.h("materialImg",e);l.diffuseTexture=new i.i(t,e),s.clone("innerBox").material=l},f=function(e){},h=function(e){return Object(a.useEffect)((function(){!function(e){e.setNoOfBoxes(8)}(e)}),[]),Object(d.jsx)(p,{antialias:!0,onSceneReady:b,setCaptureMap:e.setCaptureMap,captureMap:e.captureMap,onClickRightDialogue:e.onClickRightDialogue,setText:e.setText,onRender:f,setSuggestion:e.setSuggestion,id:"my-canvas"})},O=(n(198),n(179)),m=n.n(O).a.create({baseURL:"https://google-map-img-be.herokuapp.com/"}),x=function(e){return m.get("/v1/getUser?username=".concat(e.username,"&&password=").concat(e.password)).then((function(e){return console.log("product list api",e),e})).catch((function(e){return console.error("create product error",e)}))},v=function(e,t){return m.post("/v1/editPhotos?username=".concat(e),t).then((function(e){return console.log("on edit click api",e),e})).catch((function(e){return console.error("create product error",e),e}))},w=n(180),k=n(181),S=n(186),C=n(185),M=n(182),R=n.n(M),y=n(62),_=(n(416),function(e){Object(S.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={marker_lat:13.0827,marker_lng:80.2376,img:""},e.onMarkerDragEnd=function(t){var n=t.latLng.lat(),a=t.latLng.lng();e.setState({marker_lat:n,marker_lng:a})},e.captureMapOnClick=function(){R()(document.querySelector("#map-container"),{logging:!0,letterRendering:1,allowTaint:!1,useCORS:!0}).then((function(t){e.props.setCaptureMap(t.toDataURL("image/webp"))}))},e.saveImage=function(t){var n=e.props.loggedInUser.username,a={text:"edit",img:e.props.captureMap};console.log("saveimage clicked"),v(n,a).then((function(t){return e.setState({img:t.data.res.img},(function(){return e.props.setImageUpdated(!e.props.imageUpdated)}))}))},e}return Object(k.a)(n,[{key:"render",value:function(){var e=this,t=Object(y.withScriptjs)(Object(y.withGoogleMap)((function(t){return Object(d.jsx)(y.GoogleMap,{defaultZoom:8,defaultCenter:{lat:e.state.marker_lat,lng:e.state.marker_lng},children:Object(d.jsx)(y.Marker,{draggable:!0,onDragEnd:e.onMarkerDragEnd,position:{lat:e.state.marker_lat,lng:e.state.marker_lng}})})})));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{id:"map-container",children:Object(d.jsx)(t,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAMG_RDX0SnmkWUy7vBSMURe7n15q0q6aA&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(d.jsx)("div",{style:{height:"100%",width:"100%"}}),containerElement:Object(d.jsx)("div",{style:{height:"300px",minWidth:"400px",borderRadius:"8px"}}),mapElement:Object(d.jsx)("div",{style:{height:"100%",width:"100%",borderRadius:"8px"}})})}),Object(d.jsxs)("div",{className:"map_buttons",children:[Object(d.jsx)("button",{className:"capture_button",onClick:function(){return e.captureMapOnClick()},children:"Capture"}),Object(d.jsx)("button",{className:"save_button",onClick:function(){return e.saveImage()},children:"Save Image"})]})]})}}]),n}(a.Component)),E=(n(417),n(418),function(){return Object(d.jsxs)("nav",{children:[Object(d.jsx)("span",{className:"logo",children:"snaptrude"}),Object(d.jsx)("button",{onClick:function(){window.location.reload()},children:"Sign Out"})]})}),N=(n(116),function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),o=Object(s.a)(r,2),i=o[0],u=(o[1],Object(a.useState)()),l=Object(s.a)(u,2),p=l[0],j=l[1],b=Object(a.useState)({}),f=Object(s.a)(b,2),O=f[0],m=(f[1],Object(a.useState)(!0)),v=Object(s.a)(m,2),w=v[0],k=v[1],S=Object(a.useState)(g),C=Object(s.a)(S,2),M=C[0],R=C[1],y=Object(a.useState)(0),N=Object(s.a)(y,2),D=N[0],T=N[1],I=Object(a.useState)(""),U=Object(s.a)(I,2),L=U[0],B=U[1],F=Object(a.useState)({show:!1,top:0,left:0}),P=Object(s.a)(F,2),A=P[0],z=P[1],W=Object(a.useState)(""),q=Object(s.a)(W,2),G=q[0],J=q[1],Z=Object(a.useRef)(null),X=["searching","text","copy","paste","image","pixel","working"],H=function(e){console.log(Z),null===Z.current||Z.current.contains(e.target)||(J(""),B(""))};Object(a.useEffect)((function(){return document.addEventListener("mousedown",H),function(){return document.removeEventListener("mousedown",H)}})),Object(a.useEffect)((function(){console.log("suggestion",A)}),[A]),Object(a.useEffect)((function(){console.log("number of boxes",D)}),[D]),Object(a.useEffect)((function(){if(!i){var e={username:O.username,password:O.password};x(e).then((function(e){console.log("user data",e),c(e.data.result.username),j(e.data.result.img)}))}}),[w,i]);var K=function(e){J(e)},Q=X.filter((function(e){return e.includes(L)}));return Object(d.jsx)("div",{className:"app",children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(E,{}),Object(d.jsx)("div",{className:"base_wrapper",children:Object(d.jsxs)("div",{className:"scene",children:[Object(d.jsxs)("div",{className:"right_controls",children:[Object(d.jsx)("span",{style:{border:"map"===G?"1px solid black":"1px solid transparent"},onClick:function(){return K("map")},children:"Map"}),Object(d.jsx)("span",{style:{border:"account"===G?"1px solid black":"1px solid transparent"},onClick:function(){return K("account")},children:"Acc."})]}),"map"===G&&Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"map_dialogue_box",ref:Z,children:Object(d.jsx)("div",{children:Object(d.jsx)(_,{loggedInUser:O,setCaptureMap:R,captureMap:M,setImageUpdated:k,imageUpdated:w})})})}),"account"===G&&Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"map_dialogue_box",ref:Z,children:Object(d.jsxs)("div",{className:"details_container",children:[Object(d.jsxs)("span",{children:["User: ",Object(d.jsx)("span",{children:n})," "]}),Object(d.jsxs)("span",{className:"details_contianer_img",children:[" ","Saved image:"," ",Object(d.jsx)("img",{src:p,alt:"user_map_image",style:{width:"100px",height:"100px"}})]}),Object(d.jsxs)("span",{children:["No of boxes : ",D]})]})})}),Object(d.jsxs)("div",{className:"scene_wrapper",children:[A.show&&Q.length>0&&Object(d.jsx)("span",{style:{display:"flex",flexDirection:"column",position:"absolute",top:A.top,left:A.left,background:"#ffffff",width:"fit-content",padding:"10px",height:100,overflow:"scroll"},children:Q.map((function(e){return Object(d.jsx)("span",{children:e})}))}),Object(d.jsx)(h,{captureMap:M,words:X,setSuggestion:z,setCaptureMap:R,setNoOfBoxes:T,setText:B,noOfBoxes:D,onClickRightDialogue:K})]})]})})]})})}),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,420)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),D()}},[[419,1,2]]]);
//# sourceMappingURL=main.bb85eaf1.chunk.js.map