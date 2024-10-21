import axios from 'axios';
const url = import.meta.env.VITE_BACKEND_URL
const API_URL = `${url}/api`;

export const AuthService = {
    login(credentials) {
        return axios.post(`http://localhost:80/api/login`, credentials, {withCredentials:true});
    },
    fetchComments(postId) {
        return axios.get(`http://127.0.0.1:80/posts/${postId}/comments`, { withCredentials: true });
    },
    submitComment(commentData) {
        return axios.post(`http://127.0.0.1:80/comments`, commentData, { withCredentials: true });
    },
    register(userData) {
        return axios.post(`http://127.0.0.1:80/api/register`, userData); 
    },
    RegisterComp(userData) {
        return axios.post(`http://127.0.0.1:80/api/companies`, userData); 
    },
    logout() {
        return axios.post(`${API_URL}/logout`,{},{withCredentials:true} );
    },
    getUser() {
        return axios.get(`${API_URL}/user`);
    }
};

