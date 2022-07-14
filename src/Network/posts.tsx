import axios from 'axios'
import {DOMAIN} from '../utils/constants'


const getPosts = () =>  axios.get(`${DOMAIN}/posts`);
const getUsers = () => axios.get(`${DOMAIN}/users`);
const getPostComments = (id:Number) => axios.get(`${DOMAIN}/posts/${id}/comments`);


export default {
    getPosts,
    getUsers,
    getPostComments
}