export interface IEPIC {
    caption: string | undefined;
    centroid_coordinates: {
      lat: number;
      lon: number;
    };
    date: string | undefined;
    image: string | undefined;
  }