import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Login from '../components/Login';

describe('Login Component', () => {
const dummyProps = {
    username: 'user1@gmail.com',
    password: 'user123'
};
const component = shallow(<Login {...dummyProps} />);

    it('Should contain the username class', () => {
        expect(component.find('.login-button').length).toEqual(1);
    });

});
