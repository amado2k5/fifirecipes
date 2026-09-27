// Event service – public URL based search (no API keys)
import { ActionItem } from '../components/ActionPopup';

/**
 * Build a list of public URLs that point to cooking‑related events.
 * We do not fetch the pages – we simply provide the URLs so the user can
 * explore them in a new tab. The service returns a minimal ActionItem[]
 * compatible with `ActionPopup`.
 */
export async function searchEvents(
  recipeTitle: string,
  city: string | null
): Promise<ActionItem[]> {
  const query = `${recipeTitle} cooking event`;
  const encoded = encodeURIComponent(query);
  const items: ActionItem[] = [];

  // Eventbrite – city path is optional; if we have a city we include it in the URL.
  if (city) {
    const citySlug = city.toLowerCase().replace(/\s+/g, '-');
    items.push({
      title: 'Eventbrite',
      link: `https://www.eventbrite.com/d/${citySlug}/events/?q=${encoded}`,
      source: 'Eventbrite'
    });
  } else {
    items.push({
      title: 'Eventbrite (global)',
      link: `https://www.eventbrite.com/d/local/events/?q=${encoded}`,
      source: 'Eventbrite'
    });
  }

  // Google search – always works globally; we include city if known.
  const googleQuery = city ? `${query} ${city}` : query;
  items.push({
    title: 'Google Events',
    link: `https://www.google.com/search?q=${encodeURIComponent(googleQuery)}`,
    source: 'Google'
  });

  // Additional public source – optional (e.g., Meetup)
  const meetupQuery = city ? `${query} ${city}` : query;
  items.push({
    title: 'Meetup',
    link: `https://www.meetup.com/find/?keywords=${encodeURIComponent(meetupQuery)}`,
    source: 'Meetup'
  });

  return items;
}
