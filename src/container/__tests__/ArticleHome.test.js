import React from 'react';
import { ArticleHome } from '../ArticleHome';
import renderer from 'react-test-renderer';

/* Test for Article Home component */

const navigation = {
    navigate: {}
}

/* Test for Article Home component Rendering */

it('should render the Article Home Page correctly', () => {
    const wrapper = renderer.create(<ArticleHome navigation = {navigation}/>).toJSON();
    expect(wrapper).toMatchSnapshot();
})