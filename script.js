/**
 * @license
 * Copyright 2024 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
  const geocoder = new google.maps.Geocoder();
  const map = document.querySelector('gmp-map').innerMap;
  const infoWindow = new google.maps.InfoWindow();

  document.getElementById('submit').addEventListener('click', () => {
    geocodeLatLng(geocoder, map, infoWindow);
  });
}
