import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
	const guessesSeed = [2,3,4,5];

	it('Renders without crashing', () => {
		shallow(<GuessList guesses={guessesSeed} />);
	});

	it('Renders a list of guesses the same length as given', () => {
		const wrapper = shallow(<GuessList guesses={guessesSeed} />);
		wrapper.update();
		expect(wrapper.find('li').length).toEqual(guessesSeed.length);
	});

});