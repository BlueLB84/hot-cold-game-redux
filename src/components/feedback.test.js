import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
	it('Renders without crashing', () => {
		shallow(<Feedback />);
	});

	it('Renders feedback', () => {
        const feedback = 'Foo';
        const guessCount = 1;
        const wrapper = shallow(<Feedback feedback={feedback} guessCount={guessCount}/>);
        expect(wrapper.text()).toEqual(`${feedback} Guess again!`);
    });
});