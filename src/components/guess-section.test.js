import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';
import Feedback from './feedback';
import GuessForm from './guess-form';

describe('<GuessSection />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessSection />);
	});

	it('Has Feedback and GuessForm elements', () => {
		const wrapper = shallow(<GuessSection />);
		wrapper.update();
		expect(wrapper.find(Feedback).length).toEqual(1);
		expect(wrapper.find(GuessForm).length).toEqual(1);
	});
});