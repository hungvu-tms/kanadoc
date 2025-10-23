/**
 * Validates if a given string is a valid HTTP or HTTPS URL
 * @param url - The URL string to validate
 * @returns boolean - True if the URL is valid and uses HTTP/HTTPS protocol, false otherwise
 */
export function isValidHttpUrl(url?: string) {
  if (!url) return false;

  try {
    const newUrl = new URL(url);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch (err) {
    return false;
  }
}
