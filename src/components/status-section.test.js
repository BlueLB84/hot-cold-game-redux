import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
	const guesses = [2,3,4,5];
	it('Renders without crashing', () => {
		shallow(<StatusSection auralStatus="foo" guesses={guesses} />);
	});

});
