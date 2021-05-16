import React from "react";
import Footer from "../layout/Footer";
import { shallow } from 'enzyme';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<Footer />);
});

describe('text number of nodes', () => {

    test('Footer component has three div nodes', () => {
        expect(wrapped.find('div').length).toEqual(3);
    });

    test('Footer component has a single footer node element', () => {
        expect(wrapped.find('footer').length).toEqual(1);
    });
});
