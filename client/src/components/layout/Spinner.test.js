import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('<Spinner />', () => {
	it('should render spinner gif', () => {
		const wrapper = shallow(<Spinner />);

		expect(wrapper.find('img')).toHaveLength(1);
	});
});
