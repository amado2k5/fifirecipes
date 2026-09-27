

export interface Provider {
  name: string;
  urlTemplate: string; // use {ingredients} or {dish} placeholder
  supportedCities?: string[]; // optional filter
  supportedCountries?: string[]; // optional country filter (ISO country codes)
  countryUrls?: Record<string, string>; // country-specific URL templates
}

/** Comprehensive international grocery providers */
export const GROCERY_PROVIDERS: Provider[] = [
  // North America
  {
    name: 'Walmart',
    urlTemplate: 'https://www.walmart.com/search/?query={ingredients}',
    supportedCountries: ['US', 'CA'],
    countryUrls: {
      US: 'https://www.walmart.com/search/?query={ingredients}',
      CA: 'https://www.walmart.ca/search?query={ingredients}',
    },
  },
  {
    name: 'Kroger',
    urlTemplate: 'https://www.kroger.com/search?q={ingredients}',
    supportedCountries: ['US'],
  },
  {
    name: 'Target',
    urlTemplate: 'https://www.target.com/s?searchTerm={ingredients}',
    supportedCountries: ['US'],
  },
  {
    name: 'Safeway',
    urlTemplate: 'https://www.safeway.com/search?q={ingredients}',
    supportedCountries: ['US'],
  },
  {
    name: 'Loblaws',
    urlTemplate: 'https://www.loblaws.ca/search?searchTerm={ingredients}',
    supportedCountries: ['CA'],
  },
  {
    name: 'Metro',
    urlTemplate: 'https://www.metro.ca/en/search?q={ingredients}',
    supportedCountries: ['CA'],
  },
  {
    name: 'Sobeys',
    urlTemplate: 'https://www.sobeys.com/en/search?q={ingredients}',
    supportedCountries: ['CA'],
  },
  
  // Europe
  {
    name: 'Tesco',
    urlTemplate: 'https://www.tesco.com/groceries/en-GB/search?query={ingredients}',
    supportedCountries: ['GB'],
  },
  {
    name: 'Sainsbury\'s',
    urlTemplate: 'https://www.sainsburys.co.uk/webapp/wcs/stores/servlet/gb/groceries/search/{ingredients}',
    supportedCountries: ['GB'],
  },
  {
    name: 'Carrefour',
    urlTemplate: 'https://www.carrefour.fr/search?q={ingredients}',
    supportedCountries: ['FR'],
  },
  {
    name: 'Auchan',
    urlTemplate: 'https://www.auchan.fr/recherche?q={ingredients}',
    supportedCountries: ['FR'],
  },
  {
    name: 'Edeka',
    urlTemplate: 'https://www.edeka.de/angebote/suche?query={ingredients}',
    supportedCountries: ['DE'],
  },
  {
    name: 'Rewe',
    urlTemplate: 'https://shop.rewe.de/search?q={ingredients}',
    supportedCountries: ['DE'],
  },
  {
    name: 'Mercadona',
    urlTemplate: 'https://www.mercadona.es/buscar?query={ingredients}',
    supportedCountries: ['ES'],
  },
  {
    name: 'El Corte Inglés',
    urlTemplate: 'https://www.elcorteingles.es/supermercado/search?q={ingredients}',
    supportedCountries: ['ES'],
  },
  {
    name: 'Coop',
    urlTemplate: 'https://www.coop.ch/de/search?q={ingredients}',
    supportedCountries: ['CH'],
  },
  {
    name: 'Migros',
    urlTemplate: 'https://www.migros.ch/en/search?q={ingredients}',
    supportedCountries: ['CH'],
  },
  {
    name: 'Conad',
    urlTemplate: 'https://www.conad.it/ricerca?q={ingredients}',
    supportedCountries: ['IT'],
  },
  {
    name: 'Esselunga',
    urlTemplate: 'https://www.esselunga.it/ricerca?q={ingredients}',
    supportedCountries: ['IT'],
  },
  {
    name: 'Albert Heijn',
    urlTemplate: 'https://www.ah.nl/producten/search?q={ingredients}',
    supportedCountries: ['NL'],
  },
  {
    name: 'Jumbo',
    urlTemplate: 'https://www.jumbo.com/zoeken?q={ingredients}',
    supportedCountries: ['NL'],
  },
  
  // Asia Pacific
  {
    name: '7-Eleven Japan',
    urlTemplate: 'https://7net.omni7.jp/search?q={ingredients}',
    supportedCountries: ['JP'],
  },
  {
    name: 'Aeon',
    urlTemplate: 'https://www.aeon.com/search?q={ingredients}',
    supportedCountries: ['JP'],
  },
  {
    name: 'Woolworths',
    urlTemplate: 'https://www.woolworths.com.au/search?q={ingredients}',
    supportedCountries: ['AU'],
  },
  {
    name: 'Coles',
    urlTemplate: 'https://www.coles.com.au/search?q={ingredients}',
    supportedCountries: ['AU'],
  },
  
  // Middle East & North Africa
  {
    name: 'Carrefour UAE',
    urlTemplate: 'https://www.carrefouruae.com/afuae/en/search?keyword={ingredients}',
    supportedCountries: ['AE'],
  },
  {
    name: 'Carrefour KSA',
    urlTemplate: 'https://www.carrefourksa.com/afksa/en/search?keyword={ingredients}',
    supportedCountries: ['SA'],
  },
  {
    name: 'Nana',
    urlTemplate: 'https://www.nana.sa/en/search?q={ingredients}',
    supportedCountries: ['SA'],
  },
  {
    name: 'LuLu',
    urlTemplate: 'https://www.luluhypermarket.com/en-sa/search?q={ingredients}',
    supportedCountries: ['SA'],
  },
  {
    name: 'Instashop',
    urlTemplate: 'https://instashop.com/en-ae/search?q={ingredients}',
    supportedCountries: ['AE'],
  },
  {
    name: 'Kibsons',
    urlTemplate: 'https://www.kibsons.com/en-ae/search?q={ingredients}',
    supportedCountries: ['AE'],
  },
  {
    name: 'Breadfast',
    urlTemplate: 'https://breadfast.com/en/search?q={ingredients}',
    supportedCountries: ['EG'],
  },
  {
    name: 'Rabbit',
    urlTemplate: 'https://www.rabbitmart.com/en/search?q={ingredients}',
    supportedCountries: ['EG'],
  },
  
  // Latin America
  {
    name: 'Mercado Libre',
    urlTemplate: 'https://listado.mercadolibre.com.mx/search?q={ingredients}',
    supportedCountries: ['MX'],
  },
  {
    name: 'Amazon Mexico',
    urlTemplate: 'https://www.amazon.com.mx/s?k={ingredients}',
    supportedCountries: ['MX'],
  },
  {
    name: 'Walmart Mexico',
    urlTemplate: 'https://www.walmart.com.mx/search?query={ingredients}',
    supportedCountries: ['MX'],
  },
  {
    name: 'Éxito',
    urlTemplate: 'https://www.exito.com/search?q={ingredients}',
    supportedCountries: ['CO'],
  },
  {
    name: 'Mercado Livre',
    urlTemplate: 'https://lista.mercadolivre.com.br/search?q={ingredients}',
    supportedCountries: ['BR'],
  },
];

