// services/commentService.js
import axios from 'axios';
const url = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${url}/api`;

export const CommentService = {
    fetchComments(postId) {
        return axios.get(`http://127.0.0.1:80/posts/${postId}/comments`, { withCredentials: true });
    },
    submitComment(commentData) {
        return axios.post(`http://127.0.0.1:80/comments`, commentData, { withCredentials: true });
    }
};
