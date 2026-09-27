export interface GeoLocation {
  latitude: number;
  longitude: number;
  city?: string;
}

/**
 * Attempts to get the user's location via the browser Geolocation API.
 * Returns null if the user denies permission or the API is unavailable.
 */
export function requestGeoLocation(): Promise<GeoLocation | null> {
  return new Promise(resolve => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => {
        resolve({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      () => resolve(null),
      { timeout: 10000 }
    );
  });
}

/**
 * Reverse‑geocode latitude/longitude to get location info using the public Nominatim API.
 * No API key required; we limit to a single request.
 */
export async function reverseGeocode(lat: number, lon: number): Promise<LocationInfo | null> {
  try {
    const resp = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,
      {
        headers: {
          'User-Agent': 'FifiRecipes-App/1.0 (cooking-recipe-app)',
          'Accept': 'application/json'
        }
      }
    );
    if (!resp.ok) return null;
    const data = await resp.json();
    return {
      city: data.address?.city || data.address?.town || data.address?.village || null,
      country: data.address?.country_code?.toUpperCase() || null
    };
  } catch {
    return null;
  }
}

export interface LocationInfo {
  city: string | null;
  country: string | null;
}

/**
 * High‑level helper that obtains the city either from geolocation + reverse‑geocode
 * or from a manually entered address (via forward geocoding).
 */
export async function getUserCityFromLocationOrAddress(
  address?: string
): Promise<LocationInfo | null> {
  if (address) {
    // Forward‑geocode address to a city using Nominatim
    try {
      const resp = await fetch(
        `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(
          address
        )}&limit=1`,
        {
          headers: {
            'User-Agent': 'FifiRecipes-App/1.0 (cooking-recipe-app)',
            'Accept': 'application/json'
          }
        }
      );
      if (!resp.ok) return null;
      const results = await resp.json();
      if (results.length === 0) return null;
      const result = results[0];
      return {
        city: result.address?.city || result.address?.town || result.address?.village || null,
        country: result.address?.country_code?.toUpperCase() || null
      };
    } catch {
      return null;
    }
  }

  // Try geolocation
  try {
    const geo = await requestGeoLocation();
    if (!geo) return null;
    return reverseGeocode(geo.latitude, geo.longitude);
  } catch {
    return null;
  }
}
