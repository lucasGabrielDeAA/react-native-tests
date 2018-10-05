import React from 'react';
import { shallow } from 'enzyme';

import { Text } from 'react-native';

import List from '../../src/components/List';

const posts = [
    { id: 1, title: '1st post', description: 'The first post' },
    { id: 2, title: '2nd post', description: 'The second post' },
    { id: 1, title: '3rd post', description: 'The third post' },
];

describe('Testing list\'s component', () => {
    it('Rendered as expected', () => {
        const wrapper = shallow(<List posts={posts} />);

        expect(wrapper.children()).toHaveLength(3);
    });

    it('Display empty\'s array message', () => {
        const wrapper = shallow(<List posts={[]} />);

        expect(wrapper.contains(<Text>No posts found</Text>)).toBe(true);

        wrapper.setProps({ posts });
        expect(wrapper.contains(<Text>No posts found</Text>)).toBe(false);
    });
    //it('Display empty message if there are no posts ')
});
