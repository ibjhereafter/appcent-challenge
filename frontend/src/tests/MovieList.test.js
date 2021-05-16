import React from "react";
import { mount } from "enzyme";
import MovieList from "../screens/MovieList";
import Loader from "../utilities/Loader";
import ReduxConfiguration from "../store/ReduxConfiguration";
import Jumbotron from "../utilities/Jumbotron";


let wrapped;

beforeEach(() => {
    wrapped = mount(
        <ReduxConfiguration>
            <MovieList />
        </ReduxConfiguration>
    );
});

afterEach(() => {
    wrapped.unmount();
});



describe('test the number of nodes and their content', () => {
    test('contains exactly nine div nodes', () => {
        expect(wrapped.find('div').length).toEqual(9);
    });

    test('contains exactly a single h1 node', () => {
        expect(wrapped.find('h1').length).toEqual(1);
    });

    test('render the text "POPULAR MOVIES"', () => {
        expect(wrapped.render().text()).toContain('POPULAR MOVIES');
    })
});

describe('test the number of instances per component', () => {
    test('contains exactly a single instance of the Jumbotron component', () => {
        expect(wrapped.find(Jumbotron).length).toEqual(1);
    });

    test('contains exactly a single instance of the Loader component', () => {
        expect(wrapped.find(Loader).length).toEqual(1);
    });

});