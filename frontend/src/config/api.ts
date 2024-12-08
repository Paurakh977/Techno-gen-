export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.0.101:8000/api';

export const endpoints = {
    posts: `${API_BASE_URL}/posts/`,
    authors: `${API_BASE_URL}/authors/`,
}; 