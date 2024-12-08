const getBaseUrl = () => {
    // If running on the client side
    if (typeof window !== 'undefined') {
        // Use the hostname from the current URL (localhost or IP)
        return `http://${window.location.hostname}:8000/api`;
    }
    // Fallback for server-side
    return 'http://localhost:8000/api';
};

export const API_BASE_URL = getBaseUrl();

export const endpoints = {
    posts: `${API_BASE_URL}/posts/`,
    authors: `${API_BASE_URL}/authors/`,
};