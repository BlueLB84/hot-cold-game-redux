import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	});

	it('Renders guess count', () => {
        const guessCount = 2;
        const wrapper = shallow(<GuessCount guessCount={guessCount}/>);
        expect(wrapper.text()).toEqual(`You've made ${guessCount} guesses!`);
    });
});
