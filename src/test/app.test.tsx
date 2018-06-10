import { assert, expect } from 'chai';
import 'mocha';
import * as React from 'react';
import { App } from '../app';
import { mount, configure } from 'enzyme';

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('app', () => {

    it('check title', ()  => {

        const app = mount(<App />);
        expect(app.find("h1").text()).to.eql("Hello React");
    });

});


