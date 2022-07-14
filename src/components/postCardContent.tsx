import React from 'react';

import PostHeader from './postHeader';
import PostTitle from './UiComponents/title';
import Body from './UiComponents/body';

type Props = {
    item: any
}

const PostCardContent: React.FC<Props> = ({item}) => {
    debugger;
    return(
        <>
            <PostHeader user_name={item.user_name}/>
            <PostTitle title={item.title}/>
            <Body body={item.body}/>
        </>
    )
}

export default PostCardContent;