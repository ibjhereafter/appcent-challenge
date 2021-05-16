import React from 'react';
import App from '../App';
import Header from '../layout/Header';
import Footer from "../layout/Footer";
import { shallow } from 'enzyme';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

test('contains a single instance of Header component', () => {
    expect(wrapped.find(Header).length).toEqual(1);
});

test('contains a single instance of Footer component', () => {
    expect(wrapped.find(Footer).length).toEqual(1);
});