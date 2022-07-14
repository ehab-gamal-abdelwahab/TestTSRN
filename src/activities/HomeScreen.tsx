import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Text, View, FlatList, TouchableOpacity } from 'react-native';


import postsAPI from '../Network/posts'
import postsActions from '../store/actions/postsActions';
import uiActions from '../store/actions/uiActions';
import PostsList from '../components/postsList';
import Spinner from '../components/UiComponents/spinner';



const HomeScreen :React.FC = () => {
    const {loading} = useSelector((state: any) => state.uiReducer);
    const dispatch = useDispatch();
    
    useEffect(()=> {
        async function getAllPosts() {
            dispatch(uiActions.loadStart());
            const postsList = await postsAPI.getPosts();
            const users = await postsAPI.getUsers();
            const posts = postsList.data.map((post: any) => {
                const user= users.data.find((u:any) => u.id == post.user_id);
                return {
                    id : post.id,
                    user_id : post.user_id,
                    title : post.title,
                    body : post.body,
                    user_name: user ? user.name : 'user12',
                }
            })
            console.log(posts);
            dispatch(postsActions.allPosts(posts));
            dispatch(uiActions.loadStop());
        }
        getAllPosts();
    },[])

    
    return(
    <View style={{flex:1, backgroundColor: 'white'}}>
        {
           loading ? <Spinner /> : <PostsList />
        }
    </View>
    )
}

export default HomeScreen;