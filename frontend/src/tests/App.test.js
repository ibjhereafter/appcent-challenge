import React from 'react';
import App from '../App';
import Header from '../layout/Header';
import { shallow } from 'enzyme';

let wrapped = undefined;

beforeEach(() => {
    wrapped = shallow(<App />);
});

test('contains a single instance of Header', () => {
    expect(wrapped.find(Header).length).toEqual(1);
});