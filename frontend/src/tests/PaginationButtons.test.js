import React from "react";
import { mount } from 'enzyme';

import PaginationButtons from "../utilities/PaginationButtons";
import ReduxConfiguration from "../store/ReduxConfiguration";

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <ReduxConfiguration>
            <PaginationButtons />
        </ReduxConfiguration>
    );
});

afterEach(() => {
    wrapped.unmount();
});

describe('number of nodes', () => {
    test('contains exactly a single button and a single div', () => {
        expect(wrapped.find('button').length).toEqual(1);
        expect(wrapped.find('div').length).toEqual(1);
    });
})