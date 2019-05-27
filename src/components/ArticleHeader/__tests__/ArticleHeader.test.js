import React from 'react';
import { ArticleHeader } from '../../ArticleHeader';
import renderer from 'react-test-renderer';

/* Test for Header component */

it('should render the header  correctly', () => {
    const wrapper = renderer.create(<ArticleHeader/>).toJSON();
    expect(wrapper).toMatchSnapshot();
})