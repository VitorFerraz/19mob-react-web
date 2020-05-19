import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../index';

test('snapshot', () => {
    const element = renderer.create(<Header />);
    expect(element.toJSON()).toMatchSnapshot();
});