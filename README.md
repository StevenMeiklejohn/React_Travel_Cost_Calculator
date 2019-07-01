Application to calculate travel cost incurred by members of staff by entering an origin and destination postcode.
Route is also displayed on map.

to rub:

cd into project directory.
npm install.

You will need a google maps API key to run this application. You can obtain one from here;
https://developers.google.com/maps/documentation/javascript/get-api-key

Once you have a key open public/index.html and insert it into the following line;
```
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOU_API_KEY&callback=initMap"
  type="text/javascript"></script>
```

Finally,

npm start
