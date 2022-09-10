const URL = "https://api.nasa.gov/";
const KEY = "T1o7a8ETUeBHlhw5h3Rt8l1NMtnCesyRB3cuDvLV";

export async function fetchAPOD() {
  const result = await fetch(`${URL}planetary/apod?api_key=${KEY}`)
  return result;
}

export async function fetchAsteroids(startDate: string, endDate: string) {
  const result = await fetch(
    `${URL}neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${KEY}`
  );
  return result;
}

export async function fetchEPIC(lastDayDate: string) {
  const result = await fetch(
    `${URL}EPIC/api/natural/date/${lastDayDate}?api_key=T1o7a8ETUeBHlhw5h3Rt8l1NMtnCesyRB3cuDvLV`
  );
  return result;
}

export async function fetchMarsPhoto(page: string) {
  const result = await fetch(
    `${URL}mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${KEY}`
  );
  return result;
}

export async function fetchMarsPhotoLoadingMore(page: number) {
  const result = await fetch(
    `${URL}mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${String(page)}&api_key=${KEY}`
  );
  return result;
}
