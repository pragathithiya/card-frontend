// Direct link to your backend server
// Dynamic API URL detection for mobile/local testing
const getApiUrl = () => {
  if (typeof window === 'undefined') return "http://localhost:5000";
  const hostname = window.location.hostname;
  // If we're on localhost, use localhost:5000, otherwise use the current IP/hostname with port 5000
  return hostname === 'localhost' || hostname === '127.0.0.1' 
    ? "http://localhost:5000" 
    : `http://${hostname}:5000`;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || getApiUrl();

export const api = {
  get: async (endpoint: string) => {
    const res = await fetch(`${API_URL}${endpoint}`);
    return res;
  },
  post: async (endpoint: string, body: any) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return res;
  },
  patch: async (endpoint: string, body: any) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return res;
  },
  delete: async (endpoint: string) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "DELETE",
    });
    return res;
  },
  upload: async (endpoint: string, formData: FormData) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      body: formData,
    });
    return res;
  },
  imageUrl: (path: string) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${API_URL}${path}`;
  }
};
