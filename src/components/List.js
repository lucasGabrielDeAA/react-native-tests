import React from 'react';

import { View, Text } from 'react-native';

import Post from './Post';

const List = ({ posts }) => (
    <View>
        { posts.length > 0
            ? posts.map(post => <Post key={post.id} post={post} />)
            : <Text>No posts found</Text>
        }
    </View>
);

export default List;
