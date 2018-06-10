import { assert, expect } from 'chai';
import 'mocha';
import * as React from 'react';
import { Title } from '../title';
import { mount, configure } from 'enzyme';
import { TestBed } from 'react.di';

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('title', () => {

    it('check title', ()  => {

        const testTitle = "My test title";

        const title = mount(
            <TestBed
                providers={[{provide: "IEnv", useValue: { title: testTitle }}]}
                >
                <Title />
            </TestBed>
        );

        expect(title.find("h1").text()).to.eql(testTitle);
    });

});


