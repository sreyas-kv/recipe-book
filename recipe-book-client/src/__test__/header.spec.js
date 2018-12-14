import React from 'react';
import {shallow} from 'enzyme';

import Header from '../components/Header.js';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header/>);
    });

    it('Renders the text', () => {
        const text = "ricetta";
        const wrapper = shallow(<Header text={text} />);
        expect(wrapper.text()).toEqual(text);
    });
});

