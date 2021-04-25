Project was created using  create-react-app

packages-used : 
   react-google-maps
   html2canvas
   gh-pages
   axios
   
Default login credentials:
  username: vibin
  password: 12345
  
(for testing purpose new user can be created by signing up, encryption of data has not be done since this is only a testing page)

Project flow:
  - once the user is logged in, user can drag the marker anywhere inside the map to choose a location, map view can be changed just by dragging inside the map view without the marker too.
  
  - once the location is set user can click on capture to capture the map view which will reflect on the cuboid rendered beside the map.
  
  - On clicking save after capturing the map view the image will be stored in the user account and it can be retrived by logging into different session.
  
  - Saved images are replaced with the new image if a new image is captured and saved. 
