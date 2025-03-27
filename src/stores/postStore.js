import axios from 'axios'
import {create} from 'zustand'

const usePostStore = create( (set, get) => ({
	posts : [],
	currentPost : null,
	loading: false,
	createPost : async (body, token, user) => {
		const rs = await axios.post('https://facebook-api-55vk.onrender.com/post', body , {
			headers : { Authorization : `Bearer ${token}`}
		})	
		set(state => ({
			posts : [ {...rs.data, user, likes: [], comments: []}, ...state.posts]
		}))
	},
	getAllPosts : async (token) => {
		set({loading: true})
		const rs = await  axios.get('https://facebook-api-55vk.onrender.com/post', {
			headers : { Authorization : `Bearer ${token}`}
		})
		set({ posts: rs.data.posts , loading: false})
	},
	deletePost : async ( token, id) => {
		const rs = await axios.delete(`https://facebook-api-55vk.onrender.com/post/${id}`, {
			headers : { Authorization : `Bearer ${token}`}
		})
		set(state => ({
			posts: state.posts.filter(el => el.id !== id)
		}))
	},
	setCurrentPost : (post) => {
		set({currentPost : post})
	},
	updatePost : async (body, token, id) => {
		const rs = await axios.put(`https://facebook-api-55vk.onrender.com/post/${id}`, body, {
			headers : { Authorization : `Bearer ${token}`}	
		})
	},
	createComment : async (body, token) => {
		const rs = await axios.post('https://facebook-api-55vk.onrender.com/comment' ,body, {
			headers : { Authorization : `Bearer ${token}`}	
		})	
	},
	createLike : async (token, body) => {
		const rs = await axios.post('https://facebook-api-55vk.onrender.com/like', body, {
			headers : { Authorization : `Bearer ${token}`}	
		})
	},
	unLike : async  (token, id) => {
		const rs = await axios.delete(`https://facebook-api-55vk.onrender.com/like/${id}`, {
			headers : { Authorization : `Bearer ${token}`}	
		})
	},
}))

export default usePostStore