/** Comprehensive international food delivery providers */
export const DELIVERY_PROVIDERS: Provider[] = [
  // North America
  {
    name: 'Uber Eats',
    urlTemplate: 'https://www.ubereats.com/search/{dish}',
    supportedCountries: ['US', 'CA', 'GB', 'FR', 'ES', 'DE', 'IT', 'AU', 'JP', 'BR', 'MX'],
    countryUrls: {
      US: 'https://www.ubereats.com/search/{dish}',
      CA: 'https://www.ubereats.com/ca/search/{dish}',
      GB: 'https://www.ubereats.com/gb/search/{dish}',
      FR: 'https://www.ubereats.com/fr/search/{dish}',
      ES: 'https://www.ubereats.com/es/search/{dish}',
      DE: 'https://www.ubereats.com/de/search/{dish}',
      IT: 'https://www.ubereats.com/it/search/{dish}',
      AU: 'https://www.ubereats.com/au/search/{dish}',
      JP: 'https://www.ubereats.com/jp/search/{dish}',
      BR: 'https://www.ubereats.com/br/search/{dish}',
      MX: 'https://www.ubereats.com/mx/search/{dish}',
    },
  },
  {
    name: 'DoorDash',
    urlTemplate: 'https://www.doordash.com/search/{dish}',
    supportedCountries: ['US', 'CA'],
  },
  {
    name: 'Grubhub',
    urlTemplate: 'https://www.grubhub.com/search?searchTerm={dish}',
    supportedCountries: ['US'],
  },
  {
    name: 'Postmates',
    urlTemplate: 'https://postmates.com/merchant/search?q={dish}',
    supportedCountries: ['US'],
  },
  {
    name: 'SkipTheDishes',
    urlTemplate: 'https://www.skipthedishes.com/search?q={dish}',
    supportedCountries: ['CA'],
  },
  
  // Europe
  {
    name: 'Deliveroo',
    urlTemplate: 'https://www.deliveroo.co.uk/search?q={dish}',
    supportedCountries: ['GB', 'FR', 'DE', 'IT', 'ES', 'IE', 'NL', 'BE', 'AE', 'HK', 'SG'],
    countryUrls: {
      GB: 'https://www.deliveroo.co.uk/search?q={dish}',
      FR: 'https://deliveroo.fr/search?q={dish}',
      DE: 'https://deliveroo.de/search?q={dish}',
      IT: 'https://deliveroo.it/search?q={dish}',
      ES: 'https://deliveroo.es/search?q={dish}',
      IE: 'https://deliveroo.ie/search?q={dish}',
      NL: 'https://deliveroo.nl/search?q={dish}',
      BE: 'https://deliveroo.be/search?q={dish}',
      AE: 'https://deliveroo.ae/search?q={dish}',
      HK: 'https://deliveroo.hk/search?q={dish}',
      SG: 'https://deliveroo.sg/search?q={dish}',
    },
  },
  {
    name: 'Just Eat',
    urlTemplate: 'https://www.just-eat.co.uk/search?q={dish}',
    supportedCountries: ['GB'],
  },
  {
    name: 'Just Eat Canada',
    urlTemplate: 'https://www.just-eat.ca/search?q={dish}',
    supportedCountries: ['CA'],
  },
  {
    name: 'Lieferando',
    urlTemplate: 'https://www.lieferando.de/search?q={dish}',
    supportedCountries: ['DE'],
  },
  {
    name: 'Wolt',
    urlTemplate: 'https://wolt.com/en/search?q={dish}',
    supportedCountries: ['FI', 'EE', 'LV', 'LT', 'PL', 'CZ', 'HU', 'RO', 'BG', 'GR', 'IL', 'AE', 'JP'],
  },
  {
    name: 'Glovo',
    urlTemplate: 'https://glovoapp.com/es/en/search?q={dish}',
    supportedCountries: ['ES', 'IT', 'PT', 'PL', 'RO', 'UA', 'GE', 'KG', 'KZ', 'MA'],
  },
  {
    name: 'Rappi',
    urlTemplate: 'https://www.rappi.com/search?q={dish}',
    supportedCountries: ['MX', 'CO', 'AR', 'PE', 'CL', 'UY', 'EC', 'CR'],
  },
  
  // Middle East & North Africa
  {
    name: 'Talabat',
    urlTemplate: 'https://www.talabat.com/uae/search?q={dish}',
    supportedCountries: ['AE', 'SA', 'EG', 'KW', 'BH', 'QA', 'JO', 'IQ', 'OM'],
    countryUrls: {
      AE: 'https://www.talabat.com/uae/search?q={dish}',
      SA: 'https://www.talabat.com/ksa/search?q={dish}',
      EG: 'https://www.talabat.com/egypt/search?q={dish}',
    },
  },
  {
    name: 'Elmenus',
    urlTemplate: 'https://www.elmenus.com/search?q={dish}',
    supportedCountries: ['EG'],
  },
  {
    name: 'HungerStation',
    urlTemplate: 'https://hungerstation.com/en-sa/search?q={dish}',
    supportedCountries: ['SA'],
  },
  {
    name: 'Jahez',
    urlTemplate: 'https://www.jahez.sa/en/search?q={dish}',
    supportedCountries: ['SA'],
  },
  {
    name: 'Careem',
    urlTemplate: 'https://www.careem.com/en-ae/search?q={dish}',
    supportedCountries: ['AE', 'SA', 'EG'],
    countryUrls: {
      AE: 'https://www.careem.com/en-ae/search?q={dish}',
      SA: 'https://www.careem.com/en-sa/search?q={dish}',
      EG: 'https://www.careem.com/en-eg/search?q={dish}',
    },
  },
  
  // Asia
  {
    name: 'Foodpanda',
    urlTemplate: 'https://www.foodpanda.com/search?q={dish}',
    supportedCountries: ['HK', 'SG', 'MY', 'TH', 'PH', 'TW', 'BD', 'PK'],
  },
  {
    name: 'GrabFood',
    urlTemplate: 'https://food.grab.com/search?q={dish}',
    supportedCountries: ['SG', 'MY', 'TH', 'PH', 'ID', 'VN'],
  },
  {
    name: 'GoFood',
    urlTemplate: 'https://gofood.co.id/search?q={dish}',
    supportedCountries: ['ID'],
  },
  
  // Oceania
  {
    name: 'Deliveroo Australia',
    urlTemplate: 'https://www.deliveroo.com.au/search?q={dish}',
    supportedCountries: ['AU'],
  },
  {
    name: 'Menulog',
    urlTemplate: 'https://www.menulog.com.au/search?q={dish}',
    supportedCountries: ['AU'],
  },
  
  // Latin America
  {
    name: 'iFood',
    urlTemplate: 'https://www.ifood.com.br/busca?q={dish}',
    supportedCountries: ['BR'],
  },
  {
    name: 'Mercado Libre Food',
    urlTemplate: 'https://www.mercadolibre.com.mx/search?q={dish}',
    supportedCountries: ['MX'],
  },
];

