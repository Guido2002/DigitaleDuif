/**
 * Helper function to resolve public asset paths correctly for both
 * development and production (GitHub Pages) environments.
 * 
 * In development: /media/file.jpg -> /media/file.jpg
 * In production: /media/file.jpg -> /DigitaleDuif/media/file.jpg
 * 
 * This follows the React best practice of using PUBLIC_URL (Vite's BASE_URL)
 * for assets in the public folder.
 */
export function getAssetPath(path: string): string {
  // If path is already absolute (http/https), return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use Vite's BASE_URL which is '/' in dev and '/DigitaleDuif/' in production
  const baseUrl = import.meta.env.BASE_URL;
  
  // Combine base URL with clean path, ensuring no double slashes
  return `${baseUrl}${cleanPath}`;
}
