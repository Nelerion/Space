export interface Iclose_approach_data {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
  }
  
  export interface Iearth_objects {
    absolute_magnitude_h: number;
    close_approach_data: Iclose_approach_data[];
    estimated_diameter: {
      feet: {
        estimated_diameter_max: number;
        estimated_diameter_min: number;
      };
      kilometers: {
        estimated_diameter_max: number;
        estimated_diameter_min: number;
      };
      meters: {
        estimated_diameter_max: number;
        estimated_diameter_min: number;
      };
      miles: {
        estimated_diameter_max: number;
        estimated_diameter_min: number;
      };
    };
    id: string;
    is_potentially_hazardous_asteroid: boolean;
    is_sentry_object: boolean;
    links: {
      self: string;
    };
    name: string;
    nasa_jpl_url: string;
    neo_reference_id: string;
  }
  
  export interface IAsteroids {
    count: number | undefined;
    links:
      | {
          next: string;
          previous: string;
          self: string;
        }
      | undefined;
    earth_objects: Iearth_objects | Iearth_objects[] | undefined;
  }


 
  