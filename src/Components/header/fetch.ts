

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

export async function fetchAsteroids(startDate:string, endDate:string,) {
  const result = await fetch(
    `${URL}neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${KEY}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
  return result;
}

export async function fetchEPIC(lastDayDate:string) {
  const result = await fetch(
    `https://api.nasa.gov/EPIC/api/natural/date/${lastDayDate}?api_key=T1o7a8ETUeBHlhw5h3Rt8l1NMtnCesyRB3cuDvLV`
  ).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
  return result;
}

