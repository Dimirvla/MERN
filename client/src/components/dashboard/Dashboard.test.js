import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Dashboard } from './Dashboard';

configure({ adapter: new Adapter() });

describe('<Dashboard />', () => {
	it('should render div', () => {
		const wrapper = shallow(
			<Dashboard auth={{ user: 'a' }} profile={{ profile: 'a', loading: true }} getCurrentProfile={() => {}} />
		);
		expect(wrapper.find('h3'));
	});
});
