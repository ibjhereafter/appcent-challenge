import React from "react";
import Jumbotron from "../utilities/Jumbotron";
import { shallow } from 'enzyme';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<Jumbotron />);
})

describe('test the number of nodes and their content', () => {
    test('contains exactly two blockquote nodes', () => {
        expect(wrapped.find('blockquote').length).toEqual(2);
    });

    test('contains exactly two cite nodes', () => {
        expect(wrapped.find('cite').length).toEqual(2);
    });

    test('contains exactly two i nodes', () => {
        expect(wrapped.find('i').length).toEqual(2);
    })
});