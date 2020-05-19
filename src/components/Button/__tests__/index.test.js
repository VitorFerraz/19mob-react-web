import React from 'react';
import { render } from '@testing-library/react';

import Button from '../index';

let element = null;

describe('Button', () => {
    beforeEach(() => {
        element = render(<Button label="Test" />);
    });

    it('should be render button with label Test', () => {
        const { container } = element;
        expect(container).toMatchSnapshot();
    });

    it('should be class equal btn', () => {
        const { container } = element;
        expect(container.querySelector('button').className).toBe('btn')
    });

    it('should be label equal Text', () => {
        const { container } = element;
        expect(container.querySelector('button').innerHTML).toBe('Test')
    });
});