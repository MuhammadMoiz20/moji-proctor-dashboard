// API Configuration
// In production (Vercel), VITE_API_URL should point to your deployed server
// In development, use the Vite proxy (empty string uses relative paths)
export const API_BASE_URL = import.meta.env.VITE_API_URL || ''

// Helper to construct full API URLs
export function apiUrl(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return API_BASE_URL ? `${API_BASE_URL}/${cleanPath}` : `/${cleanPath}`
}
