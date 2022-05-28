import leaflet from "leaflet";

export default leaflet.icon({
  iconUrl: require("./assets/venue_location_icon.svg").default,
  iconRetinaUrl: require("./assets/venue_location_icon.svg").default,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
