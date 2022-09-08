const URL = "https://api.nasa.gov/";
const KEY = "T1o7a8ETUeBHlhw5h3Rt8l1NMtnCesyRB3cuDvLV";

export async function fetchAPOD() {
  const result = await fetch(`${URL}planetary/apod?api_key=${KEY}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    }
  );
  return result;
}

export async function fetchAsteroids() {
  const result = await fetch(
    `${URL}neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${KEY}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
  return result;
}
