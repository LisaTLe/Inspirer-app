import { throttle } from "lodash";


const json = throttle(async (endpoint) => {
  
  const apiUrl = `https://api.artic.edu/api/v1${endpoint}`;

  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error(`error loading ${endpoint} (${res.status})`);
  }
  return res.json();
}, 200);


export const search = async (query, ...fields) => {
  let endpoint = `/artworks/search?q=${query}&limit=25`;
  if (fields.length) {
    endpoint += "&fields=" + fields.join(",");
  }
  return json(endpoint);
};


export const artworkImageUrl = (id, width = 843) =>
  `https://www.artic.edu/iiif/2/${id}/full/${width},/0/default.jpg`;