/** Resolve user's city and country via a public IP lookup (no key required) */
export async function getUserCity(): Promise<{ city: string | null; country: string | null }> {
  try {
    const resp = await fetch('https://ipinfo.io/json');
    if (!resp.ok) return { city: null, country: null };
    const data = await resp.json();
    return { city: data.city ?? null, country: data.country ?? null };
  } catch {
    return { city: null, country: null };
  }
}

/** Filter providers based on city and country (if providers declare supportedCities or supportedCountries) */
export function filterProvidersByCity(providers: Provider[], city: string | null, country: string | null): Provider[] {
  return providers.filter(p => {
    // Filter by city if specified
    if (city && p.supportedCities && !p.supportedCities.includes(city)) {
      return false;
    }
    // Filter by country if specified
    if (country && p.supportedCountries && !p.supportedCountries.includes(country)) {
      return false;
    }
    return true;
  });
}

/** Get the appropriate URL template for a provider based on country */
export function getProviderUrl(provider: Provider, placeholder: string, replaceKey: string, country: string | null): string {
  // If we have a country-specific URL, use it
  if (country && provider.countryUrls && provider.countryUrls[country]) {
    return provider.countryUrls[country].replace(`{${replaceKey}}`, encodeURIComponent(placeholder));
  }
  
  // Otherwise, use the default template
  return provider.urlTemplate.replace(`{${replaceKey}}`, encodeURIComponent(placeholder));
}
