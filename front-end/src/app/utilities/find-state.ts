import { Injectable } from '@angular/core';
import * as geolib from 'geolib';

@Injectable({
  providedIn: 'root',
})
export class FindState {
  static getStateFromLatLng(latitude: number, longitude: number): string | null {
    const states: { [key: string]: { latitude: number; longitude: number }[] } =
      {
        Alabama: [
          { latitude: 35.0, longitude: -88.5 },
          { latitude: 35.0, longitude: -85.0 },
          { latitude: 30.2, longitude: -87.5 },
          { latitude: 31.0, longitude: -88.5 },
        ],
        Alaska: [
          { latitude: 71.5, longitude: -180.0 },
          { latitude: 71.5, longitude: -130.0 },
          { latitude: 54.0, longitude: -130.0 },
          { latitude: 54.0, longitude: -180.0 },
        ],
        Arizona: [
          { latitude: 37.0, longitude: -114.8 },
          { latitude: 37.0, longitude: -109.0 },
          { latitude: 31.3, longitude: -109.0 },
          { latitude: 31.3, longitude: -114.8 },
        ],
        Arkansas: [
          { latitude: 36.5, longitude: -94.6 },
          { latitude: 36.5, longitude: -89.5 },
          { latitude: 33.0, longitude: -89.5 },
          { latitude: 33.0, longitude: -94.6 },
        ],
        California: [
          { latitude: 42.0, longitude: -124.5 },
          { latitude: 42.0, longitude: -114.5 },
          { latitude: 32.5, longitude: -114.5 },
          { latitude: 32.5, longitude: -124.5 },
        ],
        Colorado: [
          { latitude: 41.0, longitude: -109.1 },
          { latitude: 41.0, longitude: -102.0 },
          { latitude: 36.9, longitude: -102.0 },
          { latitude: 36.9, longitude: -109.1 },
        ],
        Connecticut: [
          { latitude: 42.0, longitude: -73.7 },
          { latitude: 42.0, longitude: -71.8 },
          { latitude: 40.9, longitude: -71.8 },
          { latitude: 40.9, longitude: -73.7 },
        ],
        Delaware: [
          { latitude: 39.8, longitude: -75.8 },
          { latitude: 39.8, longitude: -74.9 },
          { latitude: 38.5, longitude: -74.9 },
          { latitude: 38.5, longitude: -75.8 },
        ],
        Florida: [
          { latitude: 31.0, longitude: -87.6 },
          { latitude: 31.0, longitude: -80.0 },
          { latitude: 24.4, longitude: -80.0 },
          { latitude: 24.4, longitude: -87.6 },
        ],
        Georgia: [
          { latitude: 35.0, longitude: -85.6 },
          { latitude: 35.0, longitude: -80.8 },
          { latitude: 30.3, longitude: -80.8 },
          { latitude: 30.3, longitude: -85.6 },
        ],
        Hawaii: [
          { latitude: 20.5, longitude: -159.8 },
          { latitude: 20.5, longitude: -154.6 },
          { latitude: 18.5, longitude: -154.6 },
          { latitude: 18.5, longitude: -159.8 },
        ],
        Idaho: [
          { latitude: 49.0, longitude: -117.2 },
          { latitude: 49.0, longitude: -111.0 },
          { latitude: 41.9, longitude: -111.0 },
          { latitude: 41.9, longitude: -117.2 },
        ],
        Illinois: [
          { latitude: 42.5, longitude: -91.5 },
          { latitude: 42.5, longitude: -87.5 },
          { latitude: 36.9, longitude: -87.5 },
          { latitude: 36.9, longitude: -91.5 },
        ],
        Indiana: [
          { latitude: 41.8, longitude: -88.0 },
          { latitude: 41.8, longitude: -84.6 },
          { latitude: 37.8, longitude: -84.6 },
          { latitude: 37.8, longitude: -88.0 },
        ],
        Iowa: [
          { latitude: 43.5, longitude: -96.6 },
          { latitude: 43.5, longitude: -90.2 },
          { latitude: 40.4, longitude: -90.2 },
          { latitude: 40.4, longitude: -96.6 },
        ],
        Kansas: [
          { latitude: 40.0, longitude: -102.1 },
          { latitude: 40.0, longitude: -94.6 },
          { latitude: 36.9, longitude: -94.6 },
          { latitude: 36.9, longitude: -102.1 },
        ],
        Kentucky: [
          { latitude: 39.1, longitude: -89.6 },
          { latitude: 39.1, longitude: -81.9 },
          { latitude: 36.5, longitude: -81.9 },
          { latitude: 36.5, longitude: -89.6 },
        ],
        Louisiana: [
          { latitude: 33.0, longitude: -94.0 },
          { latitude: 33.0, longitude: -88.8 },
          { latitude: 28.9, longitude: -88.8 },
          { latitude: 28.9, longitude: -94.0 },
        ],
        Maine: [
          { latitude: 47.5, longitude: -71.1 },
          { latitude: 47.5, longitude: -66.9 },
          { latitude: 42.9, longitude: -66.9 },
          { latitude: 42.9, longitude: -71.1 },
        ],
        Maryland: [
          { latitude: 39.7, longitude: -79.5 },
          { latitude: 39.7, longitude: -75.0 },
          { latitude: 37.9, longitude: -75.0 },
          { latitude: 37.9, longitude: -79.5 },
        ],
        Massachusetts: [
          { latitude: 42.9, longitude: -73.5 },
          { latitude: 42.9, longitude: -69.9 },
          { latitude: 41.2, longitude: -69.9 },
          { latitude: 41.2, longitude: -73.5 },
        ],
        Michigan: [
          { latitude: 48.3, longitude: -90.5 },
          { latitude: 48.3, longitude: -82.1 },
          { latitude: 41.7, longitude: -82.1 },
          { latitude: 41.7, longitude: -90.5 },
        ],
        Minnesota: [
          { latitude: 49.4, longitude: -97.2 },
          { latitude: 49.4, longitude: -89.5 },
          { latitude: 43.5, longitude: -89.5 },
          { latitude: 43.5, longitude: -97.2 },
        ],
        Mississippi: [
          { latitude: 35.0, longitude: -91.7 },
          { latitude: 35.0, longitude: -88.5 },
          { latitude: 30.1, longitude: -88.5 },
          { latitude: 30.1, longitude: -91.7 },
        ],
        Missouri: [
          { latitude: 40.6, longitude: -95.8 },
          { latitude: 40.6, longitude: -89.1 },
          { latitude: 35.9, longitude: -89.1 },
          { latitude: 35.9, longitude: -95.8 },
        ],
        Montana: [
          { latitude: 49.0, longitude: -116.0 },
          { latitude: 49.0, longitude: -104.0 },
          { latitude: 44.3, longitude: -104.0 },
          { latitude: 44.3, longitude: -116.0 },
        ],
        Nebraska: [
          { latitude: 43.0, longitude: -104.1 },
          { latitude: 43.0, longitude: -95.3 },
          { latitude: 39.9, longitude: -95.3 },
          { latitude: 39.9, longitude: -104.1 },
        ],
        Nevada: [
          { latitude: 42.0, longitude: -120.0 },
          { latitude: 42.0, longitude: -114.0 },
          { latitude: 35.0, longitude: -114.0 },
          { latitude: 35.0, longitude: -120.0 },
        ],
        New_Hampshire: [
          { latitude: 45.3, longitude: -72.6 },
          { latitude: 45.3, longitude: -70.6 },
          { latitude: 42.7, longitude: -70.6 },
          { latitude: 42.7, longitude: -72.6 },
        ],
        New_Jersey: [
          { latitude: 41.4, longitude: -75.6 },
          { latitude: 41.4, longitude: -73.9 },
          { latitude: 38.9, longitude: -73.9 },
          { latitude: 38.9, longitude: -75.6 },
        ],
        New_Mexico: [
          { latitude: 37.0, longitude: -109.1 },
          { latitude: 37.0, longitude: -103.0 },
          { latitude: 31.3, longitude: -103.0 },
          { latitude: 31.3, longitude: -109.1 },
        ],
        New_York: [
          { latitude: 45.0, longitude: -79.8 },
          { latitude: 45.0, longitude: -71.9 },
          { latitude: 40.5, longitude: -71.9 },
          { latitude: 40.5, longitude: -79.8 },
        ],
        North_Carolina: [
          { latitude: 36.6, longitude: -84.3 },
          { latitude: 36.6, longitude: -75.5 },
          { latitude: 33.8, longitude: -75.5 },
          { latitude: 33.8, longitude: -84.3 },
        ],
        North_Dakota: [
          { latitude: 49.0, longitude: -104.1 },
          { latitude: 49.0, longitude: -96.6 },
          { latitude: 45.9, longitude: -96.6 },
          { latitude: 45.9, longitude: -104.1 },
        ],
        Ohio: [
          { latitude: 42.3, longitude: -84.8 },
          { latitude: 42.3, longitude: -80.5 },
          { latitude: 38.4, longitude: -80.5 },
          { latitude: 38.4, longitude: -84.8 },
        ],
        Oklahoma: [
          { latitude: 37.0, longitude: -103.0 },
          { latitude: 37.0, longitude: -94.4 },
          { latitude: 33.6, longitude: -94.4 },
          { latitude: 33.6, longitude: -103.0 },
        ],
        Oregon: [
          { latitude: 46.2, longitude: -124.6 },
          { latitude: 46.2, longitude: -116.4 },
          { latitude: 41.9, longitude: -116.4 },
          { latitude: 41.9, longitude: -124.6 },
        ],
        Pennsylvania: [
          { latitude: 42.3, longitude: -80.5 },
          { latitude: 42.3, longitude: -74.7 },
          { latitude: 39.7, longitude: -74.7 },
          { latitude: 39.7, longitude: -80.5 },
        ],
        Rhode_Island: [
          { latitude: 42.0, longitude: -71.9 },
          { latitude: 42.0, longitude: -71.1 },
          { latitude: 41.1, longitude: -71.1 },
          { latitude: 41.1, longitude: -71.9 },
        ],
        South_Carolina: [
          { latitude: 35.0, longitude: -83.4 },
          { latitude: 35.0, longitude: -78.5 },
          { latitude: 32.0, longitude: -78.5 },
          { latitude: 32.0, longitude: -83.4 },
        ],
        South_Dakota: [
          { latitude: 45.9, longitude: -104.1 },
          { latitude: 45.9, longitude: -96.6 },
          { latitude: 42.5, longitude: -96.6 },
          { latitude: 42.5, longitude: -104.1 },
        ],
        Tennessee: [
          { latitude: 36.6, longitude: -90.3 },
          { latitude: 36.6, longitude: -81.7 },
          { latitude: 34.9, longitude: -81.7 },
          { latitude: 34.9, longitude: -90.3 },
        ],
        Texas: [
          { latitude: 36.5, longitude: -106.6 },
          { latitude: 36.5, longitude: -93.5 },
          { latitude: 25.8, longitude: -93.5 },
          { latitude: 25.8, longitude: -106.6 },
        ],
        Utah: [
          { latitude: 42.0, longitude: -114.0 },
          { latitude: 42.0, longitude: -109.0 },
          { latitude: 36.9, longitude: -109.0 },
          { latitude: 36.9, longitude: -114.0 },
        ],
        Vermont: [
          { latitude: 45.0, longitude: -73.4 },
          { latitude: 45.0, longitude: -71.4 },
          { latitude: 42.7, longitude: -71.4 },
          { latitude: 42.7, longitude: -73.4 },
        ],
        Virginia: [
          { latitude: 39.5, longitude: -83.7 },
          { latitude: 39.5, longitude: -75.2 },
          { latitude: 36.5, longitude: -75.2 },
          { latitude: 36.5, longitude: -83.7 },
        ],
        Washington: [
          { latitude: 49.0, longitude: -124.8 },
          { latitude: 49.0, longitude: -116.9 },
          { latitude: 45.5, longitude: -116.9 },
          { latitude: 45.5, longitude: -124.8 },
        ],
        West_Virginia: [
          { latitude: 40.6, longitude: -82.7 },
          { latitude: 40.6, longitude: -77.7 },
          { latitude: 37.2, longitude: -77.7 },
          { latitude: 37.2, longitude: -82.7 },
        ],
        Wisconsin: [
          { latitude: 47.3, longitude: -92.9 },
          { latitude: 47.3, longitude: -86.8 },
          { latitude: 42.5, longitude: -86.8 },
          { latitude: 42.5, longitude: -92.9 },
        ],
        Wyoming: [
          { latitude: 45.0, longitude: -111.1 },
          { latitude: 45.0, longitude: -104.1 },
          { latitude: 40.6, longitude: -104.1 },
          { latitude: 40.6, longitude: -111.1 },
        ],
      };

    let currentState: string | null = null;
    for (const [state, boundary] of Object.entries(states)) {
      if (geolib.isPointInPolygon({ latitude, longitude }, boundary)) {
        currentState = state;
        break;
      }
    }

    return currentState;
  }
}
