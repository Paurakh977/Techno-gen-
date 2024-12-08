export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export const endpoints = {
    posts: `${API_BASE_URL}/posts/`,
    authors: `${API_BASE_URL}/authors/`,
}; 