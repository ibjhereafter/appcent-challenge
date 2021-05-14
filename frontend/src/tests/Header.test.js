import React from "react";
import Header from '../layout/Header';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';

let wrapped = undefined;

beforeEach(() => {
    wrapped = shallow(<Header />);
});

test('contains exactly three instances of Link Component from react-router-dom', () => {
    expect(wrapped.find(Link).length).toEqual(3);
});