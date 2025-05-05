import { services, locations } from './data';

/**
 * Generates static parameters for service pages
 */
export function generateServiceParams() {
  return services.map((service) => ({
    service: service.id,
  }));
}

/**
 * Generates static parameters for service location pages
 */
export function generateServiceLocationParams() {
  const params = [];
  
  for (const service of services) {
    for (const location of locations) {
      params.push({
        service: service.id,
        location: location.id,
      });
    }
  }
  
  return params;
}

/**
 * Formats a service title with location for SEO
 */
export function formatServiceLocationTitle(serviceId: string, locationId: string) {
  const service = services.find((s) => s.id === serviceId);
  const location = locations.find((l) => l.id === locationId);
  
  if (!service || !location) {
    return '';
  }
  
  return `${service.title} i ${location.name} | Gunnarstorps Elektrifieringsfirma`;
}

/**
 * Formats a service description with location for SEO
 */
export function formatServiceLocationDescription(serviceId: string, locationId: string) {
  const service = services.find((s) => s.id === serviceId);
  const location = locations.find((l) => l.id === locationId);
  
  if (!service || !location) {
    return '';
  }
  
  return `Professionella ${service.title.toLowerCase()}-tjänster i ${location.name}. Vi erbjuder expertis, kvalitet och pålitlig service för alla dina elbehov. Kontakta oss idag för en kostnadsfri offert!`;
}

/**
 * Gets a service by ID
 */
export function getServiceById(id: string) {
  return services.find((service) => service.id === id);
}

/**
 * Gets a location by ID
 */
export function getLocationById(id: string) {
  return locations.find((location) => location.id === id);
}

/**
 * Truncates text to a specified length
 */
export function truncateText(text: string, length: number) {
  if (text.length <= length) {
    return text;
  }
  
  return text.slice(0, length) + '...';
}

/**
 * Converts a string to title case
 */
export function toTitleCase(str: string) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Generates a random ID
 */
export function generateId() {
  return Math.random().toString(36).substring(2, 9);
}
