import actionTypes, {GET_POSTS} from './actionTypes'

const allPosts = (posts: any) => {
    return{
        type:GET_POSTS,
        payload: posts 
    }
}

const postDetails = (post:any)=>{
    return{
        type: actionTypes.GET_POST_DETAILS,
        payload: post
    }
}

export default{
    allPosts,
    postDetails
}